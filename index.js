module.exports = function (rawPromise, defaultValue, timeout) {
  return Promise.race([
    rawPromise,
    new Promise(resolve => setTimeout(() => resolve(defaultValue), timeout))
  ])
}
