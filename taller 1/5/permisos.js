/*5. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
"inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.*/
let acceso = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:"inhabilitado", 438276: "habilitado" }
let contador = 0;
for (clave in acceso) {
    if (acceso[clave] == "habilitado") {
        contador++
    }
}
console.log(`hay ${contador} usuarios habilitados`);
//terminado