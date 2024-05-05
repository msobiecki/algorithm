/**
 * Sorts an array using the counting sort algorithm
 * @param array Array to be sorted
 * @param min Minimum value in the array
 * @param max Maximum value in the array
 * @returns Sorted array
 */
function countingSort(array: number[], min: number, max: number) {
  if (array.length < 2) return array;

  let indexA = min;
  let indexB = 0;
  const count = [];
  for (indexA; indexA <= max; indexA += 1) {
    count[indexA] = 0;
  }
  for (indexA = 0; indexA < array.length; indexA += 1) {
    count[array[indexA]] += 1;
  }
  for (indexA = min; indexA <= max; indexA += 1) {
    while (count[indexA] > 0) {
      array[indexB] = indexA;
      indexB += 1;
      count[indexA] -= 1;
    }
  }
  return array;
}

export default countingSort;
