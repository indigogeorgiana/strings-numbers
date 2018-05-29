module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber
}

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  if (typeof thing !== 'number') {
    return false
  } else {
    return true
  }
}

function toNumber (str) {
  return Number(str)
}

function isStringNumber (str) {
}

function add (a, b) {
}

function addStrings (a, b) {
}

function addStringsOrNumbers (a, b) {
}

function isEmail (str) {
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
