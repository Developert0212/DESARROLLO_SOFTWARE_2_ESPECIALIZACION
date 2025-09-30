//Ejercicio: Biblioteca Digital con Encadenamiento Opcional

export interface Libro {
  titulo: string;
  autor?: {
    nombre?: string;
    pais?: string;
  };
  anioPublicacion?: number;
}
export function mostrarLibro(libro: Libro): void {
  const titulo = libro.titulo;
  const autorNombre = libro.autor?.nombre ?? "Autor desconocido";
  const autorPais = libro.autor?.pais ?? "País desconocido";
  const anioPublicacion = libro.anioPublicacion ?? "Año no disponible";
  console.log(`Título: ${titulo}`);
  console.log(`Autor: ${autorNombre}`);
  console.log(`País: ${autorPais}`);
  console.log(`Año de publicación: ${anioPublicacion}`);
}

const libro1: Libro = {
  titulo: "Cien Años de Soledad",
  autor: { nombre: "Gabriel García Márquez", pais: "Colombia" },
  anioPublicacion: 1967,
};
const libro2: Libro = {
  titulo: "El Aleph",
  anioPublicacion: 1945,
};

const libro3: Libro = {
  titulo: "Ficciones",
  autor: { nombre: "Jorge Luis Borges", pais: "Argentina" },
};

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);

export {};
