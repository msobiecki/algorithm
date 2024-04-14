/* eslint no-param-reassign: ["error", { "props": false }] */

/**
 * Bubble sort
 * @param array Array of numbers
 * @returns Sorted array
 */
function bubbleSort(array: number[]): number[] {
  if (array.length < 2) return array;

  const arrayLength = array.length;
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arrayLength; index += 1) {
      for (let indexB = 0; indexB < arrayLength; indexB += 1) {
        if (array[indexB] > array[indexB + 1]) {
          const temporary = array[indexB];
          array[indexB] = array[indexB + 1];
          array[indexB + 1] = temporary;
          swapped = true;
        }
      }
    }
  } while (swapped);
  return array;
}

export default bubbleSort;
