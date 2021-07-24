/**
 * @param {any[]} arr
 * @returns {?} - sorry no type hint for this
 */
function wrap(arr) {
  const getProp = prop => prop < 0 ? p.length + +prop : prop
  const p = new Proxy(arr, {
    set(obj, prop, value) {
      const newProp = getProp(prop)
      if (newProp < 0) throw new Error('')
      arr[newProp] = value
      
      return true
    },
    get(obj, prop) {
      if (prop === Symbol.iterator) return obj[Symbol.iterator]
      return obj[getProp(prop)]
    },
  })

  return p
}

const originalArr = [1, 2, 3]
const arr = wrap(originalArr)

// console.log(arr[0]) // 1
// console.log(arr[1]) // 2
// console.log(arr[2]) // 3
// console.log(arr[3]) // undefined
// console.log(arr[-1]) // 3
// console.log(arr[-2]) // 2
// console.log(arr[-3]) // 1
// console.log(arr[-4]) // undefined


// arr.push(5)
arr.shift()
console.log([...arr]);