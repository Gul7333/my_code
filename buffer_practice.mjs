import { log } from "console"
log('y'.charCodeAt())
const buffer1 = Buffer.from('y','utf8')

log(buffer1)
log(buffer1[0])
log(buffer1.toString())
log(buffer1[0].toString())
// log(buffer1.toString(16))
// log(buffer1[0].toString(16))
const n = 12
log(n.toString())
const buffer = Buffer.from('Hello   ')
log(buffer.toString("hex"))
log(buffer.toString())
import os from 'os'
import { isProxy } from "util/types"
log(os.freemem() / 1000 / 1000)
const net = require('net')


