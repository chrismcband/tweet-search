import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { SEARCH_FOR_TWEETS_REQUESTED, searchForTweetsSuccess,
  searchForTweetsError } from './actions';
import api from './api';

// worker saga to fetch the tweets
function* fetchTweets(action) {
  try {
    const tweets = yield call(api.search, action.searchText);
    yield put(searchForTweetsSuccess(action.searchText, tweets));
  } catch (error) {
    yield put(searchForTweetsError(action.searchText, error.message));
  }
}

// watcher saga will spawn a new fetchTweets task for
// every SEARCH_FOR_TWEETS_REQUESTED
export function* watchSearchTweets() {
  yield* takeEvery(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
  // yield* takeLatest(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets);
}

// root saga that will be run, we just fork the watcher saga
export default function* rootSaga() {
  yield fork(watchSearchTweets);
}
