/**
 * Function to create a shortcut table (frequency map) for an array of strings
 * @param data Array of strings
 * @returns Shortcut table (object) with string frequencies
 */
function shortcutTables(data: string[]): Record<string, number> {
  const frequencyMap: Record<string, number> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of data) {
    if (frequencyMap[item]) {
      frequencyMap[item] += 1;
    } else {
      frequencyMap[item] = 1;
    }
  }

  return frequencyMap;
}

export default shortcutTables;
