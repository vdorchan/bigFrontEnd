// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare
    this.list = []
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.list.length
  }

  /**
   * returns the head element
   */
  peek() {
    return this.list[this.size() - 1]
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.list.push(element)
    this.list.sort(this.compare)
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    const last = this.peek()
    delete this.peek()
    return last
  }
}
