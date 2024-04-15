/* eslint no-param-reassign: ["error", { "props": false }] */

/**
 * Heapify
 * @param array Array of numbers
 * @param length Length of array
 * @param index Index
 * @returns Array
 */
function heapify(array: number[], length: number, index: number) {
  let largest = index;
  const left = index * 2 + 1;
  const right = left + 1;

  if (left < length && array[left] > array[largest]) largest = left;

  if (right < length && array[right] > array[largest]) largest = right;

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, length, largest);
  }

  return array;
}

/**
 * Heap sort
 * @param array Array of numbers
 * @returns Sorted array
 */
function heapSort(array: number[]) {
  if (array.length < 2) return array;

  const arrayLength = array.length;
  let index = Math.floor(arrayLength / 2 - 1);
  let k = arrayLength - 1;

  while (index >= 0) {
    heapify(array, arrayLength, index);
    index -= 1;
  }

  while (k >= 0) {
    [array[0], array[k]] = [array[k], array[0]];
    heapify(array, k, 0);
    k -= 1;
  }
  return array;
}

export default heapSort;
