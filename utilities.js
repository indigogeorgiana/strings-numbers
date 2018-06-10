module.exports = {
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  countIf: countIf,
  fiter: filter,
  filterStringsWithCommas: filterStringsWithCommas,
  getType: getType,
  isEmail: isEmail,
  isNumber: isNumber,
  isStringNumber: isStringNumber,
  map: map,
  splitStringsByCommas: splitStringsByCommas,
  toNumber: toNumber
}

function add (a, b) {
  return a + b
}

function addStrings (a, b) {
  let newAdd = parseInt(a) + parseInt(b)
  return newAdd.toString()
}

function addStringsOrNumbers (a, b) {
  if (isNumber(a) && isNumber(b)) {
    return (parseInt(a) + parseInt(b))
  }
  return ((parseInt(a) + parseInt(b))).toString()
}

function countIf (array, fn) {
  let answer = 0
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      answer++
    }
  }
  return answer
}

function filter (array, fn) {
  let count = 0
  for (let i = 0; i <= array.length; i++) {
    if (fn(array[i])) {
      count++
    }
  }
  return count
}

function filterStringsWithCommas (str) {
  if (str.search(',') === -1) {
    return false
  }
  return true
}

function getType (thing) {
  return typeof thing
}

function isEmail (str) {
  // 'isEmail detects an email address'
  // isEmail does not give a false positive'
  if (str.includes('@') && str.includes('.', -3)) {
    return true
  }
  return false
}

function isNumber (thing) {
  if (typeof thing !== 'number') {
    return false
  } else {
    return true
  }
}

function isStringNumber (str) {
  return !isNaN(str)
}

function map (array, fn) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(fn(array[i]))
  }
  return newArr


function splitStringByCommas (str) {
  console.log(str)
  return str.split(',')
}

function toNumber (str) {
  return Number(str)
}