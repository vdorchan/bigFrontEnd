/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  if (typeof obj !== 'object' || obj === null) return false
  let proto = Object.getPrototypeOf(obj)

  while (proto) {
    if (proto === target.prototype) {
      return true
    }

    proto = Object.getPrototypeOf(proto)
  }

  return false
}

var a =


console.log(myInstanceOf([], Array));