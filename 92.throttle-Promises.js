/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  return new Promise((resolve, reject) => {
    const res = []
    let restCnt = funcs.length
    const runTaks = () => {
      if (!funcs.length) return
      const fn = funcs.shift()
      fn()
        .then(data => {
          runTaks()
          res.push(data)

          if (--restCnt === 0) {
            resolve(res)
          }
        })
        .catch(reject)
    }

    while (max-- > 0) {
      runTaks()
    }
  })
}

function throttlePromises(funcs, max) {
  return new Promise((resolve, reject) => {
    const res = []
    let restCnt = funcs.length
    const runTaks = () => {
      if (!funcs.length) return
      const fn = funcs.shift()
      const promise = fn()
        .then(data => {
          runTaks()

          if (--restCnt === 0) {
            Promise.all(res).then(resolve)
          }

          return data
        })
        .catch(reject)

      res.push(promise)
    }

    while (max-- > 0) {
      runTaks()
    }
  })
}

var value = 0
var asyncFactory = function (ms = 10) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value++)
    }, 100)
  })
}

const arr = []
for (var i = 0; i < 20; i++) {
  arr.push(asyncFactory)
}

arr[3] = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(33)
    }, 0)
  })
}

// arr.push(function () {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(33)
//     }, 0)
//   })
// })

const throttled = throttlePromises(arr, 5)
throttled.then(function (results) {
  console.log(results) //toEqual([
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
})
