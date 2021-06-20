/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth <= 0) return arr
  return arr.reduce(
    (acc, cur) => [
      ...acc,
      ...(Array.isArray(cur) ? flat(cur, depth - 1) : [cur]),
    ],
    []
  )
}

function flat(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, cur) =>
          acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur),
        []
      )
    : arr.slice()
}

function flat(arr) {
  const stack = arr.slice()
  const res = []
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.push(item)
    }
  }

  return res
}

const arr = [1, [2], [3, [4]], [[[[5]]]]]

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]

console.log(flat(arr, 4))
