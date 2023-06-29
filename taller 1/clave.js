/*7. Dado el objeto { 3:
"tres", 60: "sesenta", 10: "diez" } consulte cómo eliminar la clave valor 60-"sesenta". Imprima todo el objeto
para verificar los cambios.*/
let eliminar = { 3:"tres", 60: "sesenta", 10: "diez" }
delete eliminar[60]
console.log(eliminar);
//terminado