const firstTimer = setTimeout(() => {})
/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  let lastTimer = setTimeout(() => {})
  while (lastTimer-- >= firstTimer) {
    window.clearTimeout(lastTimer)
  }
}
