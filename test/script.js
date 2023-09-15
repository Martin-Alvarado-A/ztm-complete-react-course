const gaagleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
];

const gaagleSearch = (searchInput) => {
  const matches = gaagleDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(`🔎 | gaagleSearch | test:`, gaagleSearch('cats'));
