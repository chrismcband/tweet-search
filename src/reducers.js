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

function searches(state={ activeSearch: '', searches: {} }, action) {
  switch (action.type) {
    case actions.SEARCH_FOR_TWEETS_STARTED:
    case actions.SEARCH_FOR_TWEETS_SUCCESS:
    case actions.SEARCH_FOR_TWEETS_ERROR:
      const activeSearch = action.type === actions.SEARCH_FOR_TWEETS_STARTED ?
        action.searchText : state.activeSearch;
      const searches = { ...state.searches };
      searches[action.searchText] = search(searches[action.searchText], action);
      return {
        ...state,
        activeSearch,
        searches
      };
    case actions.SET_ACTIVE_SEARCH:
      return {
        ...state,
        activeSearch: action.searchText
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  tweets,
  searches
});

export default reducer;
