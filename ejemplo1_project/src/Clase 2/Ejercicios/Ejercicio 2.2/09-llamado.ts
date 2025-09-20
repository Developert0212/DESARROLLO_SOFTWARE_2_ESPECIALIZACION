import { type Auto, type Moto } from './07-interfaces.ts';
import { printAuto, printMoto } from './08-funciones.ts';

const miAuto: Auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020
};

const miMoto: Moto = {
    marca: 'Yamaha',
    modelo: 'MT-07',
    anio: 2019
};

printAuto(miAuto);
printMoto(miMoto);