let conjunto = new Set()
console.log(conjunto)

conjunto =new Set(["hola","buenos","dias","pepe"])
console.log(conjunto)

conjunto.add("hola") //no se añade porque ya existe;

conjunto.add("adiós")
console.log(conjunto)

conjunto.delete("adiós")
console.log(conjunto)

// Eliminar por posición (por ejemplo, posición 1) sin bucle
let indexToDelete = 1;
let itemToDelete = Array.from(conjunto)[1];
conjunto.delete(itemToDelete);
console.log(conjunto)   


console.log(conjunto.has("pepe")) //true
console.log(conjunto.has("adiós")) //false

console.log(conjunto.size)
