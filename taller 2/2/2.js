//Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento
//corresponda su respectivo nombre. Use objetos. Imprima todos los nombres de los usuarios usando ciclos.
let datosUsuario = {
    "1234567890": "Luisa Gomez",
    "0987654321": "Maicol Martinez",
    "1092455612": "Jhonatan Ossa",
    "1094673876": "Laura Maria Gimenez",
    "1056784324": "Kevin Andres Lopez",
    "1265789348": "Rosalva Maria De La Oz",
    "1873564702": "Juliana Fernandez",
    "2367909814": "Mario Casas",
    "4567890214": "Luisa Fernanda Morales",
    "3426328278": "Maria Fernanda Anduquia"
}
for (clave in datosUsuario) {
    console.log(datosUsuario[clave]);
}

