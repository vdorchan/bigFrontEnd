/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludesMap = new Map()

  for (const { k, v } of excludes) {
    if (!excludesMap.get(k)) {
      excludesMap.set(k, new Set())
    }
    excludesMap.get(k).add(v)
  }

  return items.filter(item => 
    Object.keys(item).every(
      k => !excludesMap.has(k) || !excludesMap.get(k).has(item[k])
    )
  )
}
