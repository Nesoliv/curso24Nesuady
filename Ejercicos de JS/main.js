console.log("Hola, mundo")

let firstName = "Paola"
console.log("Nace too meet you: ", firstName)

let x = 5
let y = 3 
console.log("La suma entre x + y es igual a ", x + y)

x = 3.5
console.log("la suma entre x + y es", x + y)

let z
console.log("Tipo de dato no definido", z)

console.log("Hola, mi nombres es " + firstName + "I am ", x + "años")
console.log(`Hola, mi nombres es ${firstName} I am ${y} años`)

// Operadores aritmeticos 

let a = 5 
let b = 4
console.log("la suma de a + b es ", a + b)

a++
console.log("Ahora a equivale a:", a)

a = a + 1
console.log("Ahora equivale a: ", a)

let c = 10 
let d = 4
console.log("c y d son iguales", c == d)

console.log("c y d son diferentes", c != d)

// 1. Create two variables, assign them numeric values, and print their multiplication result.
// 2. Create a variable to store your age and print a message using template literals that includes your age.
// 3. Create three boolean variables and use logical operators to print the result of, at least, two different conditions.
// 4. Create a little script that initialize a numeric variable, then increment it by 1, and finally, compare it with the value of pi (3.14).

//Ejercicio 1

let numA = 32
let numB = 2
console.log("La multiplicación entre numA + numbB es: ", numA * numB)

//Ejercicio 2 
let miEdad = 23;
console.log(`Mi edad es ${miEdad} años`);

//Ejercicio 3 
let tengoQueSalir = true;
let tengoGanas = false;
let deboSalir = true
console.log(`Debo salir ${(tengoQueSalir || tengoGanas) && deboSalir}`)
