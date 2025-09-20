interface Detalle {
    autor: string;
    anio: number;
}

interface ReproductorVideo {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}


const reproductorAudio: ReproductorVideo = {
    volumen: 50,
    duracion: 180,
    cancion: 'Todo de cabeza',
    detalle: {
        autor: 'Kaleth Morales',
        anio: 2006
    }
};

const cancion = reproductorAudio.cancion;
console.log(cancion);
const autor = reproductorAudio.detalle.autor;
console.log(autor);

// Destructuración
const {cancion: c, detalle: {autor: a}} = reproductorAudio;
console.log('Destructuración');
console.log(`Canción titulada ${c}, de la autoría de ${a}`);


const frutas: string[] = ['Manzana', 'Pera', 'Piña'];
console.log('Arreglo frutas' + (frutas[3] || ' no existe'));

//const [p1, p2, p3, p4 = 'Uva'] = frutas;
const [p1, , , p4 = 'Uva'] = frutas;
console.log(p1);
console.log(p4);

//---------------------------------
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

