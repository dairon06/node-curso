//import fs from "node:fs" ES PARA .MJS
const fs = require("node:fs"); //ES PARA .JS

const stat = fs.statSync("./archivo.txt")
console.log(stat.isDirectory())