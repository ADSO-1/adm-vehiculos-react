import Vehiculo from "./Vehiculo.js";

class Auto extends Vehiculo {

    // Constructor Atributos
    constructor(id, numeroPuertas, placa, marca, color) {
        super(placa, marca, color);
        this.id = id;
        this.numeroPuertas = numeroPuertas;
    }

    // Polimorfismos    
    mostrarDatos() {
        return `${super.mostrarDatos()} con numeroPuertas: ${this.numeroPuertas} `;
    }

}


export default Auto;