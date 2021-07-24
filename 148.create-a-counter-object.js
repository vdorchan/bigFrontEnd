/**
 * @returns { {count: number}}
 */
function createCounter() {
  let num = 0
  const p = new Proxy(
    {},
    {
      set() {},
      get() {
        return num++
      },
    }
  )

  return p
}

function createCounter() {
  let num = 0
  return {
    get count() {
      return num++
    }
  }
}


const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3