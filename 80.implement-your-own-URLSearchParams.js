class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    init = init.replace(/^\?/, '')
    this.map = new Map()
    init.split('&').forEach(item => {
      const [key, value] = item.split('=')
      if (this.map.has(key)) {
        this.map.set(key, [].concat(this.map.get(key), value))
      } else {
        this.map.set(key, value)
      }
    })

    return this
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    value = String(value)
    if (this.map.has(name)) {
      this.map.set(name, [].concat(this.map.get(name), value))
    } else {
      this.map.set(name, value)
    }
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.map.delete(name)
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for (const [key, value] of this.map) {
      if (Array.isArray(value)) {
        for (const v of value) {
          yield [key, v]
        }
      } else {
        yield [key, value]
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (const [key, value] of this.map) {
      if (Array.isArray(value)) {
        value.forEach(v => callback(v, key))
      } else {
        callback(value, key)
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    if (!this.has(name)) return null
    return this.getAll(name)[0]
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    if (!this.map.has(name)) {
      return []
    }
    const value = this.map.get(name)
    return Array.isArray(value) ? value : [value]
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.map.has(name)
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.map.keys()
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.delete(name)
    this.append(name, value)
    return value
  }

  // sor all key/value pairs based on the keys
  sort() {
    const keys = [...this.map.keys()].sort()
    const newMap = new Map()
    for (const key of keys) {
      newMap.set(key, this.map.get(key))
    }

    this.map = newMap
  }

  /**
   * @return {string}
   */
  toString() {
    const res = []
    for (const [key, value] of this.map) {
      if (Array.isArray(value)) {
        value.forEach(v => res.push(`${key}=${v}`))
      } else {
        res.push(`${key}=${value}`)
      }
    }

    return res.join('&')
  }

  /**
   * @return {Iterator} values
   */
  *values() {
    for (const value of this.map.values()) {
      if (Array.isArray(value)) {
        for (const v of value) {
          yield v
        }
      } else {
        yield value
      }
    }
  }
}

// const params = new MyURLSearchParams('?a=1&b=2')
// params.append('a', '2')
// console.log(params.getAll('a'));
// expect(params.getAll('a')).toEqual(['1','2'])

// console.log(params.get('a')) // .toBe('1')
// console.log(params.get('b')) // .toBe('2')

const params = new MyURLSearchParams('?a=1&a=1&a=2&b=2')
const entries = params.entries()
console.log(entries.next()) // .toEqual({ done: false, value: ['a', '1'] })
console.log(entries.next()) // .toEqual({ done: false, value: ['a', '1'] })
console.log(entries.next()) // .toEqual({ done: false, value: ['a', '2'] })
console.log(entries.next()) // .toEqual({ done: false, value: ['b', '2'] })
console.log(entries.next()) // .toEqual({ done: true, value: undefined })
