import Impuestos from "./impuestos.mjs";

class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuestos = [impuesto];
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get impuestos() {
        return this._impuestos;
    }
    set impuestos(impuesto) {
        this._impuestos.push(impuesto)
    }

    // calcularImpuesto() {
    //     let totalImpuestos = 0;
    //     this._impuestos.forEach(impuesto => {
    //         totalImpuestos+=((impuesto.montoBrutoAnual - impuesto.deducciones) / 100) * 21
    //     })
    //     return totalImpuestos
    // }

    calcularImpuesto() {
        let totalImpuestos=0;
        this._impuestos.forEach(impuesto=>{
            totalImpuestos+=((impuesto.montoBrutoAnual - impuesto.deducciones) / 100) * 21})
        return totalImpuestos
    }

}

export default Cliente;
