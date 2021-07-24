/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
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

// console.log(add('999999999999999999', '1'))
console.log(add('0', '0'))
