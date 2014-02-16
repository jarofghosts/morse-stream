var through = require('through'),
    codes = require('morse-codes')

module.exports = morse_stream

function morse_stream() {
  var stream = through(to_morse)

  return stream

  function to_morse(data) {
    var word = data.toString().toUpperCase(),
        bits = word.split(''),
        morse = [],
        code,
        bit

    for (var i = 0, l = bits.length; i < l; ++i) {
      bit = bits[i]
      code = codes[bit]
      if (code) morse.push(code)
    }

    stream.queue(morse.join(' '))
  }
}
