import { type Auto, type Moto } from './07-interfaces.ts';



export const printAuto = (auto: Auto): void => {
    console.log(`Auto: ${auto.marca} ${auto.modelo} (${auto.anio})`);
};



export const printMoto = (moto: Moto): void => {
    console.log(`Moto: ${moto.marca} ${moto.modelo} (${moto.anio})`);
};


export {};