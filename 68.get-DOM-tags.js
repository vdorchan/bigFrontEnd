/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  const res = new Set()
  const queue = [tree]

  while (queue.length) {
    const node = queue.shift()
    res.add(node.nodeName.toLowerCase())

    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === 1) {
        queue.push(child)
      }
    }
  }

  return [...res]
}
