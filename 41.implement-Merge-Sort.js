/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return Array.from({ length: arr.length }, () => {
    if (!left.length) return right.shift()
    else if (!right.length) return left.shift()
    return left[0] >= right[0] ? left.shift() : right.shift()
  })
}
