// const gaagleSearch = require('./script');
import gaagleSearch from './script';

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('Gaagle Search', () => {
  it('this is a test', () => {
    gaagleSearch('test', dbMock);
  });

  it('is serching gaagle', () => {
    expect(gaagleSearch('test', dbMock)).toEqual([]);
    expect(gaagleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('will work with undefined and null', () => {
    expect(gaagleSearch(undefined, dbMock)).toEqual([]);
    expect(gaagleSearch(null, dbMock)).toEqual([]);
  });

  it('Does not return more than 3 matches', () => {
    expect(gaagleSearch('.com', dbMock).length).toEqual(3);
  });
});
