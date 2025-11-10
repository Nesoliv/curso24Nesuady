/**
 * 1. Declare two variables, a = 10 and b = 3.
 * Calculate the remainder when a is divided by b and store it
 * in a variable called remainder.
 */

let a = 10;
let b = 3;
let remainder = a % b; 
console.log(`El modulo entre a y b es: ${remainder}`);

/**
 * 2. Declare a variable age = 25.
 * Write an expression using a comparison operator to check if age
 * is greater than or equal to 18. Store the result in a variable calle
 * isAdult.
 */

let age = 25 
let isAdult = age >= 18
console.log(`Es adulto: ${isAdult}`)

/**
 * 3. Declare a boolean variable isRaining = false.
 * Use the logical NOT operator (!) to reverse its value and store
 * the result in shouldStayInside.
 */

let isRaining = false
let shouldStayInside = isRaining
console.log(`Ejercicio 3 es: ${!shouldStayInside}`)

/**
 * 4. Declare a variable counter = 5. Use the post-increment operator (++)
 * once. What is the value of counter after the operation?
 */

let counter = 5 
counter++
console.log(`El valor de la operación es 6`)

/**
 * 5. A configuration setting is valid if its status is a boolean OR its level
 * is a number greater than 50. Declare status = null and level = 75. Write a
 * single expression to check the validity and store the boolean result in
 * isValidConfig
 */

let status = null;
let level = 75;
let isValidConfig;
console.log(`El tipo de dato de status es ${typeof status},
    la configuracion es valida: ${isValidConfig = status == Boolean || level > 50}
    `)

//Lo hice de dos formas porque la primera no me convence xD 

isValidConfig = (typeof status == 'boolean' || level > 50)
console.log(isValidConfig);
/**
 * 6. Calculate the result of the expression: (5 * 4) + (20 / 5) - 3
 * WITHOUT executing the script.
 * 
 * (5 * 4 = 20)
 * (20 / 5 = 4)
 * 20 + 4 = 24 
 * 24 - 3 = 21 
 * resultado: 21 
 */

/**
 * 7. Declare numString = "5" and numInt = 5. Compare them first using the
 * loose equality operator (==) and then using the strict equality operator
 * (===). Store the results in looseResult and strictResult.
 */

let numString = "5";
let numInt = 5;
let looseResult = numString == numInt;
let strictResult = numString === numInt;
console.log(`Igualdad flexible: ${looseResult}. Igualdad estricta ${strictResult}`)

/**
 * 8. Determine the final value of x after the following operations:
 * let x = 10;
 * x = x * 2 + 5 % 3;
 * x * 2 = 20
 * 5 % 3 = 2 
 * 20 + 2 = 22
 * Resultado = 22
 * 
 * WITHOUT executing the script.
 */
