/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target === null || target === undefined)
    throw new Error('target can not be null or undefined')

  if (typeof target !== 'object') {
    // target = new Object.getPrototypeOf(target).constructor
    target = new target.__proto__.constructor(target)
  }

  for (const source of sources) {
    if (source === null || source === undefined) continue

    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))

    for (const symbol of Object.getOwnPropertySymbols(source)) {
      target[symbol] = source[symbol]
    }
  }

  return target
}

console.log(objectAssign({}, { a: 3 }, { b: 4 }))
