/**
 * @param {any} data
 * @return {string}
 *
 */
function detectType(data) {
  if (typeof data !== 'object') return typeof data
  if (data instanceof FileReader) return 'object'

  const tag = Object.prototype.toString.call(data)

  return / (\S+)\]/.exec(tag)[1].toLowerCase()
}

console.log(detectType(new Map()));

/* 
这是个简单的问题。

对于JavaScript中的所有基础数据类型，请实现一个方法进行检测。

除了基础数据类型之外，你的方法需要额外支持常见的类型包括Array、ArrayBuffer、Map、 Set、Date 和 Function。

该题目的目标并不是想要你列举出所有数据类型，而是想要你证明你能解决该类型的问题。

类型名请返回小写。
*/
