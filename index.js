module.exports = function (rawPromise, defaultValue, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(defaultValue), timeout)
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
