/*
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return version => {
    // write your code to return the first bad version
    // if none found, return -1
    let start = 0
    while (start <= version) {
      if (isBad(start)) {
        return start
      }
      start++
    }

    return -1
  }
}

function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return version => {
    // write your code to return the first bad version
    // if none found, return -1
    let start = 0
    let end = version
    let badVersion = -1
    while (start <= end) {
      let mid = (start + end) >> 1
      if (isBad(mid)) {
        badVersion = mid
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return badVersion
  }
}


console.log(firstBadVersion((i) => i >= 4)(100))