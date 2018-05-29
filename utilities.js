module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  toNumberB: toNumberB,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail

}

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  return (Number.isInteger(thing))
}

function toNumber (str) {
  return Number(str)
}

function toNumberB (str) {
  return parseFloat(str)
}

function isStringNumber (str) {
  return !isNaN(str)
}

function add (a, b) {
  return (a + b)
}

function addStrings (a, b) {
  const result = (Number(a) + Number(b))
  return result.toString()
}

function addStringsOrNumbers (a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b
  } else {
    return (Number(a) + Number(b)).toString()
  }
}

function isEmail (str) {
  const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
  return re.test(String(str).toLowerCase())
}

function countIf (array, fn) {
}

function filter (array, fn) {
}

function map (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}
