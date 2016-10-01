function fromEnglish (numString) {
  var onesAndTeens = {
    'zero': 0,
    'a': 1,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
  }

  var tens = {
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fourty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
  }

  var places = {
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000
  }


  function cleanString(numString){
    return numString.split(/[' '-]/)
    .reduce(function (result, word) {
      if (word != 'and') {
        result.push(word);
      }
      return result
    }, []);
  }

  function toDecimal(words) {
    var singlePlace = 0
    return words.reduce(function(result, word){
      if(word in places) {
        result += singlePlace * places[word]
        singlePlace = 0
      } else if(word in onesAndTeens){
        singlePlace += onesAndTeens[word]
      } else if (word in tens) {
        singlePlace += tens[word]
      } else if (word == 'hundred') {
        singlePlace *= 100
      }

      return result
    }, 0) + singlePlace
  }

  return toDecimal(cleanString(numString))
}

module.exports = fromEnglish
