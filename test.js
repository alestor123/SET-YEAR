const tap = require('tap')
const setyear = require('./App')
// will write it in future
tap.throws(() => setyear(1, 2000))
tap.throws(() => setyear('', 2000))
tap.throws(() => setyear('alestor123', 'lol'))
tap.throws(() => setyear('alestor123', -100))
