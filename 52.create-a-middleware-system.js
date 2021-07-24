class Middleware {
  fns = []
  req = null
  use(func) {
    this.fns.push(func)
  }
  start(req) {
    this.req = req
    this.next()
  }
  next(error) {
    const fn = this.fns.shift()

    try {
      if (error) {
        if (fn.length > 2) {
          fn(error, this.req, this.next.bind(this))
        } else {
          this.next(error)
        }
      } else {
        fn(this.req, this.next.bind(this))
      }
    } catch (error) {
      this.next(error)
    }
  }
  nextToEnd(error) {
    const fn = this.fns[this.fns.length - 1]

    fn(error, this.req, this.next.bind(this))
  }
}

const middleware = new Middleware()

// throw an error at first function
middleware.use((req, next) => {
   req.a = 1
   throw new Error('sth wrong') 
   // or `next(new Error('sth wrong'))`
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   req.b = 2
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   console.log(req)
})

// since error occurs, this is called
middleware.use((error, req, next) => {
   console.log(error)
   console.log(req)
})

middleware.start({})
// Error: sth wrong
// {a: 1}