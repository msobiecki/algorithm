export async function recursion(data, condition, operation, callback) {
  if (condition(data)) return callback(data);
  else return await recursion(operation(data), condition, operation, callback);
}

export default recursion;
