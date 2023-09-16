import fetch from 'node-fetch';

export const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      const modeledData = {
        count: data.count,
        results: data.results,
      };
      // console.log(`🔎 | Script2 | getPeoplePromise > data:`, modeledData);

      return modeledData;
    });
};

export const getPeople = async (fetch) => {
  let getRequest = await fetch('https://swapi.dev/api/people/');
  let data = await getRequest.json();

  const modeledData = {
    count: data.count,
    results: data.results,
  };

  // console.log(`🔎 | Script2 | getPeople > data:`, modeledData);
  return modeledData;
};

getPeople(fetch);
