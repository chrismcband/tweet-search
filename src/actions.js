import api from './api';

export const SEARCH_FOR_TWEETS_STARTED = 'SEARCH_FOR_TWEETS_STARTED';

export function searchForTweetsStarted(searchText) {
  return {
    type: SEARCH_FOR_TWEETS_STARTED,
    searchText
  };
}

export const SEARCH_FOR_TWEETS = 'SEARCH_FOR_TWEETS';

export function fetchTweets(searchText) {
  return {
    type: SEARCH_FOR_TWEETS,
    payload: api.search(searchText),
    meta: {
      searchText
    }
  };
}

export const SET_ACTIVE_SEARCH = 'SET_ACTIVE_SEARCH';

export function setActiveSearch(searchText) {
  return {
    type: SET_ACTIVE_SEARCH,
    searchText
  };
}
