/**
 * Sorts an array in-place using the bubble sort algorithm
 * @param array Array to be sorted
 * @returns Sorted array
 */
function bubbleSort(array: number[]): number[] {
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let index = 0; index < n - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    }
    n -= 1;
  } while (swapped);

  return array;
}

export default bubbleSort;
