import urlsGooggleEs from '../../data/searcher-urls/google-urls_es.json' assert { type: 'json' };
import urlsGiphyEs from '../../data/searcher-urls/giphy-urls_es.json' assert { type: 'json' };
import urlsBingEs from '../../data/searcher-urls/bing-urls_es.json' assert { type: 'json' };
import urlsXEs from '../../data/searcher-urls/x-urls_es.json' assert { type: 'json' };
import urlsYoutubeEs from '../../data/searcher-urls/youtube-urls_es.json' assert { type: 'json' };

// Merge the file contents
const mergeUrlsSearcher = [
  ...urlsGooggleEs,
  ...urlsGiphyEs,
  ...urlsBingEs,
  ...urlsXEs,
  ...urlsYoutubeEs,
];
// console.log(mergeUrlsSearcher);

/**
 *
 * @param {*} editionAlias
 * @param {*} searcher
 * @param {*} searchType
 * @param {*} query
 * @returns url string formated with this params
 */
const sertuxGetUrl = (editionAlias, searcher, searchType, query) => {
  let searcherUrls = mergeUrlsSearcher.filter(
    (searcherUrl) =>
      searcherUrl.editionAlias === editionAlias &&
      searcherUrl.searcher === searcher &&
      searcherUrl.searchType === searchType
  );
  if (searcherUrls.length < 0) {
    console.error('URL not found on searchers');
    return undefined;
  }

  //   console.log(searcherUrls);
  let url = new URL(searcherUrls[0].url);
  switch (searcher) {
    case 'google':
      url.searchParams.append('q', query);
      break;
    case 'giphy':
      url.searchParams.append('q', query);
      break;
    case 'bing':
      url.searchParams.append('q', query);
      break;
    case 'youtube':
      url.searchParams.append('search_query', query);
      break;
    case 'x':
      url.searchParams.append('q', query);
    default:
      console.log(
        `Sorry no searcher combination exists. ${editionAlias} - ${searcher} - ${searchType} - ${query}`
      );
      break;
  }
  return url.href;
};

export { sertuxGetUrl };
