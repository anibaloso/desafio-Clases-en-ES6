import Cliente from "./cliente.mjs";
import Impuestos from "./impuestos.mjs";

const impuesto1 = new Impuestos(200, 100);
const impuesto2 = new Impuestos(300, 150);
const impuesto3 = new Impuestos(400, 100);
const cliente1 = new Cliente("Luis", impuesto1);

cliente1.impuestos = impuesto2;
cliente1.impuestos = impuesto3;

console.log("Cliente:", cliente1)
console.log("Impuesto calculado:", cliente1.calcularImpuesto());

