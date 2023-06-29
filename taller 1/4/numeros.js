/*4. Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar
cuáles de los valores son pares.*/
let numeros = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50}
for (clave in numeros) {
    if (numeros[clave]%2 === 0) {
        console.log(`El numero ${numeros[clave]} de la clave ${clave} es par`);
    }
}
//terminado