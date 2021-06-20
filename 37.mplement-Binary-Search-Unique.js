/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1

    if (arr[mid] === target) return mid
    else if (arr[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return -1
}
