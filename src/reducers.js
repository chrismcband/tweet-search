import { combineReducers } from 'redux';
import * as actions from './actions';

function tweets(state={}, action) {
  switch (action.type) {
    case actions.SEARCH_FOR_TWEETS:
      if (action.error) {
        return state;
      }

      const newState = { ...state };
      action.payload.forEach(tweet => {
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
    case actions.SEARCH_FOR_TWEETS:
      return { ...state, isSearching: false };
    default:
      return state;
  }
}

function searches(state={ activeSearch: '', searches: {} }, action) {
  switch (action.type) {
    case actions.SEARCH_FOR_TWEETS_STARTED:
      return {
        ...state,
        activeSearch: action.searchText,
        searches: {
          ...state.searches,
          [action.searchText]:
            search(state.searches[action.searchText], action)
        }
      };
    case actions.SEARCH_FOR_TWEETS:
      if (action.error) {
        return {
          ...state,
          error: action.error
        };
      } else {
        const searchText = action.meta.searchText;
        return {
          ...state,
          error: null,
          searches: {
            ...state.searches,
            [searchText]: search(state.searches[searchText], action)
          }
        };
      }
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
