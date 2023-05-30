let myName;
myName = "Afrodita";
    console.log(myName);

let age;
age = 30;
    console.log(age);

let isGreek = true;
    console.log(isGreek);

let num1 = 30;
let num2 = 15;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(2 * num1);
    console.log(num1 / num2);

const name = "Afrodita";
const nationality = "Greek";
console.log(`My name is ${name} and I am ${nationality}`);
console.log("My name is " + name + " and I am " + nationality);


function greeting(name){
    console.log("Hola ${name}.")
}

function addTwoNumbers(num1, num2) {
    return num1 + num2
}
addTwoNumbers(50,100)
    console.log(addTwoNumbers);

var number = prompt("20");
var result = checkOddEven(20);

function checkOddEven(number) {
    if(number % 2 == 0) {
        return "even";
      }
      else {
        return "odd";
      }
}
checkOddEven(20)
    console.log(checkOddEven);

let car = {
    brand: "Seat",
    model: "Ibiza",
    year: "2017",
    doors: 5,
    horsepower : {
        model1: 80,
        model2: 150
    }
}

function numberDoors() {
    let doors = car.doors
    let messageDoors = "The car has " + doors + " doors."
    console.log(messageDoors)
    document.write(messageDoors)
}

function brandCar() {
    let brandCar = car.brand
    let messageBrand = "The car brand is " +  brandCar.
    console.log(messageBrand);
    document.write(messageBrand) 
}

function chainingOperator() {
    let horsepower = car.horsepower.model1
    messageChaining = "This model car has " + horsepower + " horsepower ".
    document.write(chainingOperator)
    console.log(messagechaining) 
}
