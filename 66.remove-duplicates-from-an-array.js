/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  // your code here
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (map.has(item)) {
      arr.splice(i, 1)
      i--
    } else [
      map.set(item, 1)
    ]
  }

  return arr
}

const arr = [1,5,'b',5,1,undefined, 'a', 'a', 'a', 'b', true, 'true',false, {}, {}]

console.log(deduplicate(arr));