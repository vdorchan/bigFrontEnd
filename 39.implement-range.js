/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return {
    *[Symbol.iterator]() {
      while (from <= to) {
        yield from++
      }
    },
  }
}
