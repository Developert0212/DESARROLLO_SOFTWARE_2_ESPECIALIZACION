export class Persona {
  constructor(public nombre: string, public direccion: string) {}
}

const persona: Persona = new Persona("Juan", "Calle 123");
console.log(persona);

export class Trabajador extends Persona {
  constructor(
    nombre: string,
    direccion: string,
    public cargo: string,
    public empresa: string
  ) {
    super(nombre, direccion);
  }
}

const trabajador: Trabajador = new Trabajador(
  "Ana",
  "Avenida 456",
  "Ingeniera",
  "TechCorp"
);
console.log(trabajador);

export {};
