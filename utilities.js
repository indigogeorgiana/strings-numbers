module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  toNumberB: toNumberB

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

