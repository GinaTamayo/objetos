//Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y
//"titular". Agrega un método llamado depositar(cantidad) que sume la cantidad
//proporcionada al saldo actual.

class CuentaBancaria {
    constructor(titular) {
        this.saldo = 0
        this.titular = titular
    }
    depositar(cantidad) {
        this.saldo += cantidad
    }
    retirar(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad
        } else {
            console.log(`No tiene suficiente saldo en su cuenta`);
        }
    }
}
//Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular
//de tu elección. Deposita 100 en la cuenta llamando al método depositar().
const miCuenta = new CuentaBancaria ("Juliana Gomez");
miCuenta.depositar(100);

//5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste 
//la cantidad proporcionada del saldo actual. Asegúrate de verificar si hay suficiente
//saldo antes de realizar la operación.

//6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. 
//Imprime en la consola el saldo actual después de la operación.
miCuenta.retirar(50);
console.log(`${miCuenta.titular} el saldo en su cuenta es de $${miCuenta.saldo}`);


