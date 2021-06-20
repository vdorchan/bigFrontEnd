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
function parallel(funcs) {
  return function (callback) {
    if (!funcs.length) {
      callback()
      return
    }
    const res = []

    let waitFor = funcs.length
    let doneWithError = false

    funcs.forEach((func, index) => {
      func((err, data) => {
        if (doneWithError) return

        if (err) {
          doneWithError = err
          callback(err, undefined)
          return
        }

        res[index] = data
        waitFor--
        if (waitFor === 0) {
          callback(undefined, res)
        }
      })
    })
  }
}
