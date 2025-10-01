# Proyecto Clase 26 Sep

Este es un proyecto de Node.js con TypeScript creado para la clase del 26 de septiembre.

## Estructura del Proyecto

```
proyectoclase26sep/
├── src/
│   └── index.ts          # Archivo principal
├── dist/                 # Archivos compilados (generados automáticamente)
├── node_modules/         # Dependencias (generadas automáticamente)
├── package.json          # Configuración del proyecto
├── tsconfig.json         # Configuración de TypeScript
├── .gitignore           # Archivos a ignorar en Git
└── README.md            # Este archivo
```

## Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## Scripts Disponibles

- `npm run dev` - Ejecuta el proyecto en modo desarrollo con recarga automática
- `npm run build` - Compila el código TypeScript a JavaScript
- `npm start` - Ejecuta el código compilado
- `npm run clean` - Limpia la carpeta de compilación

## Uso

### Modo Desarrollo
```bash
npm run dev
```

### Compilar y Ejecutar
```bash
npm run build
npm start
```

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **TypeScript** - Lenguaje de programación
- **ts-node** - Ejecutor de TypeScript para desarrollo
- **nodemon** - Recarga automática durante el desarrollo