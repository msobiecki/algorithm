/**
 * Insertion sort
 * @param {array} arr
 */
export function insertion_sort(arr) {
  if (arr.length < 2) return arr;
  else {
    const arrayLength = arr.length;
    for (let i = 1; i < arrayLength; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
}

export default insertion_sort;
