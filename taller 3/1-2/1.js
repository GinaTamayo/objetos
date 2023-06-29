//1. Crea una clase llamada "Perro" con un atributo llamado "nombre". 
//Agrega un método llamado ladrar() que imprima en la consola "¡Woof!" 
//junto al nombre del perro.

class Perro {
    constructor(nombre){
        this.nombre = nombre
    }
    ladrar() {
        console.log(`¡Woof! ${this.nombre}`);
    }
}
const miPerro = new Perro ("Lukas");
miPerro.ladrar();
//Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección.
//Llama al método ladrar() de la instancia.