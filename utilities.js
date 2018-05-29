module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  toNumberB: toNumberB,
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
  let result = 0
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result += 1
    }
  }
  return result
}

function filter (array, fn) {
  let email = []
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      email.push(array[i])
    }
  }
  return email
}

function map (array, fn) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(fn(array[i]))
  }
  return newArr
}

function filterStringsWithCommas (str) {
  return str.indexOf(',') != -1
}

function splitStringByCommas (str) {
  console.log(str)
  return str.split(',')
}
