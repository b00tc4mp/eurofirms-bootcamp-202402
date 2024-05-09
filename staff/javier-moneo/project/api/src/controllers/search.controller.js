import Search from '../models/Search.js';
import Edition from '../models/Edition.js';
import Searcher from '../models/Searcher.js';
import SearchType from '../models/SearchType.js';
import Tag from '../models/Tag.js';
import SearcherUrl from '../models/SearcherUrl.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError } = errors;

export const createSearch = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken
    // console.log('createSearch: userId', userId);
    // console.log(req.body)

    const { query, editionId, tagName, searcherId, searchTypeId } = req.body;
    // console.log({ query, editionId, tagName, searcherId, searchTypeId });

    // La verificación de si es user banned lo verificamos con middleware
    // verificar que los ids pasados tienen sus entidades
    const edition = await Edition.findById(editionId);
    if (!edition) {
      throw new MatchError('No edition found');
    }

    const searcher = await Searcher.findById(searcherId);
    if (!searcher) {
      throw new MatchError('No searcher found');
    }

    const searchType = await SearchType.findById(searchTypeId);
    if (!searchType) {
      throw new MatchError('No searchType found');
    }

    // Verificar que tag existe, si no, se crea.
    validate.tagName(tagName);
    const tagNameTrimed = tagName.trim();
    const tag = await Tag.findOne({ name: tagNameTrimed, edition: editionId });
    let tagId;
    if (!tag) {
      // Create tag
      // console.log('new tag saved');
      const newTag = new Tag({
        name: tagNameTrimed,
        edition: editionId,
        user: userId,
      });
      const tagSaved = await newTag.save();
      tagId = tagSaved._id;
    } else {
      if (tag.isBanned) {
        throw new MatchError(
          `Tag ${tagNameTrimed} is banned, you can not add searches to this tag`
        );
      }
      tagId = tag._id;
    }

    // verificar longitudes
    validate.searchQuery(query);
    const queryTrimed = query.trim();

    // Si search existe previamente no la crea pero da un mensaje correcto de 200
    const search = await Search.findOne({
      edition: editionId,
      searcher: searcherId,
      searchType: searchTypeId,
      query: queryTrimed,
      tag: tagId,
    });

    if (search) {
      return res
        .status(200)
        .json({ url: search.url, message: 'Search was added previously' });
    }

    // Si la search no existe en db la creamos y devolvemos la url
    // generamos la url primero
    const searcherUrl = await SearcherUrl.findOne({
      searcher: searcherId,
      edition: editionId,
      searchType: searchTypeId,
    });
    if (!searcherUrl) {
      throw new MatchError('No exists searcherUrl');
    }

    // generamos url
    let url = new URL(searcherUrl.url);
    switch (searcher.name) {
      case 'google':
        url.searchParams.append('q', queryTrimed);
        break;
      case 'giphy':
        url.searchParams.append('q', queryTrimed);
        break;
      case 'bing':
        url.searchParams.append('q', queryTrimed);
        break;
      case 'youtube':
        url.searchParams.append('search_query', queryTrimed);
        break;
      case 'x':
        url.searchParams.append('q', queryTrimed);
      default:
        console.error(`Sorry no searcher combination exists.`);
        throw new MatchError(`Sorry no searcher combination exists.`);
        break;
    }

    const newSearch = new Search({
      url: url.toString(),
      query: queryTrimed,
      user: userId,
      edition: editionId,
      tag: tagId,
      searcher: searcherId,
      searchType: searchTypeId,
    });

    const searchSaved = await newSearch.save();

    return res
      .status(201)
      .json({ url: url.toString(), message: 'search created' });
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};
