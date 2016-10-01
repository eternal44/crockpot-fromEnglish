var tap = require('tap')
var fromEnglish = require('../index.js')

var specList = [
  {english: 'four', decimal: 4},
  {english: 'a hundred', decimal: 100},
  {english: 'fourty two', decimal: 42},
  {english: 'five hundred fifty-two', decimal: 552},
  {english: 'fourteen', decimal: 14},
  {english: 'two-hundred thousand eight-hundred and forty-two', decimal: 200842},
  {english: 'two-hundred fifty-two thousand eight-hundred and forty-two', decimal: 252842},
]

specList.forEach(function(param) {
  tap.equal(fromEnglish(param.english), param.decimal)
})
