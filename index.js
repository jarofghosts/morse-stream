var codes = require('morse-codes')
  , through = require('through')

module.exports = morseStream

function morseStream() {
  var stream = through(toMorse)

  return stream

  function toMorse(data) {
    var phrase = data.toString().toUpperCase()
      , words = phrase.split(' ')

    for(var i = 0, l = words.length; i < l; ++i) {
      convertWord(words[i])
    }
  }

  function convertWord(word) {
    var bits = word.split('')
      , morse = []
      , code
      , bit

    for(var i = 0, l = bits.length; i < l; ++i) {
      bit = bits[i]
      code = codes[bit]
      if(code) morse.push(code)
    }

    stream.queue(morse.join(' '))
  }
}
