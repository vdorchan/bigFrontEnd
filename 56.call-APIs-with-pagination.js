// fetchList is provided for you
// const fetchList = (since?: number) =>
//   Promise<{items: Array<{id: number}>}>

// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
  let res = null
  let lastItemId = undefined

  while (!res || lastItemId) {
    if (!res) res = []
    const { items } = await fetchList(lastItemId)
    lastItemId = undefined

    if (items.length) {
      if (items >= amount) {
        lastItemId = res[res.length - 1].id
      }
      res.push(...items)
    }
  }

  return res || []
}
