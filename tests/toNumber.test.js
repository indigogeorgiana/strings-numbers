const toNumber = require('../utilities').toNumber
const toNumberB = require('../utilities').toNumberB

test('toNumber can convert a string to a number if possible', () => {
  const expected = 42
  const actual = toNumber('42')
  expect(actual).toBe(expected)
})

test('toNumber can convert a string to a number if possible', () => {
  const expected = 42
  const actual = toNumberB('42')
  expect(actual).toBe(expected)
})