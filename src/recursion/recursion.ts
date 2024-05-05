/**
 * Recursion
 * @param data The input data to be processed recursively
 * @param condition A function that checks the termination condition
 * @param operation A function that performs an operation on the data
 * @param callback A function to be called when the recursion terminates
 * @returns The result of the recursion
 */
function recursion<T>(
  data: T,
  condition: (data: T) => boolean,
  operation: (data: T) => T,
  callback: (data: T) => T,
): T {
  if (condition(data)) {
    return callback(data);
  }

  const newData = operation(data);
  return recursion(newData, condition, operation, callback);
}

export default recursion;
