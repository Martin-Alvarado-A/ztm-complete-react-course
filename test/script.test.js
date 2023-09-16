const gaagleSearch = require('./script');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];
it('this is a test', () => {
  gaagleSearch('test', dbMock);
  // console.log(
  //   `🔎 | Testing | gaagleSearch > test:`,
  //   gaagleSearch('dog', dbMock)
  // );
});

it('is serching gaagle', () => {
  expect(gaagleSearch('test', dbMock)).toEqual([]);
  expect(gaagleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});
