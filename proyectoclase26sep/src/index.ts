// Archivo principal del proyecto
console.log('¡Hola mundo desde TypeScript!');

// Función de ejemplo
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

// Ejemplo de uso
const mensaje = saludar('Estudiante');
console.log(mensaje);

// Exportar para uso en otros módulos
export { saludar };