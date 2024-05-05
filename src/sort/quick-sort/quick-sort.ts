/**
 * Quick sort
 * @param array Array of numbers
 * @returns Sorted array
 */
function quickSort(array: number[]): number[] {
  if (array.length < 2) return array;

  const pivot = array.shift();
  if (!pivot) return array;

  const less = array.filter((index) => index <= pivot);
  const greater = array.filter((index) => index > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

export default quickSort;
