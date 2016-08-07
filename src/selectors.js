import { createSelector } from 'reselect'

export const tweetsAsArray = state => {
  const ids = Object.keys(state.tweets);
  return ids.map(id => state.tweets[id]);
}

export const searchText = state => state.search.searchText;

export const searchedTweets = createSelector(
  tweetsAsArray,
  searchText,
  (tweets, search) => tweets.filter(tweet =>
    tweet.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )
);
