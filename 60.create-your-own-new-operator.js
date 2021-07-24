/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const res = constructor.apply(obj, args)
  return typeof res === 'object' ? res : obj
}
