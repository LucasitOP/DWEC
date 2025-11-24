/*
// 1. Crea una variable para cada operación aritmética 
// 2.Crea una variable para cada tipo de operación de asignación,
// que haga uso de las variables utilizadas para las operaciones aritméticas

3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

4. Imprime 5 comparaciones falasas con diferentes operadores de comparación

5. Utiliza el operador logico and

6. Utiliza el operador logico or

7. Combina ambos soperadores lógicos

8. Añade alguna negación

9. Utiliza el operador ternario

10. Combina operadores aritméticos , de comparación y lógicos
*/


//1. Crea una variable para cada operación aritmética 
let suma=5+3
let resta=5-3
let multiplicacion=5*3
let division=5/3
let modulo=5%3
let exponente=5**3
console.log("Operaciones aritméticas:")
console.log("Suma: "+suma)
console.log("Resta: "+resta)
console.log("Multiplicación: "+multiplicacion)
console.log("División: "+division)
console.log("Módulo: "+modulo)
console.log("Exponente: "+exponente)

console.log("****************************************************************")
// 2.Crea una variable para cada tipo de operación de asignación,que haga uso de las variables utilizadas para las operaciones aritméticas
let asignaciónSuma=suma

console.log("Operaciones de asignación:")
console.log("Valor inicial de asignaciónSuma: "+asignaciónSuma)
asignaciónSuma+=2 //asignaciónSuma=asignaciónSuma+2
console.log("Después de asignaciónSuma+=2: "+asignaciónSuma)
console.log("****************************************************************")
// 3.Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Comparaciones verdaderas:")
console.log("5 es mayor que 3: "+(5>3)) //true
console.log("5 es mayor o igual que 5: "+(5>=5)) //true
console.log("3 es menor que 5: "+(3<5)) //true
console.log("3 es menor o igual que 3: "+(3<=3)) //true
console.log("5 es igual a 5: "+(5==5)) //true

// 4.Imprime 5 comparaciones falasas con diferentes operadores de comparación
console.log("Comparaciones falsas:")
console.log("5 es menor que 3:" +(5<3)) //false
console.log("5 es menor o igual que 3: "+(5<=3)) //false
console.log("3 es mayor que 5: "+(3>5)) //false
console.log("3 es mayor o igual que 5: "+(3>=5)) //false
console.log("5 es igual a 3: "+(5==3)) //false
console.log("****************************************************************")
// 5.Utiliza el operador logico and
let andResult=true && false
console.log("Resultado de true && false: "+andResult) //false
// 6.Utiliza el operador logico or
let orResult=true || false
console.log("Resultado de true || false: "+orResult) //true
// 7.Combina ambos soperadores lógicos
let combinedResult=(5>3) && (3<5) || (5<3)
console.log("Resultado de (5>3) && (3<5) || (5<3): "+combinedResult) //true
  
// Operador de negación

console.log(!true)

//9. Utiliza el operador ternario

let llueve = true
llueve ? console.log("Está lloviendo") : console.log("No está lloviendo")
 //10. Combina operadores aritméticos , de comparación y lógicos
