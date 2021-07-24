const count = (function () {
  let c = 0
  const fn = () => console.log(++c)
  fn.reset = () => c = 0
  return fn
})()


count() // 1
count() // 2
count() // 3

count.reset()

count() // 1
count() // 2
count() // 3