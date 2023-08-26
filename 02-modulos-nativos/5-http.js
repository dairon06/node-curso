const http = require("node:http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log();
  res.end("Hola mundo");
});

server.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
