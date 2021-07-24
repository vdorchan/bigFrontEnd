/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let mid = (left + right) >> 1

    if (target === arr[mid]) {
      while (arr[--mid] === target) {}
      return mid + 1
    } else if (arr[mid] > target) right = mid - 1
    else left = mid + 1
  }

  return -1
}
