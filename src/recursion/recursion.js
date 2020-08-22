/**
 * Recursion
 * @param {any} data
 * @param {function} condition
 * @param {function} operation
 * @param {function} callback
 */
export async function recursion(data, condition, operation, callback) {
  if (condition(data)) return callback(data);
  else return await recursion(operation(data), condition, operation, callback);
}

export default recursion;
