export const sort = (items) => (key) =>
  items.sort((a, b) => {
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      return a[key] < b[key] ? -1 : 1;
    }

    return items;
  });
