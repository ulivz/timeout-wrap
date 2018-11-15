module.exports = function (promises, timeout, intialValue) {
  promises = Array.isArray(promises)
    ? promises
    : [promises]
  return Promise.race([
    ...promises,
    new Promise(resolve => setTimeout(() => resolve(intialValue), timeout))
  ])
}
