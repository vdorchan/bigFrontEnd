// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
// function LazyMan(name, logFn) {
//   const queue = []

//   const fns = {
//     eat(thing) {
//       const fn = () => {
//         logFn(`Eat ${thing}.`)
//       }
//       queue.push(fn)

//       return this
//     },
//     _sleep(s) {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           logFn(`Wake up after ${s} second${s > 1 ? 's' : ''}.`)
//           resolve()
//         }, s * 1000)
//       })
//     },
//     sleep(s) {
//       const fn = () => this._sleep(s)

//       queue.push(fn)
//       return this
//     },
//     sleepFirst(s) {
//       const fn = () => this._sleep(s)

//       queue.unshift(fn)
//       return this
//     },
//     next() {
//       setTimeout(async () => {
//         while (queue.length) {
//           const task = queue.shift()
//           await task()
//         }
//       }, 0)
//     },
//   }

//   const fn = () => {
//     logFn(`Hi, I'm ${name}.`)
//   }

//   queue.push(fn)

//   fns.next()

//   return fns
// }

class LazyManClass {
  queue = []
  constructor(name, log) {
    this.log = log

    const fn = () => {
      this.log(`Hi, I'm ${name}.`)
    }
    this.queue.push(fn)

    this.next()
  }
  eat(thing) {
    const fn = () => {
      this.log(`Eat ${thing}.`)
    }
    this.queue.push(fn)

    return this
  }
  _sleep(s) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.log(`Wake up after ${s} second${s > 1 ? 's' : ''}.`)
        resolve()
      }, s * 1000)
    })
  }
  sleep(s) {
    const fn = () => this._sleep(s)

    this.queue.push(fn)
    return this
  }
  sleepFirst(s) {
    const fn = () => this._sleep(s)

    this.queue.unshift(fn)
    return this
  }
  next() {
    setTimeout(async () => {
      while (this.queue.length) {
        const task = this.queue.shift()
        await task()
      }
    }, 0)
  }
}

function LazyMan(name, log) {
  return new LazyManClass(name, log)
}

// LazyMan is very lazy, he only eats and sleeps.

// LazyMan(name: string, logFn: (log: string) => void) would output a message, the passed logFn is used.

// LazyMan('Jack', console.log)
// Hi, I'm Jack.
// He can eat(food: string)

// LazyMan('Jack', console.log).eat('banana').eat('apple')
// Hi, I'm Jack.
// Eat banana.
// Eat Apple.
// He also sleep(time: number), time is based on seconds.

// LazyMan('Jack', console.log).eat('banana').sleep(1000).eat('apple').sleep(2000)
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
// He can sleepFirst(time: number), which has the highest priority among all tasks, no matter what the order is.

LazyMan('Jack', console.log).eat('banana').sleepFirst(2).eat('apple').sleep(1)
// (after 10 seconds)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// (after 1 second)
// Wake up after 1 second.
