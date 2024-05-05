/**
 * General-purpose recursive function
 * @param data Initial data to process
 * @param condition Function to check the termination condition
 * @param operation Function to perform on the data in each iteration
 * @param callback Function to return the final result
 * @returns Final result after recursion
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
