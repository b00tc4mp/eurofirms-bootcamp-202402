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
    // validate.tagName(tagName);// No validamos esto asi porque el comportamiento es especial
    let tagNameTrimed = tagName.trim();
    if (!/\S/.test(tagName)) {
      // string is empty and just whitespace
      tagNameTrimed = 'NoTagged'; // este es el valor que se le da cuando utilizas cadena vacia
    }
    if (tagNameTrimed.length > 280) {
      throw new ContentError(`tag name is greather than 280 characters`);
    }

    for (var i = 0; i < tagNameTrimed.length; i++) {
      var char = tagNameTrimed[i];

      if (char === ' ') {
        throw new ContentError('tag name contains blank');
      }
    }
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
        break;
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

export const getSearchesByEditionIdAndSearcherId = async (req, res) => {
  try {
    const { editionId, searcherId } = req.params;
    validate.id(editionId);
    validate.id(searcherId);

    const searches = await Search.find({
      edition: editionId,
      searcher: searcherId,
    })
      .populate('user', '_id username')
      .populate('edition', '_id code name')
      .populate('tag', '_id name edition')
      .populate('searcher', '_id name displayName')
      .populate('searchType', '_id name')
      .lean()
      .exec();

    if (search._id) {
      search.id = search._id;
      delete search._id;
    }

    if (search.user?._id) {
      search.user.id = search.user._id;
      delete search.user._id;
    }

    if (search.edition?._id) {
      search.edition.id = search.edition._id;
      delete search.edition._id;
    }

    if (search.tag?._id) {
      search.tag.id = search.tag._id;
      delete search.tag._id;
    }

    if (search.searcher?._id) {
      search.searcher.id = search.searcher._id;
      delete search.searcher._id;
    }

    if (search.searchType?._id) {
      search.searchType.id = search.searchType._id;
      delete search.searchType._id;
    }

    return res.status(200).json(searches);
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

export const getSearchById = async (req, res) => {
  try {
    const { searchId } = req.params;
    validate.id(searchId);

    const search = await Search.findById(searchId)
      .populate('user', '_id username')
      .populate('edition', '_id code name')
      .populate('tag', '_id name edition')
      .populate('searcher', '_id name displayName')
      .populate('searchType', '_id name')
      .lean()
      .exec();

    if (search._id) {
      search.id = search._id;
      delete search._id;
    }

    if (search.user?._id) {
      search.user.id = search.user._id;
      delete search.user._id;
    }

    if (search.edition?._id) {
      search.edition.id = search.edition._id;
      delete search.edition._id;
    }

    if (search.tag?._id) {
      search.tag.id = search.tag._id;
      delete search.tag._id;
    }

    if (search.searcher?._id) {
      search.searcher.id = search.searcher._id;
      delete search.searcher._id;
    }

    if (search.searchType?._id) {
      search.searchType.id = search.searchType._id;
      delete search.searchType._id;
    }

    return res.status(200).json(search);
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

export const getSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId =
  async (req, res) => {
    try {
      const { editionId, searcherId, searchTypeId, tagId } = req.body;
      console.log(editionId, searcherId, searchTypeId, tagId);
      // solo validamos el edition porque vamos
      // ha cargar las searches en función de los parametros que vienen

      if (editionId && searcherId && searchTypeId && tagId) {
        validate.id(editionId);
        validate.id(searcherId);
        validate.id(searchTypeId);
        validate.id(tagId);

        const searches = await Search.find({
          edition: editionId,
          searcher: searcherId,
          searchType: searchTypeId,
          tag: tagId,
        })
          .sort({ createdAt: -1 })
          .populate('user', '_id username')
          .populate('edition', '_id code name')
          .populate('tag', '_id name edition')
          .populate('searcher', '_id name displayName')
          .populate('searchType', '_id name')
          .lean()
          .exec();
        // console.log('editionId && searcherId && searchTypeId && tagId');
        // console.log(searches);

        if (searches) {
          searches.map((search) => {
            if (search._id) {
              search.id = search._id;
              delete search._id;
            }

            if (search.user?._id) {
              search.user.id = search.user._id;
              delete search.user._id;
            }

            if (search.edition?._id) {
              search.edition.id = search.edition._id;
              delete search.edition._id;
            }

            if (search.tag?._id) {
              search.tag.id = search.tag._id;
              delete search.tag._id;
            }

            if (search.searcher?._id) {
              search.searcher.id = search.searcher._id;
              delete search.searcher._id;
            }

            if (search.searchType?._id) {
              search.searchType.id = search.searchType._id;
              delete search.searchType._id;
            }
          });
        }

        return res.status(200).json(searches);
      } else if (editionId && searcherId && searchTypeId && !tagId) {
        validate.id(editionId);
        validate.id(searcherId);
        validate.id(searchTypeId);

        const searches = await Search.find({
          edition: editionId,
          searcher: searcherId,
          searchType: searchTypeId,
        })
          .sort({ createdAt: -1 })
          .populate('user', '_id username')
          .populate('edition', '_id code name')
          .populate('tag', '_id name edition')
          .populate('searcher', '_id name displayName')
          .populate('searchType', '_id name')
          .lean()
          .exec();

        if (searches) {
          searches.map((search) => {
            if (search._id) {
              search.id = search._id;
              delete search._id;
            }

            if (search.user?._id) {
              search.user.id = search.user._id;
              delete search.user._id;
            }

            if (search.edition?._id) {
              search.edition.id = search.edition._id;
              delete search.edition._id;
            }

            if (search.tag?._id) {
              search.tag.id = search.tag._id;
              delete search.tag._id;
            }

            if (search.searcher?._id) {
              search.searcher.id = search.searcher._id;
              delete search.searcher._id;
            }

            if (search.searchType?._id) {
              search.searchType.id = search.searchType._id;
              delete search.searchType._id;
            }
          });
        }

        return res.status(200).json(searches);
      } else if (editionId && searcherId && !searchTypeId && !tagId) {
        validate.id(editionId);
        validate.id(searcherId);

        const searches = await Search.find({
          edition: editionId,
          searcher: searcherId,
        })
          .sort({ createdAt: -1 })
          .populate('user', '_id username')
          .populate('edition', '_id code name')
          .populate('tag', '_id name edition')
          .populate('searcher', '_id name displayName')
          .populate('searchType', '_id name')
          .lean()
          .exec();

        if (searches) {
          searches.map((search) => {
            if (search._id) {
              search.id = search._id;
              delete search._id;
            }

            if (search.user?._id) {
              search.user.id = search.user._id;
              delete search.user._id;
            }

            if (search.edition?._id) {
              search.edition.id = search.edition._id;
              delete search.edition._id;
            }

            if (search.tag?._id) {
              search.tag.id = search.tag._id;
              delete search.tag._id;
            }

            if (search.searcher?._id) {
              search.searcher.id = search.searcher._id;
              delete search.searcher._id;
            }

            if (search.searchType?._id) {
              search.searchType.id = search.searchType._id;
              delete search.searchType._id;
            }
          });
        }

        return res.status(200).json(searches);
      } else if (editionId && !searcherId && !searchTypeId && !tagId) {
        validate.id(editionId);

        const searches = await Search.find({
          edition: editionId,
        })
          .sort({ createdAt: -1 })
          .populate('user', '_id username')
          .populate('edition', '_id code name')
          .populate('tag', '_id name edition')
          .populate('searcher', '_id name displayName')
          .populate('searchType', '_id name')
          .lean()
          .exec();

        if (searches) {
          searches.map((search) => {
            if (search._id) {
              search.id = search._id;
              delete search._id;
            }

            if (search.user?._id) {
              search.user.id = search.user._id;
              delete search.user._id;
            }

            if (search.edition?._id) {
              search.edition.id = search.edition._id;
              delete search.edition._id;
            }

            if (search.tag?._id) {
              search.tag.id = search.tag._id;
              delete search.tag._id;
            }

            if (search.searcher?._id) {
              search.searcher.id = search.searcher._id;
              delete search.searcher._id;
            }

            if (search.searchType?._id) {
              search.searchType.id = search.searchType._id;
              delete search.searchType._id;
            }
          });
        }

        return res.status(200).json(searches);
      } else {
        //devolver algo
        throw new ContentError('specifies search values');
      }
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
