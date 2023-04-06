export const filterByStringParameter = (filter, value, array) => {
  if (value === "") {
    return array;
  } else {
    return array.filter((offer) => offer[filter] === value);
  }
};
export const filterByLowerRangeParameter = (filter, value, array) => {
  if (value === null || value === 0 || value === undefined) {
    return array;
  } else {
    return array.filter((offer) => value <= offer[filter]);
  }
};
export const filterByHigherRangeParameter = (filter, value, array) => {
  if (value === null || value === 0 || value === undefined) {
    return array;
  } else {
    return array.filter((offer) => offer[filter] <= value);
  }
};

export const replaceFilterValue = (
  filter: number | string,
  replace: string | number
): void => {
  filter = +filter === 0 ? replace : filter;
};
