requerir("dotenv").configuración();
const process = require("node:process");

console.log(process.cwd()); //Trae el directorio actual de trabajo
console.log(process.pid); //Trae id de proceso
console.log(process.arch); //Trae la arquitectura del sistema
console.log(process.platform); //Trae el sistema operativo
console.log(process.version); //Trae la version de node.js

if (process.argv[2] === "dev") {
  console.log("Estás en modo desarrollo");
}

console.log(process.env.NOMBRE);
console.log(process.env.EDAD);

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("Exit", () => {
  console.log("El proceso va acabó");
});

process.exit(0); //Tremina el proceso bien
process.exit(1); //Tremino mal
