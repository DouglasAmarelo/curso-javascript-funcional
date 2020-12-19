// Map
const customMap = function (fn) {
  const mappedArray = [];
  const changeElement = fn;

  for (let item = 0; item < this.length; item++) {
    const currentItem = this[item];
    const currentIndex = item;
    const initialArray = this;

    const elementChanged = changeElement(
      currentItem,
      currentIndex,
      initialArray
    );

    mappedArray.push(elementChanged);
  }

  return mappedArray;
};

// Filter
const customFilter = function (fn) {
  const filteredArray = [];
  const filterElement = fn;

  for (let item = 0; item < this.length; item++) {
    const currentItem = this[item];
    const currentIndex = item;
    const initialArray = this;

    const elementChanged = filterElement(
      currentItem,
      currentIndex,
      initialArray
    );

    if (elementChanged) {
      filteredArray.push(currentItem);
    }
  }

  return filteredArray;
};

// Reduce
const customReduce = function (fn, initialValue) {
  const reduceElement = fn;
  let accumulator = initialValue;

  for (let item = 0; item < this.length; item++) {
    const currentItem = this[item];
    const currentIndex = item;
    const initialArray = this;

    if (!accumulator && currentIndex === 0) {
      accumulator = currentItem;
      continue;
    }

    accumulator = reduceElement(
      accumulator,
      currentItem,
      currentIndex,
      initialArray
    );
  }

  return accumulator;
};

// Include the methods to Array prototype
Array.prototype.customMap = customMap;
Array.prototype.customFilter = customFilter;
Array.prototype.customReduce = customReduce;

module.exports = {
  customMap,
  customFilter,
  customReduce,
};
