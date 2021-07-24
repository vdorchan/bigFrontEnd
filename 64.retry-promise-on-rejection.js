/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise(async (resolve, reject) => {
    let res
    let err

    while (!res && maximumRetryCount-- >= 0) {
      try {
        res = await fetcher()
      } catch (error) {
        err = error
      }
    }

    res ? resolve(res) : reject(err)
  })
}

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetch().catch(error => {
    if (maximumRetryCount === 0) {
      throw error
    } else {
      fetchWithAutoRetry(fetcher, --maximumRetryCount)
    }
  })
}
