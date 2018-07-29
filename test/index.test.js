const wrap = require('../')

const EXPECTED_OUTPUT = 'output'
const EXPECTED_ERROR = 'error'
const DEFAULT_OUTPUT = 'default-output'

const mockPromise = (
  duration /* mock execution duration */,
  error = false
) =>
  new Promise((resolve, reject) => {
    if (error) {
      setTimeout(() => reject(EXPECTED_ERROR))
    } else {
      setTimeout(() => resolve(EXPECTED_OUTPUT), duration)
    }
  })

test('should get output when not timeout', async () => {
  const promise = mockPromise(100)
  const output = await wrap(promise, DEFAULT_OUTPUT, 200)
  expect(output).toBe(EXPECTED_OUTPUT)
})

test('should get default output when timeout', async () => {
  const promise = mockPromise(300)
  const output = await wrap(promise, DEFAULT_OUTPUT, 200)
  expect(output).toBe(DEFAULT_OUTPUT)
})

test('should get error correctly', async () => {
  const promise = mockPromise(100, true /* mock error */)
  try {
    await wrap(promise, DEFAULT_OUTPUT, 200)
  } catch (e) {
    expect(e).toBe(EXPECTED_ERROR)
  }
})
