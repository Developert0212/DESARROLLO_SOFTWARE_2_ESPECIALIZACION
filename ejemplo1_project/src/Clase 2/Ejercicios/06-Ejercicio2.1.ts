export interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: 'Xiaomi Redmi Note 10',
    precio: 1500
}
const tablet: Producto = {
    descripcion: 'iPad Air',
    precio: 2500
}
const laptop: Producto = {
    descripcion: 'MacBook Air',
    precio: 4500
}

const carritoCompras: Producto[] = [celular, tablet, laptop];
const impuesto : number = 0.19;
const propina : number = 0.10;


interface ImpuestosOption {
    impuesto: number;
    productos: Producto[];
    propina?: number;
    
}

export function calcularImpuesto(option : ImpuestosOption): number [] {
    let total : number = 0;
    option.productos.forEach(({precio}) => {
        total += precio;
    });
   return [total,total * option.impuesto, total * (option.propina || 0)];
}
const [totalPagar, impuestoPagar, propinaPagar] = calcularImpuesto({impuesto, productos: carritoCompras, propina});
console.log(`Impuesto a pagar: $${impuestoPagar}`);
console.log(`Total a pagar: $${totalPagar}`);
console.log(`Propina a pagar: $${propinaPagar}`);

export{};