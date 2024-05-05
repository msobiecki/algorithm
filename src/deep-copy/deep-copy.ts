/**
 * Helper function to determine if a value is an object (excluding arrays and null)
 * @param value The value to check
 * @returns Whether the value is an object (excluding arrays and null)
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Recursive deep copy function
 * @param value The value to copy
 * @returns Deep copy of the value
 */
function copy(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((element) => copy(element));
  }
  if (isObject(value)) {
    const copiedObject: Record<string, unknown> = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        copiedObject[key] = copy(value[key]);
      }
    }
    return copiedObject;
  }
  return value;
}

/**
 * Deep copy function
 * @param inObject Object to copy
 * @returns Deep copy of the object
 */
function deepCopy<T>(inObject: T): T {
  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }

  return copy(inObject) as T;
}

export default deepCopy;
