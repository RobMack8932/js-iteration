/* 

   Welcome to JS Interation

   Down below you will find instructions for code to write.

   As you write and save your code, you can look in your terminal where you
   ran `yarn test` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.

   Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

*/

//* 1) Define a function named `yelling` that takes an array of
// * strings as an argument and returns a new array with all
//* the words forced to uppercase
//*/
//* Example:
//*
function yelling(array) {
  const upperCased = []
  array.forEach(function(arrayItem) {
    const upperCase = arrayItem.toUpperCase()
    upperCased.push(upperCase)
  })
  return upperCased
}

/**
 *
 * 2) Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 */
function doubleTrouble(numbers) {
  return numbers.map(x => x * 2)
}
// ...

/* 3) Define a function stringyIndexes() that takes an array of
 * strings as an argument and returns a new array with each string
 * suffixed with " is at index X" where X is the index of the element
 */

function stringyIndexes(array) {
  var answer = array.map((array, index) => `${array} is at index ${index}`)
  return answer
}

/*
 * 4) Define a function onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 */

function onlyTheEvenSurvive(array) {
  const even = array.filter(index => index % 2 === 0)
  return even
}

/*
 * 5) Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 */

function onlyTheEvenIndexedSurvive(array) {
  const even = array.filter((index, indexposition) => indexposition % 2 === 0)
  return even
}

/*
 * 6)  Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 **/

function bestMoviesOfTheYear(array, year) {
  return array
    .filter(movie => movie.score > 50 && movie.year === year)
    .map(movie => movie.name)
}

// ...

/*
 * 7) Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 */

function everyoneIsOdd(array) {
  return array.every(x => x % 2 != 0)
}

/*
 * 8) Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 */

function findTheNeedle(array) {
  return array.find(string => string.includes('needle'))
}

/*
 * 9) Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 */
function findTheNeedleIndex(array) {
  return array.findIndex(string => string.includes('needle'))
  return
}
/*
 *` 10)  Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 */

function someoneToLove(array) {
  return array.some(string => string.length === 4)
}

/*
 * 11) Define a function mapYourself that accepts an array of
 * numbers and returns a new array where each number is doubled.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

function mapYourself(array) {
  let x = []
  for (let y = 0; y < array.length; y++) {
    x[y] = array[y] * 2
  }
  return x
}

/*
 * 12) Define a function filterYourself that accepts an
 * array of numbers and returns a new array containing
 * only the even numbers.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

function filterYourself(array) {
  let answer = []
  for (let number = 0; number < array.length; number++) {
    if (array[number] % 2 === 0) {
      answer.push(array[number])
    }
  }
  return answer
}

/*
 * 13) Define a function everyYourself that accepts an
 * array of numbers and returns true if every number
 * in the array is even.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

function everyYourself(array) {
  for (let number = 0; number < array.length; number++) {
    if (array[number] % 2 != 0) {
      return false
    }
  }
  return true
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

const ensureDefined = (t, method) => {
  if (eval(`typeof ${method}`) !== 'function') {
    t.fail(
      `\n\n\n\n\n⚡️⚡️⚡️⚡️⚡️ The next step is to define the function ${method} ⚡️⚡️⚡️⚡️⚡️\n\n\n`
    )
  } else {
    t.pass()
  }
}

test('Function Check - yelling', t => ensureDefined(t, 'yelling'))
test('yelling()', t => {
  t.deepEqual(yelling(['now', 'is', 'the', 'time']), [
    'NOW',
    'IS',
    'THE',
    'TIME'
  ])
})

test('Function Check - double tree', t => ensureDefined(t, 'doubleTrouble'))
test('doubleTrouble()', t => {
  t.deepEqual(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
})

test('Function Check - string index', t => ensureDefined(t, 'stringyIndexes'))
test('stringyIndexes', t => {
  t.deepEqual(stringyIndexes(['how', 'now', 'brown', 'cow']), [
    'how is at index 0',
    'now is at index 1',
    'brown is at index 2',
    'cow is at index 3'
  ])
})

test('Function Check - only the even survive', t =>
  ensureDefined(t, 'onlyTheEvenSurvive'))
test('onlyTheEvenSurvive', t => {
  t.deepEqual(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
    42,
    50,
    100,
    44
  ])
})

test('Function Check - only the even index survive', t =>
  ensureDefined(t, 'onlyTheEvenIndexedSurvive'))
test('onlyTheEvenIndexedSurvive', t => {
  t.deepEqual(
    onlyTheEvenIndexedSurvive([
      31,
      67,
      64,
      96,
      14,
      24,
      43,
      51,
      48,
      80,
      58,
      43,
      64,
      84,
      98,
      99,
      69,
      93,
      5,
      32,
      29,
      4,
      28,
      18,
      86,
      22,
      20,
      74,
      35,
      27,
      85,
      79,
      65,
      32,
      56,
      94,
      93,
      20,
      29,
      22,
      72
    ]),
    [
      31,
      64,
      14,
      43,
      48,
      58,
      64,
      98,
      69,
      5,
      29,
      28,
      86,
      20,
      35,
      85,
      65,
      56,
      93,
      29,
      72
    ]
  )
})

test('Function Check - best movie', t =>
  ensureDefined(t, 'bestMoviesOfTheYear'))
test('bestMoviesOfTheYear', t => {
  const movies = [
    { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
    { name: 'Birdman', year: 2014, score: 91 },
    { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
    { name: 'Rage', year: 2014, score: 14 },
    { name: 'Get Out', year: 2017, score: 99 },
    { name: 'Justice League', year: 2017, score: 40 },
    { name: 'Ghost in the Shell', year: 2017, score: 46 },
    { name: 'The Big Sick', year: 2017, score: 98 }
  ]

  t.deepEqual(bestMoviesOfTheYear(movies, 2014), [
    'The Grand Budapest Hotel',
    'Birdman'
  ])

  t.deepEqual(bestMoviesOfTheYear(movies, 2017), ['Get Out', 'The Big Sick'])

  t.deepEqual(bestMoviesOfTheYear(movies, 2001), [])
})

test('Function Check - every one is odd', t =>
  ensureDefined(t, 'everyoneIsOdd'))
test('everyoneIsOdd', t => {
  t.is(everyoneIsOdd([9, 15, 27, 101, 33]), true)
  t.is(everyoneIsOdd([9, 23, 3, 4, 77]), false)
})

test('Function Check find the needle', t => ensureDefined(t, 'findTheNeedle'))
test('findTheNeedle', t => {
  t.is(
    findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
    'there was a needle at'
  )
})

test("Function Check - find the needle's index", t =>
  ensureDefined(t, 'findTheNeedleIndex'))
test('findTheNeedleIndex', t => {
  t.is(
    findTheNeedleIndex(['one', 'time', 'there was a needle at', 'the market']),
    2
  )
})

test('Function Check - someone to love', t => ensureDefined(t, 'someoneToLove'))
test('someoneToLove()', t => {
  t.is(someoneToLove(['how', 'now', 'brown', 'cow']), false)
  t.is(someoneToLove(['how', 'now', 'blue', 'cow']), true)
})

test('Function Check - map yourself', t => ensureDefined(t, 'mapYourself'))
test('mapYourself()', t => {
  const originalMap = Array.prototype.map

  Array.prototype.map = () => []

  const mapFirst = mapYourself([1, 2, 3])
  const mapSecond = mapYourself([9, 0, 1])

  Array.prototype.map = originalMap

  t.deepEqual(mapFirst, [2, 4, 6])
  t.deepEqual(mapSecond, [18, 0, 2])
})

test('Function Check - filter yourself', t =>
  ensureDefined(t, 'filterYourself'))
test('filterYourself()', t => {
  const original = Array.prototype.filter

  Array.prototype.filter = () => []

  const result = filterYourself([8, 1, 2, 3])

  Array.prototype.filter = original

  t.deepEqual(result, [8, 2])
})

test('Function Check - Every Yourself', t => ensureDefined(t, 'everyYourself'))
test('everyYourself()', t => {
  const original = Array.prototype.every

  Array.prototype.every = () => undefined

  const everyResultFalse = everyYourself([8, 1, 2, 3])
  const everyResultTrue = everyYourself([8, 10, 22, 38])

  Array.prototype.every = original

  t.deepEqual(everyResultFalse, false)
  t.deepEqual(everyResultTrue, true)
})

/* eslint-enable */
