export const sort = (items) => (key) => {
  if (items) {
    items.sort((a, b) => {
      if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
        return a[key] < b[key] ? -1 : 1;
      } else if (a.hasOwnProperty(key)) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  return items;
};
