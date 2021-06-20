// please complete the implementation
class EventEmitter {
  constructor() {
    this.subs = {}
  }
  subscribe(eventName, callback) {
    if (!this.subs[eventName]) {
      this.subs[eventName] = new Map()
    }

    this.subs[eventName].set(
      callback,
      (this.subs[eventName].get(callback) || 0) + 1
    )

    return {
      release: () => {
        const subCount = this.subs[eventName].get(callback)

        if (subCount === 1) {
          this.subs[eventName].delete(callback)

          if (this.subs[eventName].size) {
            delete this.subs[eventName]
          }
        } else {
          this.subs[eventName].set(
            callback,
            subCount - 1
          )
        }
      },
    }
  }

  emit(eventName, ...args) {
    const subs = this.subs[eventName]
    if (subs.size) {
      for (let [callback, count] of subs.entries()) {
        while (count-- > 0) {
          callback.apply(null, args)
        }
      }
    }
  }
}

const emitter = new EventEmitter()
const callback1 = ()=> {}


emitter.subscribe('event1', )