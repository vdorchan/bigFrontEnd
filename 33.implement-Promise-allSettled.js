/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([])
      return
    }
    const res = []

    for (const [index, promise] of Object.entries(promises)) {
      Promise.resolve(promise)
        .then(r => {
          res[index] = {
            value: r,
            status: 'fulfilled',
          }
          if (res.length === promises.length) {
            resolve(res)
          }
        })
        .catch(err => {
          res[index] = {
            reason: err,
            status: 'rejected',
          }
          if (res.length === promises.length) {
            resolve(res)
          }
        })
    }
  })
}

async function allSettled(promises) {
  const res = []
  for (const promise of promises) {
    try {
      res.push({
        value: await promise,
        status: 'fulfilled',
      })
    } catch (err) {
      res.push({
        reason: err,
        status: 'rejected',
      })
    }
  }
  return res
}
