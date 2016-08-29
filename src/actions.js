export const SEARCH_FOR_TWEETS_REQUESTED = 'SEARCH_FOR_TWEETS_REQUESTED';

export function searchForTweetsRequested(searchText) {
  return {
    type: SEARCH_FOR_TWEETS_REQUESTED,
    searchText
  }
}

export const SEARCH_FOR_TWEETS_SUCCESS = 'SEARCH_FOR_TWEETS_SUCCESS';

export function searchForTweetsSuccess(searchText, tweets) {
  return {
    type: SEARCH_FOR_TWEETS_SUCCESS,
    searchText,
    tweets
  };
}

export const SEARCH_FOR_TWEETS_ERROR = 'SEARCH_FOR_TWEETS_ERROR';

export function searchForTweetsError(searchText, error) {
  return {
    type: SEARCH_FOR_TWEETS_ERROR,
    searchText,
    error
  };
}

export const SET_ACTIVE_SEARCH = 'SET_ACTIVE_SEARCH';

export function setActiveSearch(searchText) {
  return {
    type: SET_ACTIVE_SEARCH,
    searchText
  };
}
