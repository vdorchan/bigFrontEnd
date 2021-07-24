/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let hasExecuted = false
  let cachedResult
  return function (...args) {
    if (!hasExecuted) {
      hasExecuted = true
      cachedResult = func.apply(this, args)
    }
    return cachedResult
  }
}
