//window es el objeto global del navegador
// console.log(window);

//global es el objeto global de NodeJS
// console.log(global);

//window !== -> son diferentes

//NUEVA OPCIÓN PARA REFERIRSE AL OBJETO GLOBAL
//console.log.(globalthis)

console.log("1. Esto se ejecuta de inmediato");

setTimeout(() => {
  console.log("2. Esto se ejecuta después de 3 segundos");
}, 3000);

console.log("3. Esto se ejecuta de inmediato");
