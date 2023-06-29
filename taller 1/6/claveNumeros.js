/*6. Dado el
siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números.*/

let objeto = { numeros: [45, 78, 22, 89, 8] }
for (clave in objeto) {
    console.log(objeto[clave]);
}
//terminado