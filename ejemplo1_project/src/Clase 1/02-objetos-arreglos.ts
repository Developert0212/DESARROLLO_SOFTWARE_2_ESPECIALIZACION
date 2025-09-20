
let arreglo = ['Pepito', 'Juan'];
let caracteristicas: string[] = ['Bonito', 'Fuerte'];

interface PersonaInterface{
    nombre: string;
    edad: number;
    caracteristicas: string[];

}
const persona: PersonaInterface = {
    nombre: 'Pepito',
    edad: 10,
    caracteristicas : caracteristicas
}

console.log(persona);


export{};