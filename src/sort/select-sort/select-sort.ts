/**
 * Find smallest
 * @param array Array of numbers
 * @returns Index of the smallest number
 */
function findSmallest(array: number[]) {
  let smallestIndex = 0;
  let smallest = array[smallestIndex];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < smallest) {
      smallestIndex = index;
      smallest = array[smallestIndex];
    }
  }
  return smallestIndex;
}

/**
 * Select sort
 * @param array Array of numbers
 * @returns Sorted array
 */
function selectSort(array: number[]) {
  const newArray = [];
  while (array.length > 0) {
    newArray.push(...array.splice(findSmallest(array), 1));
  }
  return newArray;
}

export default selectSort;
