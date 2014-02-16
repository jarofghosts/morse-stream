var morse_stream = require('../'),
    stream = require('stream'),
    assert = require('assert'),
    ws = stream.Writable(),
    rs = stream.Readable(),
    c = 1

ws._write = function(chunk, enc, next) {
  c == 1 && assert.strictEqual(chunk.toString(), '.... . .-.. .-.. --- --..--')
  c == 2 && assert.strictEqual(chunk.toString(), '.-- --- .-. .-.. -..')

  c++
  next()
}

rs._read = function() {
  rs.push('Hello,')
  rs.push('world')
  rs.push(null)
}

rs.pipe(morse_stream()).pipe(ws)
