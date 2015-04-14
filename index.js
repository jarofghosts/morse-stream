var codes = require('morse-codes')
  , through = require('through2')

module.exports = morseStream

function morseStream() {
  var stream = through(toMorse)

  return stream

  function toMorse(data, _, next) {
    var phrase = data.toString().toUpperCase()
      , words = phrase.split(' ')

    for(var i = 0, l = words.length; i < l; ++i) {
      stream.push(convertWord(words[i]))
    }

    next()
  }

  function convertWord(word) {
    var bits = word.split('')
      , morse = []
      , code
      , bit

    for(var i = 0, l = bits.length; i < l; ++i) {
      bit = bits[i]
      code = codes[bit]

      if(code) {
        morse.push(code)
      }
    }

    return morse.join(' ')
  }
}
