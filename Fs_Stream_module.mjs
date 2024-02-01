import { log } from "console";
import fs from "fs";
const read = fs.createReadStream('./Card.html','utf8')

const write = fs.createWriteStream('./Card2')
read.pipe(write)

log(fs.readFileSync('./Card2','utf8'))

