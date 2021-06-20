/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // your code here
  let memoized = []

  return function (...args) {
    const key = resolver ? resolver.apply(this, args) : args.join('_')
    if (!memoized[key]) memoized[key] = func.apply(this, args)

    return memoized[key]
  }
}

function memo(func, resolver = (...args) => args.join('_')) {
  // your code here
  let memoized = []

  return function (...args) {
    const key = resolver(...args)
    if (!memoized[key]) memoized[key] = func.apply(this, args)

    return memoized[key]
  }
}

const func = (a, b) => a + b
const memoed = memo(func)
