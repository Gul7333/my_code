// // const path = require("node:path");
// // // local module
// // // build in module
// // // third party module
// // // path module
// // console.log(__dirname);
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));
// // console.log(path.join("folder1", "folder2", path.basename(__filename)));
// // console.log(path.resolve("folder1", "folder2", path.basename(__filename)));
// // // events module

// const eventEmitter = require("node:events");
// // // console.log(eventEmitter);
// // //event.on is making an event
// // const event = new eventEmitter();

// // event.on("yaSarkar", () => {
// //     console.log("You called ya Sarkar Gohar Shahi");
// // });
// // // event.emit is executing an event
// // event.emit("yaSarkar");
// // console.log(event.__proto__);
// const fs = require("node:fs/promises");
// // syncronous Readings

// // Asynchronous reading

// const filePromis = fs.readFile("Practice.html", "utf-8");

// filePromis.then(data => console.log(data)).catch(err => console.log(err));
// console.log(Object);
// const fs = require("node:fs");

// console.log(typeof fs);
// import fs from "node:fs";
// console.log(Object.keys(fs));
// learning streams
// const Stream = require("stream");
import Stream from "stream";
const readableStream = new Stream.Readable();
import * as fs from "fs";

async function logChunks(readable) {
    for await (const chunk of readable) {
        console.log(chunk);
    }
}

const readable = fs.createReadStream("Practice.html", { encoding: "utf8" });
logChunks(readable);
