/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  if (!tree) return 0
  return (
    1 +
    (tree.children.length
      ? Math.max(...[...tree.children].map(n => getHeight(n)))
      : 0)
  )
}

function getHeight(tree) {
  if (!tree) return 0
  let queue = [tree]
  let level = 0

  while (queue.length) {
    level++

    const next = []
    for (const node of queue) {
      next.push(...node.children)
    }

    queue = next
  }

  return level
}

function getHeight(tree) {
  if (!tree) return 0
  let queue = [tree]
  let height = 0

  while (queue.length) {
    let count = queue.length
    height++

    while (count > 0) {
      const node = queue.shift()
      count--
      queue.push(...node.children)
    }
  }

  return height
}