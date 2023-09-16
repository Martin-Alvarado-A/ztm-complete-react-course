// const fetch = require('node-fetch');
import fetch from 'node-fetch';

export const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      const modeledData = {
        count: data.count,
        results: data.results,
      };
      console.log(`🔎 | getPeoplePromise | modeledData:`, modeledData);

      return modeledData;
    });
};

export const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.dev/api/people/');
  const data = await getRequest.json();

  const modeledData = {
    count: data.count,
    results: data.results,
  };

  console.log(`🔎 | getPeople | modeledData:`, modeledData);
  return modeledData;
};

getPeople(fetch);
