/**
 * Binary search algorithm to find the position of a target in a sorted array
 * @param list Array to search within
 * @param target Target value to search for
 * @returns Position of the target in the array (zero-based index), or null if not found
 */
function binarySearch(list: number[], target: number): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (list[mid] === target) {
      return mid;
    }
    if (list[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

export default binarySearch;
