// Helper function to determine if a value is an object (excluding arrays and null)
/**
 *
 * @param value
 * @returns
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Recursive deep copy function
/**
 *
 * @param value
 * @returns
 */
function copy(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => copy(item));
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
 * Deep copy
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
