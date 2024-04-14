/**
 * Quick sort
 * @param {array} arr
 */
export function quick_sort(arr) {
  if (arr.length < 2) return arr;
  else {
    let pivot = arr.shift();
    let less = arr.filter((i) => i <= pivot);
    let greater = arr.filter((i) => i > pivot);
    return [...quick_sort(less), pivot, ...quick_sort(greater)];
  }
}

export default quick_sort;
