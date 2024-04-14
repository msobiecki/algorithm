/* eslint no-param-reassign: ["error", { "props": false }] */
/**
 * Bubble sort
 * @param {number[]} array
 */
function bubbleSort(array: number[]) {
  if (array.length < 2) return array;

  const arrayLength = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrayLength; i += 1) {
      for (let j = 0; j < arrayLength; j += 1) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }
      }
    }
  } while (swapped);
  return array;
}

export default bubbleSort;
