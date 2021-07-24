/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  num1 = num1.replace(/^\+/, '')
  num2 = num2.replace(/^\+/, '')

  let symbol1 = num1.charAt(0)
  let symbol2 = num2.charAt(0)

  if (symbol1 === '-' && symbol2 === '-') {
    return '-' + _add(num1.substr(1), num2.substr(1))
  }

  if (symbol1 === '-') {
    return subtract(num2, num1.substr(1))
  }

  if (symbol2 === '-') {
    return subtract(num1, num2.substr(1))
  }

  return _add(num1, num2)
}

function _add(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let res = ''

  while (i >= 0 || j >= 0) {
    const sum = +num1.charAt(i--) + +num2.charAt(j--) + carry

    carry = parseInt(sum / 10)

    res = (sum % 10).toString() + res
  }

  if (carry) res = carry + res

  return res
}

function subtract(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let res = ''

  let borrow = 0

  while (i >= 0 || j >= 0) {
    let x1 = +num1.charAt(i--)
    let x2 = +num2.charAt(j--)

    let diff = x1 - x2 - borrow
    borrow = 0

    if (diff < 0) {
      borrow = 1
      diff += 10
    }

    res = diff + '' + res
  }

  return res.replace(/^0*/g, '') || '0'
}

console.log(add('-999999999999999999', '-1'))
console.log(add('-999999999999999999', '+1'))
