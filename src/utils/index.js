export * from './listUtils';

export const deepCopy = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const newObject = Array.isArray(object) ? [] : {};
  const keys = Object.keys(object);

  for (let key of keys) {
    const value = object[key];
    const isObject = (typeof value === 'object' && value !== null);
    newObject[key] = isObject ? deepCopy(value) : value;
  }

  return newObject;
};
