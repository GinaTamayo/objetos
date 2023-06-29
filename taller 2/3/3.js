//Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco
//países del continente seleccionado por el usuario. Use objetos. Use ciclos.
let ingresarContinente = prompt("Ingrese un continente").toLowerCase();
let continentes = {"asia":["China", "Japon", "Tailandia", "Corea del Sur", "Singapur"],
                    "america":["Colombia", "Brasil", "Argentina", "Ecuador", "Perú"],
                    "africa":["Egipto", "Argelia", "Sudáfrica", "Nigeria", "Marruecos"],
                    "europa":["Francia", "España", "Grecia", "Alemania", "Ucrania"], 
                    "oceania":["Nueva Zelanda", "Samoa", "Kiribati", "Australia", "Islas de Cook"]}

                    if (ingresarContinente in continentes) {
                        console.log(continentes[ingresarContinente]);
                    } else {
                        console.log("El continente ingresado no fue posible encontrarlo, quizas lo escribio incorrectamente");
                    } 