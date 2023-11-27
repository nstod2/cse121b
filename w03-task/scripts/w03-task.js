/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);

}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

subtract = function (number1, number2) {

    return number1 - number2;

}

subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

multiply = (factor1, factor2) => factor1 * factor2;

multiplyNumbers = () => {
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {

    return dividend / divisor;

}

function divideNumbers() {

    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function discountTotal() {

    let subtotal = Number(document.querySelector('#subtotal').value);

    if (document.querySelector('#member').checked) {

        discount = subtotal * .15;

    } else {
        discount = 0;
    }

    subtotal -= discount;
    subtotal = subtotal.toFixed(2);

    document.querySelector('#total').innerHTML = `<span>$${subtotal}</span>`

}

document.querySelector('#getTotal').addEventListener('click', discountTotal);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = arrayNums;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = arrayNums.filter(function (num) {
    return num % 2 === 1;
})

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = arrayNums.filter(function (num) {
    return num % 2 === 0;
})

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = arrayNums.reduce( function (total, num) {
    return total + num;
})

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = arrayNums.map(function (num){
    return num * 2;
})

/* Output Sum of Multiplied by 2 Array */

let byTwo = arrayNums.map(function (num) {
    return num * 2;
})

document.querySelector('#sumOfMultiplied').innerHTML = byTwo.reduce( function (total, num) {
    return total + num;
})
