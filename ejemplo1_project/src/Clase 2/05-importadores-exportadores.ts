import{type Producto, calcularImpuesto} from './04-destructurador.js';


const carrito: Producto[] = [

    {descripcion: 'Celular', precio: 1500},
    {descripcion: 'Tablet', precio: 2500},
    {descripcion: 'Laptop', precio: 4500}
];

const [total,impuestoPagar, propinaPagar] = calcularImpuesto({impuesto: 0.19, productos: carrito, propina: 0.10});
console.log(`Total a pagar: ${total}, impuesto: ${impuestoPagar}, propina: ${propinaPagar}`);

export {};


//-------------------------------
