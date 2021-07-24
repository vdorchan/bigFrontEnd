/**
 * @param {number[]} arr
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end <= start) return arr
  const pivotIndex = partition(arr, start, end)

  quickSort(arr, start, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, end)

  return arr

  function partition(arr, start, end) {
    const pivotValue = arr[end]
    let pivotIndex = start

    for (let i = start; i < end; i++) {
      if (arr[i] <= pivotValue) {
        ;[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
        ++pivotIndex
      }
    }

    ;[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

    return pivotIndex
  }
}
