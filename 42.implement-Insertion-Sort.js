/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let j = i
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
}
