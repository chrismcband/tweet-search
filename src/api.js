import ES6Promise from 'es6-promise';
ES6Promise.polyfill();
import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:7890/1.1';

function search(query) {
  const queryEncoded = encodeURIComponent(query);
  return fetch(`${baseUrl}/search/tweets.json?q=${queryEncoded}`)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error('Received bad status '+response.status);
      }

      return response.json();
    })
    .then(function(json) {
      return json.statuses;
    });
}

export default {
  search
};
