morse-stream
====

[![Build Status](https://travis-ci.org/jarofghosts/morse-stream.png?branch=master)](https://travis-ci.org/jarofghosts/morse-stream)

transform words into morse code

## example

```js
var fs = require('fs'),
    split = require('split'),
    append = require('appendage'),
    morse = require('morse-stream')

fs.createReadStream('LICENSE')
  .pipe(split())
  .pipe(morse())
  .pipe(append({ after: ' / ' }))
  .pipe(process.stdout)
// - .... . / -- .. - / .-.. .. -.-. . -. ... . / -.--. -- .. - -.--.- / etc  
```

## notes

morse-stream will emit data for every *word* streamed to it, split by space.

## license

MIT
