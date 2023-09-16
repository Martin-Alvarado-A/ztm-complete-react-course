import fetch from 'node-fetch';
import { getPeople, getPeoplePromise } from './script2';

it('Calls swapi to get people', () => {
  expect.assertions(1);
  return getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it('Calls swapi to get people async', async () => {
  const data = await getPeople(fetch);
  expect(data.count).toEqual(82);
});

it('Calls swapi to get people Promise', () => {
  expect.assertions(2);
  return getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(2);
  });
});
