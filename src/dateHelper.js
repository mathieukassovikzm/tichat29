exports.getListEventsSortedChrono = (items) => {
  items.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  return items;
};

exports.getListEventsSortedAntiChrono = (items) => {
  items.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return items;
};
