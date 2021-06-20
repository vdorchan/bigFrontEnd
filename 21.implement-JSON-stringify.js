/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if (typeof data === 'string') return `"${data}"`

  if (
    Number.isNaN(data) ||
    data === null
  )
    return 'null'

  if (typeof data !== 'object') return `${data}`

  if (Array.isArray(data)) {
    return `[${data.map(d => stringify(d)).join(',')}]`
  }

  return `{${Object.keys(data).map(k => `"${k}":${stringify(data[k])}`).join(',')}}`
}

// console.log(JSON.stringify({}) == stringify({}))
console.log(JSON.stringify(true) == stringify(true))
console.log(JSON.stringify(1) == stringify(1))
console.log(JSON.stringify('foo') == stringify('foo'))
console.log(
  JSON.stringify([1, 'false', false]) == stringify([1, 'false', false]),
  JSON.stringify([1, 'false', false]),
  stringify([1, 'false', false])
)
console.log(JSON.stringify({ x: 5 }) == stringify({ x: 5 }), JSON.stringify({ x: 5 }), stringify({ x: 5 }))
