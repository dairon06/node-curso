const fs = require("node:fs");

console.log("Leyendo archivo");
const archivo = fs.readFileSync("./archivo.txt", "utf-8");

console.log("Contenido de archivo:");
console.log(archivo);
