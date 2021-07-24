/**
 * @param {number[]} arr
 */
function selectionSort(arr) {
  const n = arr.length
  for (let i = n - 1; i >= 0; i--) {
    let j = i
    let maxJ = i
    while (--j >= 0) {
      if (arr[j] > arr[maxJ]) {
        maxJ = j
      }
    }
    [arr[i], arr[maxJ]] = [arr[maxJ], arr[i]]
  }

  return arr
}
