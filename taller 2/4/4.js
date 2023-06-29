//En una clínica, se requiere un programa donde el usuario pueda consultar el día de su cita mediante su documento. 
//La cita debe tener día y fecha. Si el usuario consulta, el programa debe mostrarle sus nombres, seguidos del día
//y hora de su cita. Una vez hecha la consulta, el programa le debe mostrar al usuario un mensaje preguntándole si
//desea cambiar el día ó fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario
//que el cambio solicitado ha sido exitoso. Use objetos. 

class Cita {
    constructor(documento, nombre, dia, fecha) {
        this.documento = documento;
        this.nombre = nombre;
        this.dia = dia;
        this.fecha = fecha;
    }
}

let citasUsuario = [];
citasUsuario.push(new Cita("123456789", "Camila Lopez", "Lunes", "14-07-2023"));
citasUsuario.push(new Cita("246810122", "Luis Cortez", "Jueves", "20-07-2023"));
citasUsuario.push(new Cita("157911135", "Andrea Martinez", "Miercoles", "27-07-2023"));
function consultar(documento) {
    let citaAgendada;
    for (let index = 0; index < citasUsuario.length; index++) {
        if (citasUsuario[index].documento == documento) {
            citaAgendada = citasUsuario[index]
        }
        break;
    }
    if (citaAgendada) {
        console.log("Nombre:" + citaAgendada.nombre);
        console.log("Dia de su cita:" + citaAgendada.dia);
        console.log("Fecha de su cita:" + citaAgendada.fecha);

        let cambiarCitaAgendada = prompt("¿Desea cambiar el día o la fecha de su cita?").toLowerCase();
        if (cambiarCitaAgendada == "si") {
            let nuevoDiaAgendado = prompt("Ingrese el nuevo dia que desea para la cita");
            let nuevaFechaAgendada = prompt("Ingrese la nueva fecha en que desea su cita");

            citaAgendada.dia = nuevoDiaAgendado;
            citaAgendada.fecha = nuevaFechaAgendada;
            console.log("Nombre:" + citaAgendada.nombre + ", su cita a sido reprogrmada co exito");
            console.log("Dia:" + citaAgendada.dia);
            console.log("Fecha:" + citaAgendada.fecha);
        }

    } else {
        console.log("Lo sentimos, su cita no fue encontrada, por favor verificar el número de documento");
    }
}
let documentoConsulta = prompt("Ingrese su número de documento para consultar su cita");
let realizarConsulta = consultar(documentoConsulta)
console.log(realizarConsulta);

