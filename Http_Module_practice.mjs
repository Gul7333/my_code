import { log } from "console"
import { readFile, readFileSync } from "fs"
import http from "http"
const app = http.createServer((req,res)=>{
  res.writeHead(200,)
  // res.end(JSON.stringify(req))
  let obj = {
    name: 'Yunus',
    lastname: ' ALGohar',
  }
const file = readFileSync('./Card.html','utf8')
const file2 =  file.replace('img','image')
  res.write(file2)
  res.write(JSON.stringify(obj))
  res.write('Sarkar')
  res.write('Gohar')
  res.end('Shahi')
  log(typeof req)
  // res.end('Shahi')
  // console.log(JSON.stringify(req))

})
app.listen(3000)



