//Enunciado Crea una función genérica llamada crearCaja<T> que reciba un valor de cualquier tipo y lo devuelva dentro de un objeto con la propiedad contenido.

function crearCaja<T>(valor: T): { contenido: T } {
    return { contenido: valor };
}

console.log(crearCaja(5));
console.log(crearCaja("pizza"));
console.log(crearCaja({ nombre: "Ensalada", calorias: 150 }));
console.log(crearCaja([1, 2, 3, 4, 5]));


export {};