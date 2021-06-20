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
function race(funcs) {
  const promiseFuncs = funcs.map(promisify)

  return function (callback, input) {
    let promise = Promise.resolve(input)

    Promise.race(promiseFuncs.map(promiseFunc => promise.then(promiseFunc)))
      .then(data => {
        callback(undefined, data)
      })
      .catch(err => {
        callback(err, undefined)
      })
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
      }, input),
    ])
  }
}
