export const routes = {
  randomJokes: "http://api.icndb.com/jokes/random/21",
  categories: "http://api.icndb.com/categories",
  categoryJokes: (category) =>
    `http://api.icndb.com/jokes/random/21?limitTo=[${category}]`,
};
