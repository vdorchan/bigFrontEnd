// /**
//  * @param {Array<(arg: any) => any>} funcs
//  * @return {(arg: any) => any}
//  */
// function pipe(funcs) {
//   return function (arg) {
//     let res = arg
//     for (const func of funcs) {
//       res = func.call(this, res)
//     }

//     return res
//   }
// }

// function pipe(funcs) {
//   return function (arg) {
//     return funcs.reduce((acc, func) => func.call(this, acc), arg)
//   }
// }

// const times = y => x => x * y
// const plus = y => x => x + y
// const subtract = y => x => x - y
// const divide = y => x => x / y

// const fn = pipe([times(2), times(3)])

// console.log(pipe(fn(4)))
// // x * 2 * 3

// console.log(pipe([times(2), plus(3), times(4)]))
// // (x * 2 + 3) * 4

// console.log(pipe([times(2), subtract(3), divide(4)]))
// (x * 2 - 3) / 4

// function pipe(funcs) {
//   return function (arg) {
//     return funcs.reduce((acc, cur) => cur.apply(this, acc), arg)
//   }
// }

function compose(...funcs) {
  return function (...args) {
    return funcs.reduce((acc, func) => func.apply(this, Array.isArray(acc) ? acc : [acc]), args)
  }
}

var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
var toUpper = str => str.toUpperCase()
var fn2 = compose(toUpper, greeting)

console.log(fn2('jack', 'smith'))
