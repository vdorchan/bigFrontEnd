/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const queueA = [rootA]
  const queueB = [rootB]

  while (queueA.length) {
    const nodeA = queueA.shift()
    const nodeB = queueB.shift()

    if (nodeA === target) {
      return nodeB
    }

    queueA.push(...nodeA.childNodes)
    queueB.push(...nodeB.childNodes)
  }
}

const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB

  const path = []
  let node = target
  while (node) {
    const parent = node.parentElement
    path.push(parent.childNodes.indexOf(node))
    node = parent
  }

  return path.reduceRight((acc, i) => acc.childNodes[i], rootB)
}
