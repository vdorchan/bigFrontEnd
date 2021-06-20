/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timer

  return function (...args) {
    if (timer) clearTimeout(timer)
    setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
