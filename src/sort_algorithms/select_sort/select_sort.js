function find_smallest(arr) {
  let smallest_index = 0;
  let smallest = arr[smallest_index];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

export function select_sort(arr) {
  const newArr = [];
  while (arr.length > 0) {
    const smallest = find_smallest(arr);
    newArr.push(...arr.splice(smallest, 1));
  }
  return newArr;
}

export default select_sort;
