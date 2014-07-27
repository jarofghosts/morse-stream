morse-stream
====

[![Build Status](http://img.shields.io/travis/jarofghosts/morse-stream.svg?style=flat)](https://travis-ci.org/jarofghosts/morse-stream)
[![npm install](http://img.shields.io/npm/dm/morse-stream.svg?style=flat)](https://www.npmjs.org/package/morse-stream)

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
