/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  let [key] = Object.keys(command)

  let newData = Array.isArray(data) ? [...data] : { ...data }

  let keyPath = []
  let commandKey
  let value
  while (!commandKey?.startsWith('$') && typeof command === 'object') {
    ;[key] = Object.keys(command)
    keyPath.push(key)

    commandKey = key
    command = command[key]
  }

  keyPath.pop()

  let cur = newData
  while (keyPath.length > 1) {
    cur = cur[keyPath.shift()]
  }

  key = keyPath.pop()

  if (commandKey === '$set') {
    cur[key] = command
    return newData
  } else if (commandKey === '$merge') {
    if (typeof cur[key] === 'object') {
      cur[key] = { ...cur[key], ...command }
    } else {
      throw new Error()
    }
  } else if (commandKey === '$apply') {
    cur[key] = command(cur[key])
  } else if (commandKey === '$push') {
    if (key) cur[key].push(...command)
    else cur.push(...command)
  }

  return newData
}

function update(data, command) {
  if ('$push' in command) {
    if (!Array.isArray(data)) {
      throw new Error('not array')
    }

    return [...data, ...command['$push']]
  }

  if ('$set' in command) {
    return command['$set']
  }

  if ('$merge' in command) {
    if (typeof data !== 'object') {
      throw new Error('not object')
    }
    return { ...data, ...command['$merge'] }
  }

  if ('$apply' in command) {
    return command['$apply'](data)
  }

  if (typeof data !== 'object') {
    throw new Error('not object')
  }

  const newData = Array.isArray(data) ? [...data] : { ...data }

  for (const key of Object.keys(command)) {
    newData[key] = update(newData[key], command[key])
  }

  return newData
}

const state = {
  a: {
    b: {
      c: 1,
    },
  },
  d: 2,
}

// const arr = [1, 2, 3, 4]
// const newArr = update(arr, { $push: [5, 6] })
// console.log({ newArr })
// // [1, 2, 3, 4, 5, 6]

// const state = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: 2,
// }

// const newState = update(state, { a: { b: { c: { $set: 3 } } } })

// console.log({ newState: JSON.stringify(newState) })

// const arr = [1, 2, 3, 4]
// const newArr = update(arr, { 0: { $set: 0 } })

// console.log({ newArr })

// const state = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: 2,
// }

// const newState = update(state, { a: { b: { $merge: { e: 5 } } } })

// console.log({ newState: JSON.stringify(newState) })

// const arr = [1, 2, 3, 4]
// const newArr = update(arr, { 0: { $apply: item => item * 2 } })

// console.log({ newArr })

// console.log(update({ a: [1] }, { a: { $push: [2, 3] } }))

console.log(update({ a: 1 }, { a: { $merge: { c: 3 } } }))
