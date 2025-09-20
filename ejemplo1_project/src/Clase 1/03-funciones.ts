
function sumar(a: number, b: number): number{
   let asuma : number = a;
   let asumb : number = b;
return asuma+asumb;
}

const result = sumar(3,2);

const sumarFlecha = (a: number, b: number): number => a + b

const resultSumarFlecha = sumarFlecha(2,5);


function multiplicar (primerNumero: number, segundoNumero?: number, base: number = 4): number {
    return primerNumero*base;
}
const resultMultiplicar = multiplicar(2)



interface PersonajeInterfaz{
    nombre : string,
    vida : number,
    mostrarDetalle:()=>void; 
}

const porcentajeVida = (personaje:PersonajeInterfaz,vida: number)=>{
    personaje.vida += vida;

}

const personaje1: PersonajeInterfaz = {
    nombre : 'Pepito',
    vida: 20,
    mostrarDetalle(){
        console.log(`Nombre -> ${this.nombre}, Vida ${this.vida}`);
    }
}
console.log('Personaje:' , personaje1);
personaje1.mostrarDetalle();
console.log(result);
console.log(resultSumarFlecha);
console.log(resultMultiplicar);







interface Usuario{
    id: number,
    nombre: string,
    email: string,
    activo: boolean,
    roles: string[],
    direccion: {
        ciudad: string,
        pais: string
    }

    saludar(): string,
    actualizarEmail(nuevoEmail: string):void;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "anaperez@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion:{
        ciudad: "Bogota",
        pais: "Colombia"
    },
    saludar() {
        return `Hola, Mi nombre es: ${this.nombre}`
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    },
}

console.log(usuario1.saludar());
export{}