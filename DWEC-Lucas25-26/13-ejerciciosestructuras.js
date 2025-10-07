// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "elefante", "tigre", "león"];
console.log(animales);
// 2. Añade dos más. Uno al principio y otro al final
animales.add("jirafa"); // Al final
animales.unshift("zorro"); // Al principio
console.log(animales);
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1); // Índice 2 es la tercera posición
console.log(animales);
// 4. Crea un set que almacene cinco libros
let setLibros = new Set(["1984", "Cien años de soledad", "Don Quijote", "Moby Dick", "Hamlet"]);
console.log(setLibros);
// 5. Añade dos más. Uno de ellos repetido
setLibros.add("El Principito");
setLibros.add("1984"); // Repetido
console.log(setLibros);
// 6. Elimina uno concreto a tu elección
setLibros.delete("Moby Dick");
console.log(setLibros);
// 7. Crea un mapa que asocie el número del mes a su nombre
let mapMeses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);
console.log(mapMeses);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
mapMeses.has(5) ? console.log(mapMeses.get(5)) : console.log("El mes 5 no existe");

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapMeses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(mapMeses);  
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map  
let arrayNumeros = [1, 2, 3, 4, 5, 5, 6];
let setNumeros = new Set(arrayNumeros);
let mapNumeros = new Map();
mapNumeros.set("numeros", setNumeros);
console.log(mapNumeros);
console.log(mapNumeros.get("numeros"));
