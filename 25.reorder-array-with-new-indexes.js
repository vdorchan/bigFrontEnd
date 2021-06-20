/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  const _items = [...items]
  for (let i = 0; i < _items.length; i++) {
    const item = _items[i]
    items[newOrder[i]] = item
  }
}

function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    const newIndex = newOrder[i]
    ;[items[newIndex], items[i]] = [items[i], items[newIndex]]
    ;[newOrder[newIndex], newOrder[i]] = [newOrder[i], newOrder[newIndex]]
  }
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

console.log(sort(A, B));