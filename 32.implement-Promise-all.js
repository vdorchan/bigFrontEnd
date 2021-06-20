/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([])
      return
    }
    const res = []

    for (const [index, promise] of Object.entries(promises)) {
      // ;(promise.then ? promise : Promise.resolve(promise))
      Promise.resolve(promise)
        .then(r => {
          res[index] = r
          if (res.length === promises.length) {
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

async function all(promises) {
  const res = []
  for (const promise of promises) {
    res.push(await promise)
  }

  return res
}

const sleep = (ms, msg) => {
  console.log('sleep', ms, msg);
  return new Promise(resolve => setTimeout(() => resolve(msg), ms))
}

all([sleep(5000, 'hello'), sleep(1000, 'bye')]).then(r => console.log({ r }))

// all([1, 2, 3, Promise.resolve(4)]).then(r => console.log(r))

// Promise.all([]).then(r => console.log(r))
