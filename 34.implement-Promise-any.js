/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    let errors = []

    for (const [index, promise] of Object.entries(promises)) {
      promise.then(resolve).catch(error => {
        errors[index] = error
        if (errors.length === promises.length) {
          reject(
            // new AggregateError(
            new Error('No Promise in Promise.any was resolved', errors)
          )
        }
      })
    }
  })
}
