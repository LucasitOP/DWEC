//Creación de un array
let myArray = [4]
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray=[10,20,30]
console.log(myArray)

myArray=[3]
console.log(myArray)

myArray= new Array(3)
console.log(myArray)

myArray= [10,20,30,"Hola",true]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])

console.log(myArray.length)

//Métodos más comunes
myArray.push("Adiós") //añadir

console.log(myArray.pop()) //eliminar y mostrar el último
console.log(myArray)

console.log(myArray.shift()) //eliminar y mostrar el primero
console.log(myArray)

console.log(myArray.unshift("Primero")) //añadir al principio 
console.log(myArray)

//Borrar/ Eliminar
//myArray =[]
//myArray.length=0 //Muy sucio

myArray.splice(0,myArray.length) //Desde la posición 0, borrar n elementos (n=longitud del array)

//Subarrays





