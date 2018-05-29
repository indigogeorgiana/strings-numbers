module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  countIf: countIf,
  filter: filter,
  map: map,
  filterStringsWithCommas: filterStringsWithCommas,
  splitStringByCommas: splitStringByCommas
}

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  if (typeof thing === 'number') { return true }
  return false
}

function toNumber (str) {
  return parseInt(str)
}

function isStringNumber (str) {
  if (isNaN(parseInt(str))) { return false }
  return true
}

function add (a, b) {
  return a + b
}

function addStrings (a, b) {
  return ((parseInt(a) + parseInt(b))).toString()
}

function addStringsOrNumbers (a, b) {
  if (isNumber(a) && isNumber(b)) { return (parseInt(a) + parseInt(b)) }
  return ((parseInt(a) + parseInt(b))).toString()
}

function isEmail (str) {
  if (str.includes('@') && str.includes('.', -3)) { return true }
  return false
}

function countIf (array, fn) {
  var count = 0
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i])) { count++ }
  }
  return count
}

function filter (array, fn) {
  var endarr = []
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i]) === true) {
      endarr.push(array[i])
    }
  }
  return endarr
}

function map (array, fn) {
  var endarr = []
  for (var i = 0; i < array.length; i++) {
    return fn(array[i])
  }
  return endarr
}

function filterStringsWithCommas (str) {
  if (str.search(',') === -1) { return false }
  return true
}

function splitStringByCommas (str) {
  for var i = 0; i<
}
