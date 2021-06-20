/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (!message.length) return ''
  let [i, j] = [0, 0]
  let [m, n] = [message.length, message[0].length]

  let hiddenMessage = ''
  while (j < n) {
    hiddenMessage += message[i][j]
    
    j++
    if (i + 1 < m) {
      i++
    } else {
      i--
    }
  }

  return hiddenMessage
}

console.log(decode([
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'], 
]));
