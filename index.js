function myEach (collection, callback) {
  let collectionArray = collection;

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }
  
  for (const element of collectionArray) {
    callback(element);
  }

  return collection;
}

function myMap (collection, callback) {
  let collectionArray = collection;
  const returnArray = [];

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }

  for (const element of collectionArray) {
    returnArray.push(callback(element));
  }

  return returnArray;
}

function myReduce(collection, callback, acc) {
  let collectionArray;

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }

  if (acc === undefined) {
    acc = collectionArray.shift();
  }

  for (const element of collectionArray) {
    acc = callback(acc, element, collectionArray);
  }

  return acc;
}

function myFind(collection, predicate) {
  let collectionArray = collection;

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }

  for (const element of collectionArray) {
    if (predicate(element)) {
      return element;
    }
  }
}

function myFilter(collection, predicate) {
  let collectionArray;
  const returnArray = [];

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }

  for (const element of collectionArray) {
    if (predicate(element)) {
      returnArray.push(element);
    }
  }

  return returnArray;
}

function mySize (collection) {
  let collectionArray;

  if (!Array.isArray(collection)) {
    collectionArray = Object.values(collection);
  } else {
    collectionArray = [...collection];
  }

  return collectionArray.length;
}

function myFirst (array, int = 1) {
  const newArr = array.slice(0, int);
  if (newArr.length === 1) {
    return newArr[0];
  } else {
    return newArr;
  }
}

function myLast (array, int) {
  if (int === undefined) {
    return array[array.length-1];
  } else {
    return array.slice(-int);
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}