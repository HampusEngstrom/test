export const filterOnSingleChoice = (map) => {
  const keys = Object.keys(map).filter((key) => map[key]);
  return (item) => keys.every((key) => item[key]);
};

export const filterOnTextInput = (map) => {
  const keys = Object.keys(map);
  return (item) =>
    keys.every((key) => {
      const itemValue = item[key].toLowerCase();
      const mapValue = map[key].toLowerCase();
      return itemValue.indexOf(mapValue) === 0;
    });
};

export const filterOnMultipleChoices = (map) => {
  const keys = Object.keys(map).filter((key) => map[key].length > 0);

  return (item) => keys.every((key) => map[key].includes(item[key]));
};
