/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  let value = state.value
  Object.defineProperty(state, 'value', {
    set(inputValue) {
      value = inputValue
      element.value = inputValue
      return inputValue
    },
    get() {
      return value
    },
  })

  element.value = state.value
  element.addEventListener('change', function () {
    value = this.value
  })
}

function model(state, element) {
  const p = new Proxy(state, {
    get(obj, prop) {
      return obj[prop]
    },
    set(obj, prop, value) {
      obj[prop] = value
      element.value = value
    }
  })

  element.addEventListener('change', function () {
    p.value = this.value
  })
}

const state = {value: 'haha'}

const p = new Proxy(state, {
  get(obj, prop) {
    return obj[prop]
  },
  set(obj, prop, value) {
    console.log(obj, prop, value);
    obj[prop] = value
    // element.value = value
  }
})

console.log(p);
p.value = 'hehe'
console.log(p);