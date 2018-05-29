module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  countIf: countIf
}

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  return (typeof thing === 'number')
}

function toNumber (str) {
  return Number(str)
}

function isStringNumber (str) {
  if (isNaN(str) === true) {
    return false
  } else if (isNaN(str) !== true) {
    return true
  }
}

function add (a, b) {
  return (a + b)
}

function addStrings (a, b) {
 return (Number(a) + Number(b)).toString()
}

function addStringsOrNumbers (a, b) {
  let result = ''
  if (typeof a === 'number' && typeof b === 'number') {
    result = a + b
  } else {
    result = (Number(a) + Number(b)).toString()
  }
  return result  
}

function isEmail (str) { 
  if (str.indexOf('@') !== -1 && str.indexOf('.') !== -1) {
    return true
  } 
  return false
}

function countIf (array, fn) {
  let counter = 0
  for (let index of array) {
    if (fn(index) === true) {
      counter++
    }
  }
  return counter
}

function filter (array, fn) {
}

function map (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}
