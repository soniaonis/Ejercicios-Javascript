//Variables: crear variables de diferentes tipos de datos (número, cadena de texto, booleano) e imprimir su valor por la pantalla del navegador y la consola.
//Número
let varNumber1 = 30;
let varNumber2 = 15;
document.write(varNumber1 + "<br>");
console.log(varNumber1);
document.write(varNumber2 + "<br>");
console.log(varNumber2);

//Cadena de texto o string
let varText = "Hello World!";
document.write(varText + "<br>");
console.log(varText);

//Boolean
let varTodayIsSunny = true;
console.log(varTodayIsSunny);
document.write("Today is sunny: " + varTodayIsSunny + "<br>");
console.log("Today is sunny:", varTodayIsSunny);

//De las variables anteriores, identifica las de tipo integer y realiza operaciones matemáticas básicas.
//Suma
let varSuma = varNumber1 + varNumber2;
document.write(varSuma + "<br>");
console.log(varSuma);

//Resta
let varResta = varNumber1 - varNumber2;
document.write(varResta + "<br>");
console.log(varResta);

//Multiplicación
let varProducto = varNumber1 * varNumber2;
document.write(varProducto + "<br>");
console.log(varProducto);

//División
let varDivision = varNumber1 / varNumber2;
document.write(varDivision + "<br>");
console.log(varDivision);

//De las variables anteriores, identifica las que son de tipo texto y concatena dichas cadenas de texto
let extraText = " How are things going?";
let concatenacion = varText + extraText;
document.write(concatenacion + "<br>");
console.log(concatenacion);

//FUNCIONES
//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre.
let varnombre = "Atenea";
function saludo(nombre) {
    let mensaje = "Hola, " + varnombre;
    return mensaje;
}
console.log(saludo(varnombre));
document.write(saludo(varnombre) + "<br>")

//Crear una función que reciba como parámetros dos números y que devuelva la suma de ellos. 
function addNumbers (num1, num2) {
    let addition = num1 + num2;
    document.write("Result of addition: " + addition + "<br>");
    console.log("Result of addition: ", addition);
    return addition;
  }
  addNumbers(13, 17);

//Crear función que determine si un número es par o impar.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      let message = "Number " + number + " is even";
      document.write(message + "<br>");
      console.log(message);
    } else {
      let message = "Number " + number + " es odd";
      document.write(message + "<br>");
      console.log(message);
    }
  }
  checkEvenOdd(51);

//OBJETOS
//Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
let car = {
    brand: "Seat",
    model: "Ibiza",
    year: "2017",
    doors: "5",
    horsepower : {
        model1: "80",
        model2: "150",
    }
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.doors);
console.log(car.horsepower.model1);
console.log(car.horsepower.model2);

//Crear una función que devuelva la marca del carro.
function brandCar(){
  return car.brand;  
}
console.log(brandCar());
document.write(brandCar() + "<br>");

//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function numberDoors(){
    return car.doors;   
}
console.log(numberDoors());
document.write(numberDoors() + "<br>");

//Crear una función que devuelva un atributo del objeto anidado.
function horsepower(){
    return car.horsepower.model1; 
}
console.log(horsepower());
document.write(horsepower() + "<br>");
  
//ARRAYS
//Crear un array de 10 números
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
function arrayNumbers(numbers) {
  for(let i = 0; i <numbers.length; i++){
  console.log(numbers[i]); 
  } 
}
arrayNumbers(numbers);

//Revisar
//Crear una función que añada un número al array
function addNumber(arrayNumbers, number) {
  arrayNumbers.push(number);
  return arrayNumbers.push(number);
}
addNumber(arrayNumbers, 15);
console.log(arrayNumbers);

//Crear una función que elimine los números pares de ese array.
function deleteEvenNumbers (arrayNumbers) {
  for (let i = 0; i <= arrayNumbers.length; i++) {
    if(numbers[i] % 2 == 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
arrayNumbers = deleteEvenNumbers(arrayNumbers);
console.log(arrayNumbers);

//Crear una función que devuelva el número mayor de un array.
function biggerNumber(numbers) {
  return Math.max(numbers);
}
console.log(biggerNumber());

//Crear una función que devuelva el número menor de un array.
function minorNumber(numbers) {
  return Math.min(numbers);
}
console.log(minorNumber());

//Crear un función que convierta en minúsculas todas las letras de un texto.
let text = "A RELAXED MIND is a creative mind";

function upperCase (text) {
  return text.toUpperCase();
}
console.log(upperCase(text));

//Crear una función que convierta en mayúsculas todas las letras de un texto.
function lowerCase (text) {
  return text.toLowerCase();
}
console.log(lowerCase(text));

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let arrayNames = ["afrodita", "artemisa", "atenea", "hestia", "hera"];

function InitialCapitalLetter (arrayNames) {
  let mamesCapitalLetter = [];
  for (let i = 0; i < arrayNames.length; i++) {
    let name = arrayNames[i];
  }
}
//Revisar


//MANIPULACIÓN DEL DOM
//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
function showMessage() {
  alert ("Hello dear customer!");
}


//Cambiar el contenido de un elemento HTML mediante JavaScript.

//Ocultar y mostrar elementos HTML utilizando JavaScript.

//Crear un array de 10 nombres.
let arrayNames = ["Marta", "Emmma", "Carlos", "Arantxa", "Ivana", "Daniel", "César", "Vanessa", "Marco", "Flor"];

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

//Crear un array de números.
let numbersArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Crear una función que pinte en pantalla cuántos números tiene el array de números.
function numbersLength() {
  
}
//Crea los nodos necesarios para imprimir un formulario.
//Crea los nodos necesarios para imprimir una tabla.
//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes Keys: id, name, status, species, type, gender. El value de cada key lo asignas tú
//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.



