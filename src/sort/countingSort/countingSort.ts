/* eslint no-param-reassign: ["error", { "props": false }] */
/**
 * Counting sort
 * @param {number[]} array
 * @param {number} min
 * @param {number} max
 */
function countingSort(array: number[], min: number, max: number) {
  if (array.length < 2) return array;

  let i = min;
  let j = 0;
  const len = array.length;
  const count = [];
  for (i; i <= max; i += 1) {
    count[i] = 0;
  }
  for (i = 0; i < len; i += 1) {
    count[array[i]] += 1;
  }
  for (i = min; i <= max; i += 1) {
    while (count[i] > 0) {
      array[j] = i;
      j += 1;
      count[i] -= 1;
    }
  }
  return array;
}

export default countingSort;
