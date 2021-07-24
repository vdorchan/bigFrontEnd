const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'
console.log(curriedJoin(1)(2)(3)) // '1_2_3'

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c)
//       }
//     }
//   }
// }

function curry(fn) {
  let allArgs = []
  return function curried(...args) {
    allArgs.push(...args)
    if (allArgs.length >= fn.length) {
      const res = fn(...allArgs)
      allArgs = []
      return res
    } else {
      return curried
    }
  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
