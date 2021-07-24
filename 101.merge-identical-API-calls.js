// getAPI is bundled with your code, config will only be some plain objects.
// const getAPI = <T>(path: string, config: SomeConfig): Promise<T> => { ... }

// you code here maybe, if you want some outer scope.
const CACHE_TIME_LIMIT = 1000
const MAX_CACHE = 5

const hash = obj => {
  switch (Object.prototype.toString.call(obj)) {
    case '[object Null]':
      return 'null'
    case '[object Undefined]':
      return 'undefined'
    case '[object Number]':
    case '[object Boolean]':
      return obj.toString()
    case '[object String]':
      return obj
    case '[object Object]':
      const keys = Object.keys(obj)
      keys.sort()
      return `{${keys.map(key => `"${key}":${hash(obj[key])}`).join(',')}}`
    case '[obect Array]':
      return `[${obj.map(item => hash(item)).join(',')}]`
  }
}

/**
 * @param {string} path
 * @param {object} config
 * only plain objects/array made up serializable primitives
 * @returns {Promise<any>}
 */
function getAPIWithMerging(path, config) {
  const cache = getAPIWithMerging.cache
  const requestHash = hash({ path, config })

  if (cache.has(requestHash)) {
    const entry = cache.get(requestHash)
    if (Date.now() - entry.trigged <= CACHE_TIME_LIMIT) {
      return entry.promise
    }
    cache.delete(requestHash)
  }

  const promise = getAPI(path, config)
  cache.set(requestHash, {
    promise,
    trigged: Date.now(),
  })

  if (cache.size > MAX_CACHE) {
    cache.delete(cache.keys().next().value)
  }

  return promise
}

getAPIWithMerging.cache = new Map()

getAPIWithMerging.clearCache = () => {
  getAPIWithMerging.cache.clear()
}
