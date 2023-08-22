const os = require("node:os");

console.log("Información del sistema operativo:");
console.log("----------------------------------");
console.log("Nombre del sistema operativo:", os.platform());
console.log("Versión del sistema operatvo", os.release());
console.log("Arquitectura del sistema operativo", os.arch());
console.log("CPus:", os.cpus().length, "hilos");
console.log("Memoria total:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Memoria libre:", os.freemem() / 1024 / 1024 / 1024, "GB");
console.log("Uptime:", os.uptime() / 60 / 60, "horas");
