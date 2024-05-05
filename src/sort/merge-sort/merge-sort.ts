/**
 * Merge
 * @param left Array of numbers
 * @param right Array of numbers
 * @returns Merged array
 */
function merge(left: number[], right: number[]) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

/**
 * Merge sort
 * @param array Array of numbers
 * @returns Sorted array
 */
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
