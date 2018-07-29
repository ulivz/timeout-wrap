module.exports = function (rawPromise, defaultValue, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      console.log('[Warn] Timeout, use default value.')
      resolve(defaultValue)
    }, timeout)

    rawPromise
      .then(output => {
        clearTimeout(timer)
        resolve(output)
      })
      .catch(err => {
        clearTimeout(timer)
        reject(err)
      })
  })
}
