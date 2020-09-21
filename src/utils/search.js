const search = (searchString, defaultArray) =>
  defaultArray.filter((item) => item.name
  ? item.name.toLowerCase().match(searchString.toLocaleLowerCase())
  : item.title.toLowerCase().match(searchString.toLocaleLowerCase()));

export default search;
