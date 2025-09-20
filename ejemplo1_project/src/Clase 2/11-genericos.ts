



function verTipo<T>(argumento: T): T {
    return argumento;
}

interface Mamifero {
    nombre: string;
    genero: string;
    edad: number;
}

const animal1: Mamifero = {
    nombre: "Leo",
    genero: "Macho",
    edad: 5
}

const prueba1 = verTipo("Camilo");
const prueba2 = verTipo(123);
const prueba3 = verTipo(true);
const prueba4 = verTipo<Mamifero>(animal1);

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);
export {};
