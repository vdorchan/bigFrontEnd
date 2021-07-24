
/**
 * @param {number} num
 * @return {string}
 */
 function addComma(num) {
  let [integer, decimal] = num.toString().split('.')

  integer = integer.replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  if (!decimal) return integer
  return integer + '.' + decimal
}