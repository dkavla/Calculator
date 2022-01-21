
/* Basic operations for Calculator */
let add = (numOne, numTwo) => {
    return numOne + numTwo;
};

let subtract = (numOne, numTwo) => {
    return numOne - numTwo;
};

let multiply = (numOne, numTwo) => {
    return numOne * numTwo;
};

let divide = (numOne, numTwo) => {
    if(numTwo === 0){
        return "Error: Division By Zero";
    }
    return numOne / numTwo;
};

let operate = (operation, operandOne, operandTwo) => {
    if(operation === "+"){
        let total = add(operandOne, operandTwo);
        return total;
    }else if(operation === "-"){
        let difference = subtract(operandOne, operandTwo);
        return difference;
    }else if(operation === "*"){
        let product = multiply(operandOne, operandTwo);
        return product;
    }else if(operation === "/"){
        let quotient = divide(operandOne, operandTwo);
        return quotient;
    }
}

/* Functions called based on the button pressed */
let printValue = (digit) => {
    let value = parseInt(digit.innerText);
    console.log(digit);
} 



/* Select necessary buttons and the display */
let value = "" // holds the digit inputs for the user
let currentOperator = ""; // tracks current operator
let numsEntered = []; // if length is 2 perform operation and display result


const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear');
const decimal = 

/* operation buttons */
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');


// adds digit text into value string
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(value.length > 14) {
            value += digit.innerText;
        }else{
            value += digit.innerText;
            display.textContent = value;
        }
    });
});

clear.addEventListener('click', () => {
    display.textContent = 0;
    value = " ";
});


addition.addEventListener('click', () => {
    /* Invariants
        * If value is "", add 0 to numsEntered
        * If value is not "", then add the number aprsed as an integer

        * After adding the previous number
    */
    currentOperator = "+";
    if(value === ""){
        numsEntered.push(parseFloat(0));
        value = "";
    }else{
        numsEntered.push(parseFloat(value));
        value = "";
    }

});