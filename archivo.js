// let mensaje: string; // Estableciendo tipado fuerte a la variable como string
// mensaje = 'Hola Mundo!';
// // mensaje = 3;
// console.log(mensaje);
function suma3(operando1, operando2) {
    return 'La suma es ' + (operando1 + operando2);
}
// console.log(suma3(2,3));
// Parámetros opcionales
function multiplicaciona(operando1, operando2, mensaje) {
    return mensaje ? mensaje + operando1 * operando2 : 'El resultado es ' + operando1 * operando2;
}
var resultado1a = multiplicaciona(10, 5);
var resultado2a = multiplicaciona(2, 4, 'Solución: ');
console.log(resultado1a);
console.log(resultado2a);
