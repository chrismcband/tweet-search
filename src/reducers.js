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
    case actions.SEARCH_FOR_TWEETS_REQUESTED:
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
    case actions.SEARCH_FOR_TWEETS_REQUESTED:
      return {
        ...state,
        activeSearch: action.searchText,
        searches: {
          ...state.searches,
          [action.searchText]:
            search(state.searches[action.searchText], action)
        }
      };
    case actions.SEARCH_FOR_TWEETS_SUCCESS:
      return {
        ...state,
        error: null,
        searches: {
          ...state.searches,
          [action.searchText]: search(state.searches[action.searchText], action)
        }
      };
    case actions.SEARCH_FOR_TWEETS_ERROR:
      return {
        ...state,
        error: action.error
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

function selectedUser(state=null, action) {
  switch (action.type) {
    case actions.SHOW_USER_MODAL:
      return action.payload

    case actions.HIDE_USER_MODAL:
      return null
    default:
      return state
  }
}

const reducer = combineReducers({
  tweets,
  searches,
  selectedUser
});

export default reducer;
