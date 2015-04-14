var test = require('tape')

var morseStream = require('../')

test('converts words into morse code', function(t) {
  t.plan(2)

  var stream = morseStream()
    , result = []

  stream.on('data', result.push.bind(result))
  stream.on('end', function() {
    t.equal('' + result[0].toString(), '.... . .-.. .-.. --- --..--')
    t.equal('' + result[1].toString(), '.-- --- .-. .-.. -..')
  })

  stream.write('Hello,')
  stream.end('world')
})

test('splits output by word boundary', function(t) {
  t.plan(2)

  var stream = morseStream()
    , result = []

  stream.on('data', result.push.bind(result))
  stream.on('end', function() {
    t.equal(result[0].toString(), '.... . .-.. .-.. --- --..--')
    t.equal(result[1].toString(), '.-- --- .-. .-.. -..')
  })

  stream.end('Hello, world')
})
