/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.pushStack = new Stack()
    this.popStack = new Stack()
  }
  enqueue(element) {
    this.pushStack.push(element)
  }
  _move() {
    while (this.pushStack.size()) {
      this.popStack.push(this.pushStack.pop())
    }
  }
  peek() {
    // get the head element
    if (this.popStack.size()) {
      return this.popStack.peek()
    }
    this._move()

    return this.popStack.peek()
  }
  size() {
    return this.pushStack.size() + this.popStack.size()
    // return count of element
  }
  dequeue() {
    // remove the head element
    if (this.popStack.size()) {
      return this.popStack.pop()
    }
    this._move()

    return this.popStack.pop()
  }
}
