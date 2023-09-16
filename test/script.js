const gaagleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
];

// const gaagleSearch = (searchInput, db) => {
export default gaagleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(`🔎 | gaagleSearch | test:`, gaagleSearch('cats', gaagleDatabase));

// module.exports = gaagleSearch;
