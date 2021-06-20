/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  const promiseFuncs = funcs.map(promisify)

  return function (callback, input) {
    let promise = Promise.resolve(input)

    promiseFuncs.forEach(promiseFunc => {
      promise = promise.then(promiseFunc)
    })

    promise.then(data => {
      callback(undefined, data)
    }).catch(callback)
  }
}

function promisify(callback) {
  return function (input) {
    return new Promise((resolve, reject) => [
      callback((err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve(data)
      }, input)
    ])
  }
}

const asyncTimes2 = (callback, num) => {
  console.log(callback, num);
  setTimeout(() => callback(null, num * 2), 100)
}

const asyncTimes4 = sequence([asyncTimes2, asyncTimes2])

console.log(asyncTimes4)

asyncTimes4((error, data) => {
  console.log(data) // 4
}, 1)
