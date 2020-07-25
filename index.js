'use strict'

const s = 1e3
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const y = d * 365.25

module.exports = function (value) {
  if (typeof value === 'string') {
    return parse(value)
  } else if (typeof value === 'number') {
    return value
  } else {
    return Number.NaN
  }
}

function parse (str) {
  if (str.length === 0 || str.length > 100) {
    return Number.NaN
  }

  const re = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
  const match = re.exec(str)

  if (match === null) {
    return Number.NaN
  }

  const n = parseFloat(match[1])
  const type = (match[2] || 'ms').toLowerCase()

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'weeks':
    case 'week':
    case 'w':
      return n * w
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    /* istanbul ignore next */
    default:
      return Number.NaN
  }
}
