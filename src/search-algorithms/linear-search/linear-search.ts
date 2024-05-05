/**
 * Linear search algorithm to find the position of a target in an array
 * @param list Array to search within
 * @param target Target value to search for
 * @returns Position of the target in the array (zero-based index), or null if not found
 */
function linearSearch(list: number[], target: number): number | null {
  // eslint-disable-next-line no-restricted-syntax
  for (const [index, element] of list.entries()) {
    if (element === target) {
      return index;
    }
  }
  return null;
}

export default linearSearch;
