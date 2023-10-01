/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1+number2;
}
function addNumber() {

    
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value=add(number1,number2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1-number2;
}
function subtractNumber() {

    
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value=subtract(number1,number2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumber);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) {
    return number1*number2;
}

function multiplyNumber() {

    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value=multiply(number1,number2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumber)

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1/number2;
}

function divideNumber() {

    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value=divide(number1,number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumber)

/* Decision Structure */
const currentDate = new Date();

let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray =[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfOriginalNumber = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfOriginalNumber.toString();

/* Output Multiplied by 2 Array */
const multipliedBy2 = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedBy2.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumMultipliedBy2 = numbersArray.map(number => number * 2);
const sumOfMultiplied = sumMultipliedBy2.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied.toString();