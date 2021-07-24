/**
 * @param {string} html
 * @param {string[]} keywords
 */
function highlightKeywords(html, keywords) {
  const regexp = new RegExp(keywords.join('|'), 'gi')

  return html.split(' ').map(word => {
    if (keywords.includes(word)) return `<em>${word}</em>`
    return word
      .replace(regexp, matchWord => `<em>${matchWord}</em>`)
      .replace('</em><em>', '')
  }).join(' ')
}

// console.log(
//   highlightKeywords('Hello FrontEnd Lovers', ['Hello', 'Front', 'JavaScript'])
// )

// console.log(
//   highlightKeywords('Hello FrontEnd Lovers', ['Front', 'End', 'JavaScript'])
// )

console.log(
  highlightKeywords('Hello FrontEnd Lovers', [
    'Front',
    'FrontEnd',
    'JavaScript',
  ])
)

// console.log(
//   highlightKeywords('Hello FrontEnd Lovers', [
//     'Front',
//     'FrontEnd',
//     'JavaScript',
//   ])
// )
