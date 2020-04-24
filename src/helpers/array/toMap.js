export const toMap = (arr, key) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.hasOwnProperty(key)) {
      const value = item[key];
      result[value] = item;
    }
  }
  return result;
};
