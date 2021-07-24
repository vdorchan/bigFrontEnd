/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
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

// console.log(subtract('1000000000000000000000', '999999999999999999999'));

console.log(subtract('0', '0'));
