/**
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  return function (...args2) {
    const newArgs = args.slice()
    for (const [idx, arg] of newArgs.entries()) {
      if (arg === partial.placeholder) {
        newArgs[idx] = args2.shift()
      }
    }
    return func.apply(this, newArgs.concat(args2))
  }
}

const func = (...args) => args
const _ = partial.placeholder
const func1_3_5 = partial(func, 1, _, 3, _, 5)
console.log(func1_3_5(2,4)) // .toEqual([1,2,3,4,5])
console.log(func1_3_5(2,4)) // .toEqual([1,2,3,4,5])
console.log(func1_3_5(2,4)) // .toEqual([1,2,3,4,5])
console.log(func1_3_5(1,1)) // .toEqual([1,1,3,1,5])