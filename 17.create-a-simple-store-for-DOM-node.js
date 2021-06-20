class NodeStore {
  nodes = []
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    if (this.has(node)) {
      this.nodes = this.nodes.filter(([n, v]) => n !== node)
    }
    this.nodes.push([node, value])
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    for (const [n, v] of this.nodes) {
      if (n === node) {
        return v
      }
    }
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    for (const [n, v] of this.nodes) {
      if (n === node) {
        return true
      }
    }
    return false
  }
}

class NodeStore {
  nodes = {}
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.__NODE_STORE_KEY__ = Symbol()
    this.nodes[node.__NODE_STORE_KEY__] = value
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.nodes[node.__NODE_STORE_KEY__]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.nodes[node.__NODE_STORE_KEY__]
  }
}
