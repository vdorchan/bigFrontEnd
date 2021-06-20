/**
 * @param {any[]} arr
 */
function shuffle(arr) {
  let last = arr.length

  while (last > 0) {
    const i = Math.floor(Math.random() * last--)
    ;[arr[i], arr[last]] = [arr[last], arr[i]]
  }

  return arr
}

console.log(shuffle([1, 2, 3, 4]))
