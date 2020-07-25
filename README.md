# bruce-millis

**Convert various time formats to milliseconds.** Same as [`ms`](https://github.com/vercel/ms) except it only does parsing, which gives us the opportunity to return a number input as-is. I frequently did:

```js
const ms = require('ms')
const timeout = typeof n === 'number' ? n : ms(n)
```

[![npm status](http://img.shields.io/npm/v/bruce-millis.svg)](https://www.npmjs.org/package/bruce-millis)
[![node](https://img.shields.io/node/v/bruce-millis.svg)](https://www.npmjs.org/package/bruce-millis)
[![Travis build status](https://img.shields.io/travis/com/vweevers/bruce-millis.svg?label=travis)](http://travis-ci.com/vweevers/bruce-millis)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const ms = require('bruce-millis')

ms(24)        // 24
ms('5s')      // 5000
ms('1m')      // 60000
ms('2h')      // 7200000
ms('2.5 hrs') // 9000000
ms('10h')     // 36000000
ms('1d')      // 86400000
ms('2 days')  // 172800000
ms('1y')      // 31557600000
ms('-3 days') // -259200000
ms('-1h')     // -3600000
```

## API

### `ms(value)`

The `value` argument is required and must be a string or a number (returned as-is). String values are parsed exactly like [`ms`](https://github.com/vercel/ms). If the input is invalid, NaN is returned. If you want an error to be thrown, see [`bruce-millis-option`](https://github.com/vweevers/bruce-millis-option).

## Install

With [npm](https://npmjs.org) do:

```
npm install bruce-millis
```

## License

[MIT](LICENSE.md). Adapted from [`ms`](https://github.com/vercel/ms), please see license for details.
