/**
 * Shortcut tables
 * @param {array} arr
 */
export function shortcut_tables(arr) {
  const result = {};
  for (const item of arr) {
    if (result[item] !== undefined) result[item] = parseInt(result[item]) + 1;
    else result[item] = 1;
  }
  return result;
}

export default shortcut_tables;
