import fetch from 'node-fetch';
import { getPeople, getPeoplePromise } from './script2';
import { jest } from '@jest/globals';

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

it('getPeople returns count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(4);
  return getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(2);
  });
});
