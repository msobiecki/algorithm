/**
 * Deep copy
 * @param {object|array} inObject
 */
export function deep_copy(inObject) {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }

  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    outObject[key] = deep_copy(value);
  }

  return outObject;
}
export default deep_copy;
