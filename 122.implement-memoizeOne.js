/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(
  func,
  isEqual = (a, b) =>
    a.length === b.length && a.every((_, idx) => a[idx] === b[idx])
) {
  let cachedArgs = null
  let cachedValue = null
  let that = null
  return function (...args) {
    if (cachedArgs && isEqual(cachedArgs, args) && that === this) {
      return cachedValue
    }
    that = this
    cachedArgs = args
    cachedValue = func.apply(that, args)
    return cachedValue
  }
}

// const func = (...args) => args
// const memoed = memoizeOne(func)
// console.log(memoed(1)) // toEqual([1])
// console.log(memoed(1, 2)) // toEqual([1,2])
// console.log(memoed(1, 2, 3)) // toEqual([1,2,3])

// let callCount = 0
// function funcThis(b){
//   callCount += 1
//   return `${this.a}_${b}`
// }
// const memoed = memoizeOne(funcThis)
// const a = {
//   a: 1,
//   memoed
// }

// const b = {
//   a: 2,
//   memoed
// }
// console.log(a.memoed(2)) // toBe('1_2')
// console.log(callCount) // toBe(1)
// console.log(a.memoed(2)) // toBe('1_2')
// console.log(callCount) // toBe(1)
// console.log(a.memoed(3)) // toBe('1_3')
// console.log(callCount) // toBe(2)
// console.log(a.memoed(3)) // toBe('1_3')
// console.log(callCount) // toBe(2)
// console.log(b.memoed(3)) // toBe('2_3')
// console.log(callCount) // toBe(3)
// console.log(a.memoed(3)) // toBe('1_3')
// console.log(callCount) // toBe(4)

const func = (...args) => args
const memoed = memoizeOne(func)
console.log(memoed(1)) // ([1])
console.log(memoed(1, 2)) // ([1,2])
console.log(memoed(1, 2, 3)) // ([1,2,3])
