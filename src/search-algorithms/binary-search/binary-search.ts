/**
 * Binary search
 * @param list The sorted array to search within
 * @param item The item to search for in the array
 * @returns The index of the item if found, or null if not found
 */
function binarySearch(list: number[], item: number): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid; // Item found, return its index
    }
    if (guess > item) {
      high = mid - 1; // Guess is too high, adjust the high bound
    } else {
      low = mid + 1; // Guess is too low, adjust the low bound
    }
  }

  // eslint-disable-next-line unicorn/no-null
  return null; // Item not found in the array
}

export default binarySearch;
