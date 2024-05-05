/**
 * Linear search
 * @param list The array to search within
 * @param item The item to search for in the array
 * @returns The index of the item if found, or null if not found
 */
function linearSearch<T>(list: T[], item: T): number | null {
  // eslint-disable-next-line no-restricted-syntax
  for (const [index, element] of list.entries()) {
    if (element === item) {
      return index; // Item found, return its index
    }
  }
  // eslint-disable-next-line unicorn/no-null
  return null; // Item not found in the array
}

export default linearSearch;
