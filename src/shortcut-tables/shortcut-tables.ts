/**
 * Shortcut tables
 * @param array The array for which shortcut tables are generated
 * @returns An object representing the shortcut tables with item counts
 */
function shortcutTables(array: string[]): Record<string, number> {
  const result: Record<string, number> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    result[item] = result[item] === undefined ? 1 : result[item] + 1;
  }

  return result;
}

export default shortcutTables;
