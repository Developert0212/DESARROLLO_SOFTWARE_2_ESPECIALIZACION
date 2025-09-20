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

export {};