import api from './api';

export const SEARCH_FOR_TWEETS_STARTED = 'SEARCH_FOR_TWEETS_STARTED';

export function searchForTweetsStarted(searchText) {
  return {
    type: SEARCH_FOR_TWEETS_STARTED,
    searchText
  };
}

export function fetchTweets(searchText) {
  return function(dispatch) {
    dispatch(searchForTweetsStarted(searchText));
    api.search(searchText).then(function (tweets){
      dispatch(searchForTweetsSuccess(searchText, tweets));
    }).catch(function(error){
      dispatch(searchForTweetsError(searchText, error));
    });
  };
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
    type: SEARCH_FOR_TWEETS_SUCCESS,
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
