export interface Pasajero {
    nombre: string;
    hijos?: string[];
}




const pasajero1: Pasajero = {
    nombre: "Camilo",
    hijos: ["Juan", "Ana"]
};

const pasajero2: Pasajero = {
    nombre: "Luisa",
    hijos: []
};


const mostrarHijos : (Pasajero: Pasajero) => void = (Pasajero) => {
    const hijos = Pasajero.hijos?.length ?? 0;
    console.log(`Hijos de ${Pasajero.nombre}: ${hijos}`);
};
mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

export {};