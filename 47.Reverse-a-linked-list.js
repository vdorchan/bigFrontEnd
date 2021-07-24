class Node {
  constructor(val, next) {
    this.val = val
    this.next = next

    return this
  }
}

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = list => {
  const newHead = new Node()
  let head = list

  while (head) {
    const next = head.next
    head.next = newHead.next
    newHead.next = head

    head = next
  }

  return newHead.next
}

const reverseLinkedList = head => {
  if (!head || !head.next) return head

  const newHead = reverseLinkedList(head.next)
  head.next.next = head
  head.next = null

  return newHead
}

const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)

console.log(One);

console.log(reverseLinkedList(One));