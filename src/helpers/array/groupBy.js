export const groupBy = (arr, key) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.hasOwnProperty(key)) {
      const value = item[key];
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(item);
    }
  }
  return result;
};
