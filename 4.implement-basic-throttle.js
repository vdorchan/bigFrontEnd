/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  // your code here
  let lastFn, lastTime

  return function (...args) {
    if (!lastTime) {
      fn.apply(this, args)
      lastTime = Date.now()
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(() => {
        
      }, wait);
    }
  }
}

// const fn = (i) => console.log(i)
// const throttled = throttle(fn, 3000)
// let i = 0
// setInterval(() => {
//   throttled(i++)
// }, 500);


let currentTime = 0

const run = input => {
  currentTime = 0
  const calls = []

  const func = arg => {
    console.log('func', arg)
    calls.push(`${arg}@${currentTime}`)
  }

  const throttled = throttle(func, 3)
  input.forEach(call => {
    const [arg, time] = call.split('@')
    setTimeout(() => throttled(arg), time)
  })


  setTimeout(() => {
    console.log({calls});
  }, 2000);
  return calls
}

// console.log(run(['A@0', 'B@2', 'C@3']))
console.log(run(['A@0', 'B@1']));
