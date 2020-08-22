/**
 * Find smallest
 * @param {array} arr
 */
function find_smallest(arr) {
  let smallest_index = 0;
  let smallest = arr[smallest_index];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest_index = i;
      smallest = arr[smallest_index];
    }
  }
  return smallest_index;
}

/**
 * Select sort
 * @param {array} arr
 */
export function select_sort(arr) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(...arr.splice(find_smallest(arr), 1));
  }
  return newArr;
}

export default select_sort;
