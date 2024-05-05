import languages from '../data/global/language.json' assert { type: 'json' };
import countries from '../data/global/country.json' assert { type: 'json' };
import editions from '../data/edition/edition.json' assert { type: 'json' };
import searchTypes from '../data/searcher/search-type.json' assert { type: 'json' };
import searcherTypes from '../data/searcher/searcher-type.json' assert { type: 'json' };
import searchers from '../data/searcher/searcher.json' assert { type: 'json' };
import tags from '../data/tag/tag-all.json' assert { type: 'json' };

// models
import Language from '../models/Language.js';
import Country from '../models/Country.js';
import Edition from '../models/Edition.js';
import SearchType from '../models/SearchType.js';
import SearcherType from '../models/SearcherType.js';
import Searcher from '../models/Searcher.js';
import Tag from '../models/Tag.js';

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

        console.log(newLanguage);
      })
    );
    console.log('createLanguages finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createCountries = async () => {
  // console.log(countries);
  try {
    const count = await Country.estimatedDocumentCount();

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

        console.log(newCountry);
      })
    );
    console.log('createCountries finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createEditions = async () => {
  // console.log(countries);
  try {
    const count = await Edition.estimatedDocumentCount();

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

        console.log(newEdition);
      })
    );
    console.log('createEditions finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createSearchTypes = async () => {
  //   console.log(searchTypes);
  try {
    const count = await SearchType.estimatedDocumentCount();

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

        console.log(newSearchType);
      })
    );
    console.log('createSearchTypes finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createSearcherTypes = async () => {
  //   console.log(searcherTypes);
  try {
    const count = await SearcherType.estimatedDocumentCount();

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

        console.log(newSearcherType);
      })
    );
    console.log('createSearcherTypes finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createSearcher = async () => {
  // console.log(searchers);
  try {
    const count = await Searcher.estimatedDocumentCount();

    if (count > 0) {
      console.log('Searcher contains data in database');
      return;
    }

    console.log('createSearcher started...');
    // si no hay ningun Searcher creado en db
    await Promise.all(
      searchers.map(async (search) => {
        console.log({ search });
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

        console.log(newSearcher);
      })
    );
    console.log('createSearcher finished...');
  } catch (error) {
    console.log(error);
  }
};

export const createTags = async () => {
  // console.log(tags);
  try {
    const count = await Tag.estimatedDocumentCount();

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

        console.log(newTag);
      })
    );
    console.log('createTags finished...');
  } catch (error) {
    console.log(error);
  }
};
