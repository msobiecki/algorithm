/**
 * Counting sort
 * @param {array} arr
 * @param {int} min
 * @param {int} max
 */
export function counting_sort(arr, min, max) {
  if (arr.length < 2) return arr;
  else {
    let i = min,
      j = 0,
      len = arr.length,
      count = [];
    for (i; i <= max; i++) {
      count[i] = 0;
    }
    for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
      while (count[i] > 0) {
        arr[j] = i;
        j++;
        count[i]--;
      }
    }
    return arr;
  }
}

export default counting_sort;
