/**
 * Linear search
 * @param {array} list
 * @param {int} item
 */
export function linear_search(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == item) {
      return i;
    }
  }
  return null;
}

export default linear_search;
