import languages from '../data/global/language.json' assert { type: 'json' };
import countries from '../data/global/country.json' assert { type: 'json' };
import editions from '../data/edition/edition.json' assert { type: 'json' };
import searchTypes from '../data/searcher/search-type.json' assert { type: 'json' };
import searcherTypes from '../data/searcher/searcher-type.json' assert { type: 'json' };
import searchers from '../data/searcher/searcher.json' assert { type: 'json' };
import tags from '../data/tag/tag-all.json' assert { type: 'json' };
import tagAgregators from '../data/tag-aggregator-url/tag-aggregator-url-all.json' assert { type: 'json' };
import searcherUrls from '../data/searcher-urls/searcher-urls-all.json' assert { type: 'json' };
import menuSearchTags from '../data/searcher/menu-search-tag/menu-search-tag-all.json' assert { type: 'json' };
import menuSearchTypes from '../data/searcher/menu-search-type/menu-search-type-all.json' assert { type: 'json' };

// models
import Language from '../models/Language.js';
import Country from '../models/Country.js';
import Edition from '../models/Edition.js';
import SearchType from '../models/SearchType.js';
import SearcherType from '../models/SearcherType.js';
import Searcher from '../models/Searcher.js';
import Tag from '../models/Tag.js';
import TagAggregator from '../models/TagAggregator.js';
import SearcherUrl from '../models/SearcherUrl.js';
import MenuSearchTag from '../models/MenuSearchTag.js';
import MenuSearchType from '../models/MenuSearchType.js';

export const createLanguages = async () => {
  // console.log(language);
  try {
    const count = await Language.estimatedDocumentCount();

    if (count > 0) {
      console.log('Language contains data in database');
      return;
    }

    console.log('createLanguages started...');
    // si no hay ningun Language creado en db
    await Promise.all(
      languages.map(async (language) => {
        const newLanguage = await new Language({
          code: language.code,
          languageNative: language.languageNative,
        }).save();

        // console.log(newLanguage);
      })
    );
    console.log('createLanguages finished...');
  } catch (error) {
    console.log(error);
  } finally {
    console.log({ languages: await Language.estimatedDocumentCount() });
  }
};

export const createCountries = async () => {
  // console.log(countries);
  try {
    const count = await Country.estimatedDocumentCount();

    console.log({ countries: count });

    if (count > 0) {
      console.log('Country contains data in database');
      return;
    }

    console.log('createCountries started...');
    // si no hay ningun Country creado en db
    await Promise.all(
      countries.map(async (country) => {
        const newCountry = await new Country({
          code: country.code,
          nativeName: country.nativeName,
        }).save();

        // console.log(newCountry);
      })
    );
    console.log('createCountries finished...');
    console.log({ countries: await Country.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createEditions = async () => {
  // console.log(countries);
  try {
    const count = await Edition.estimatedDocumentCount();

    console.log({ editions: count });

    if (count > 0) {
      console.log('Edition contains data in database');
      return;
    }

    console.log('createEditions started...');
    // si no hay ningun Edition creado en db
    await Promise.all(
      editions.map(async (edition) => {
        const language = await Language.findOne({ code: edition.codeLanguage });
        const country = await Country.findOne({ code: edition.codeCountry });

        const newEdition = await new Edition({
          code: edition.alias,
          name: edition.name,
          language: language._id,
          country: country._id,
          isActive: edition.isActive,
        }).save();

        // console.log(newEdition);
      })
    );
    console.log('createEditions finished...');
    console.log({ editions: await Edition.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createSearchTypes = async () => {
  //   console.log(searchTypes);
  try {
    const count = await SearchType.estimatedDocumentCount();

    console.log({ searchTypes: count });

    if (count > 0) {
      console.log('SearchType contains data in database');
      return;
    }

    console.log('createSearchTypes started...');
    // si no hay ningun SearchType creado en db
    await Promise.all(
      searchTypes.map(async (searchType) => {
        const newSearchType = await new SearchType({
          name: searchType.name,
        }).save();

        // console.log(newSearchType);
      })
    );
    console.log('createSearchTypes finished...');
    console.log({ searchTypes: await SearchType.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createSearcherTypes = async () => {
  //   console.log(searcherTypes);
  try {
    const count = await SearcherType.estimatedDocumentCount();

    console.log({ searcherTypes: count });

    if (count > 0) {
      console.log('SearcherType contains data in database');
      return;
    }

    console.log('createSearcherTypes started...');
    // si no hay ningun SearcherType creado en db
    await Promise.all(
      searcherTypes.map(async (searcherType) => {
        const newSearcherType = await new SearcherType({
          name: searcherType.name,
        }).save();

        // console.log(newSearcherType);
      })
    );
    console.log('createSearcherTypes finished...');
    console.log({ searcherTypes: await SearcherType.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createSearcher = async () => {
  // console.log(searchers);
  try {
    const count = await Searcher.estimatedDocumentCount();

    console.log({ searchers: count });

    if (count > 0) {
      console.log('Searcher contains data in database');
      return;
    }

    console.log('createSearcher started...');
    // si no hay ningun Searcher creado en db
    await Promise.all(
      searchers.map(async (search) => {
        // console.log({ search });
        const searcherType = await SearcherType.findOne({
          name: search.searcherType,
        });
        // console.log(searcherType);
        let searchTypesArray = [];
        for (let i = 0; i < search.searchType.length; i++) {
          //   console.log(search.searchType[i]);
          const searchType = await SearchType.findOne({
            name: search.searchType[i],
          });
          searchTypesArray.push(searchType._id);
          //   console.log(searchType);
        }
        // console.log({ searchTypesArray });

        const newSearcher = await new Searcher({
          alias: search.alias,
          name: search.name,
          displayName: search.displayName,
          isActive: search.isActive,
          index: search.index,
          searcherType: searcherType._id,
          searchTypes: searchTypesArray,
        }).save();

        // console.log(newSearcher);
      })
    );
    console.log('createSearcher finished...');
    console.log({ searchers: await Searcher.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createTags = async () => {
  // console.log(tags);
  try {
    const count = await Tag.estimatedDocumentCount();

    console.log({ tags: count });

    if (count > 0) {
      console.log('Tag contains data in database');
      return;
    }

    console.log('createTags started...');
    // si no hay ningun Tag creado en db
    await Promise.all(
      tags.map(async (tag) => {
        const edition = await Edition.findOne({ code: tag.editionAlias });

        const newTag = await new Tag({
          name: tag.name,
          description: '',
          edition: edition._id,
        }).save();

        // console.log(newTag);
      })
    );
    console.log('createTags finished...');
    console.log({ tags: await Tag.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createTagAggregators = async () => {
  // console.log(tagAgregators);
  try {
    const count = await TagAggregator.estimatedDocumentCount();

    console.log({ tagsAggregators: count });

    if (count > 0) {
      console.log('TagAggregator contains data in database');
      return;
    }

    console.log('createTagAggregators started...');
    // si no hay ningun TagAggregator creado en db
    await Promise.all(
      tagAgregators.map(async (tagAggregator) => {
        const edition = await Edition.findOne({
          code: tagAggregator.editionAlias,
        });
        const tag = await Tag.findOne({
          name: tagAggregator.tagName,
          edition: edition._id,
        });
        const searchType = await SearchType.findOne({
          name: tagAggregator.searchType,
        });

        // console.log({ edition });
        // console.log({ tag });
        // console.log({ searchType });
        const newTagAggregator = await new TagAggregator({
          service: tagAggregator.service,
          url: tagAggregator.url,
          edition: edition._id,
          tag: tag._id,
          searchType: searchType._id,
        }).save();

        // console.log(newTagAggregator);
      })
    );
    console.log('createTagAggregators finished...');
    console.log({
      tagsAggregators: await TagAggregator.estimatedDocumentCount(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const createSearchUrls = async () => {
  // console.log(searcherUrls);
  try {
    const count = await SearcherUrl.estimatedDocumentCount();

    console.log({ SearcherUrls: count });

    if (count > 0) {
      console.log('SearcherUrl contains data in database');
      return;
    }

    console.log('createSearchUrls started...');
    // si no hay ningun TagAggregator creado en db
    await Promise.all(
      searcherUrls.map(async (searcherUrl) => {
        const edition = await Edition.findOne({
          code: searcherUrl.editionAlias,
        });
        const searcherType = await SearcherType.findOne({
          name: searcherUrl.searcherType,
        });
        const searchType = await SearchType.findOne({
          name: searcherUrl.searchType,
        });

        const searcher = await Searcher.findOne({ name: searcherUrl.searcher });

        const newSearcher = await new SearcherUrl({
          url: searcherUrl.url,
          urlExample: searcherUrl.urlExample,
          edition: edition._id,
          searcher: searcher._id,
          searchType: searchType._id,
          searcherType: searcherType._id,
        }).save();

        // console.log(newSearcher);
      })
    );
    console.log('createSearchUrls finished...');
    console.log({ SearcherUrls: await SearcherUrl.estimatedDocumentCount() });
  } catch (error) {
    console.log(error);
  }
};

export const createMenuSearchTags = async () => {
  // console.log(menuSearchTags);
  try {
    const count = await MenuSearchTag.estimatedDocumentCount();

    console.log({ menuSearchTags: count });

    if (count > 0) {
      console.log('MenuSearchTag contains data in database');
      return;
    }

    console.log('createMenuSearchTags started...');
    // si no hay ningun MenuSearchTag creado en db
    await Promise.all(
      menuSearchTags.map(async (menuSearchTag) => {
        const edition = await Edition.findOne({
          code: menuSearchTag.editionAlias,
        });
        const tag = await Tag.findOne({
          name: menuSearchTag.tagName,
        });
        const searchType = await SearchType.findOne({
          name: menuSearchTag.searchType,
        });

        const newMenuSearchTag = await new MenuSearchTag({
          name: menuSearchTag.name,
          index: menuSearchTag.index,
          edition: edition._id,
          searchType: searchType._id,
          tag: tag._id,
        }).save();

        // console.log(newMenuSearchTag);
      })
    );
    console.log('createMenuSearchTags finished...');
    console.log({
      menuSearchTags: await MenuSearchTag.estimatedDocumentCount(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const createMenuSearchTypes = async () => {
  // console.log(menuSearchTypes);
  try {
    const count = await MenuSearchType.estimatedDocumentCount();

    console.log({ menuSearchTypes: count });

    if (count > 0) {
      console.log('MenuSearchType contains data in database');
      return;
    }

    console.log('createMenuSearchTypes started...');
    // si no hay ningun MenuSearchType creado en db
    await Promise.all(
      menuSearchTypes.map(async (menuSearchType) => {
        // console.log({
        //   editionAlias: menuSearchType.editionAlias,
        //   searcher: menuSearchType.searcherName,
        //   searchType: menuSearchType.searchType,
        // });

        const edition = await Edition.findOne({
          code: menuSearchType.editionAlias,
        });
        const searcher = await Searcher.findOne({
          name: menuSearchType.searcherName,
        });
        // console.log({ searcher });
        const searchType = await SearchType.findOne({
          name: menuSearchType.searchType,
        });

        const newMenuSearchType = await new MenuSearchType({
          name: menuSearchType.menuName,
          index: menuSearchType.index,
          edition: edition._id,
          searchType: searchType._id,
          searcher: searcher._id,
        }).save();

        // console.log(newMenuSearchType);
      })
    );
    console.log('createMenuSearchTypes finished...');
    console.log({
      menuSearchTypes: await MenuSearchType.estimatedDocumentCount(),
    });
  } catch (error) {
    console.log(error);
  }
};
