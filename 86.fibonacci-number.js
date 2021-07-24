/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
  if (n < 2) return n
  let pre = 0
  let cur = 1

  for (let i = 2; i <= n; i++) {
    [cur, pre] = [cur + pre, cur]
  }

  return cur
}

function fib(n, pre = 0, cur = 1) {
  if (n == 0) return 0
  if (n === 1) return cur
  return fib(n - 1, cur, cur + pre)
}