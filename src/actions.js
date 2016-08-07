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
      dispatch(searchForTweetsSuccess(tweets));
    }).catch(function(error){
      dispatch(searchForTweetsError(error));
    });
  };
}

export const SEARCH_FOR_TWEETS_SUCCESS = 'SEARCH_FOR_TWEETS_SUCCESS';

export function searchForTweetsSuccess(tweets) {
  return {
    type: SEARCH_FOR_TWEETS_SUCCESS,
    tweets
  };
}

export const SEARCH_FOR_TWEETS_ERROR = 'SEARCH_FOR_TWEETS_ERROR';

export function searchForTweetsError(error) {
  return {
    type: SEARCH_FOR_TWEETS_SUCCESS,
    error
  };
}
