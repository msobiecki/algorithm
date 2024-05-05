/**
 * Sorts an array using the insertion sort algorithm
 * @param array Array to be sorted
 * @returns Sorted array
 */
function insertionSort(array: number[]) {
  if (array.length < 2) return array;

  const arrayLength = array.length;
  for (let index = 1; index < arrayLength; index += 1) {
    const key = array[index];
    let previousIndex = index - 1;
    while (previousIndex >= 0 && array[previousIndex] > key) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex -= 1;
    }
    array[previousIndex + 1] = key;
  }
  return array;
}

export default insertionSort;
