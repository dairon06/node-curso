/*
Módulo os (Información del sistema operativo):


/*2 Directorio de usuario:
Imprime por consola el directorio del usuario actual.*

1 Información del sistema operativo:
Muestra por consola el nombre de la plataforma, la arquitectura del sistema y la versión del sistema operativo.*/

/*3 Muestra el resultado utilizando la sintaxis de ES Modules.

4 Utiliza la libreria chalk para personalizar los mensajes impresos en consola.

5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run os)

Ejemplo de ejecución:
$ npm run os
1. Información del sistema operativo:
Plataforma: linux
Arquitectura: x64
Versión: 5.15.90.1-microsoft-standard-WSL2
---------------------------------------
2. Directorio de usuario:
/home/fabian*/

import { platform, arch, release, homedir } from "node:os";
import chalk from "chalk";

console.log(
  chalk.rgb(156, 39, 176).bold("1. Información del sistema operativo:")
);
console.log(
  chalk
    .rgb(81, 45, 168)
    .bold("Plataforma:", chalk.rgb(100, 181, 246).bold(platform()))
);
console.log(
  chalk
    .rgb(81, 45, 168)
    .bold("Arquitectura:", chalk.rgb(100, 181, 246).bold(arch()))
);
console.log(
  chalk
    .rgb(81, 45, 168)
    .bold("Versión:", chalk.rgb(100, 181, 246).bold(release()))
);
console.log(chalk.rgb(233, 30, 99).bold("----------------------------------"));
console.log(chalk.rgb(156, 39, 176).bold("2. Directorio de usuario:"));
console.log(chalk.rgb(81, 45, 168).bold(homedir()));
