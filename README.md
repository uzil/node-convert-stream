# convert-stream

Converts any stream to buffer or an array. Saves you from the trouble of saveing the streams to files.

## Features

- Fast
- Promises implementation

## Requirements

Before using gifme, please install:

- [Node.js](https://nodejs.or)

## Installation
For local
```shell
npm install convert-stream --save
```

## Usage
For converting to Buffer
```js
const cs = require('convert-stream');
const fs = require('fs');
const path = require('path');

let input = path.join(__dirname, 'yourexamplefile');

let yourStream = fs.createReadStream(input);
cs.toBuffer(yourStream)
    .then((returnedBuffer) => { /*doSomething*/ })
    .catch(err, function doSomthingWithError(error) { /*do something*/ });
```
For converting to array
```js
cs.toArray(yourStream)
    .then((returnedBuffer) => { /*doSomething*/ })
    .catch(err, function doSomthingWithError(error) { /*do something*/ });
```
