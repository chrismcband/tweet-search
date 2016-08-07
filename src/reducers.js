import { combineReducers } from 'redux';
import * as actions from './actions';

function tweets(state={}, action) {
  switch (action.type) {
    case actions.SEARCH_FOR_TWEETS_SUCCESS:
      const newState = { ...state };
      action.tweets.forEach(tweet => {
        newState[tweet.id] = tweet;
      });

      return newState;
    default:
      return state;
  }
}

function search(state={searchText: '', isSearching: false}, action) {
  switch (action.type) {
    case actions.SEARCH_FOR_TWEETS_STARTED:
      return { ...state, searchText: action.searchText, isSearching: true };
    case actions.SEARCH_FOR_TWEETS_SUCCESS:
    case actions.SEARCH_FOR_TWEETS_ERROR:
      return { ...state, isSearching: false };
    default:
      return state;
  }
}

const reducer = combineReducers({
  tweets,
  search
});

export default reducer;
