/**
 * Bubble sort
 * @param {array} arr
 */
export function bubble_sort(arr) {
  if (arr.length < 2) return arr;
  else {
    const arrayLength = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }
      }
    } while (swapped);
    return arr;
  }
}

export default bubble_sort;
