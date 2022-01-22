let inputs = [] // stores all thats been input so far
// let newNumberStarted = false;
let answerActive = false;
let expression = "0";
let displayValue = "0";

const prevDisplay = document.querySelector('.previous-display');
const currentDisplay = document.querySelector('.current-display');

const decimalPoint = document.querySelector('.decimal');
decimalPoint.addEventListener('click', () => {
    displayValue += ".";
    currentDisplay.textContent = displayValue;
});

const signs = document.querySelector('.sign');
signs.addEventListener('click', () => {
    displayValue = (parseFloat(displayValue) * -1).toString();
    currentDisplay.textContent = displayValue;
})

const percentage = document.querySelector('.percent');
percentage.addEventListener('click', () => {
    displayValue = (parseFloat(displayValue) / 100).toString();
    if(displayValue.length >= 10){
        displayValue = roundLargeDecimal(parseFloat(displayValue)).toString();
    }
    currentDisplay.textContent = displayValue;
});

let roundLargeDecimal = (value) => {
    return Number(Math.round(value+'e'+ 2)+'e-'+ 2);
};

const operator = document.querySelectorAll('.operation');
/**
 * If the operator is "=" then the entire inputs array is evaluated as 
 * an expression and the result is display in the currentDisplay, while 
 * prevDisplay is reset to 0
 * 
 * If the operator is +,-,*, or / then it adds the currentDisplay to inputs
 * array and the operator is also added. the currentDisplay is reset to 0.
 *  */ 
operator.forEach(btn => {
    btn.addEventListener('click', () => {
        /**
         * If displayValue != 0, add result to input and rest to 0
         * 
         */

        if(btn.innerText == "="){
            inputs.push(parseFloat(displayValue));
            displayValue = equals();
            if(displayValue === undefined){
                currentDisplay.textContent = "Error"
            }else{
                currentDisplay.textContent = displayValue;
            }
            prevDisplay.textContent = "0";
            answerActive = true;
        }else{
            answerActive = false;
            inputs.push(parseFloat(displayValue));
            inputs.push(btn.innerText);
            prevDisplay.innerText = printToPrev();
            displayValue = "0";
            currentDisplay.textContent = displayValue;
        }

    });
});

/* Retreives all the digits and outputs them to the currentDisplay */
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        /* check if an answer is display */
        if(answerActive){
            displayValue = "0";
            expression = "0";
            currentDisplay.textContent = displayValue;
            prevDisplay.textContent = expression;
            answerActive = false;
            inputs = [];
        }

        if(displayValue == "0"){
            displayValue = digit.innerText;
            currentDisplay.textContent = displayValue;
        }else{
            displayValue += digit.innerText;
            currentDisplay.textContent = displayValue;
        }
    });
});

let equals = () => {
    currentOperator = "";
    result = inputs[0];
    for(let i = 1; i < inputs.length; i++){
        if(inputs[i] == "+" || inputs[i] == "-" || inputs[i] == "*"
            || inputs[i] == "/"){
                currentOperator = inputs[i];
                continue
        }else if(typeof inputs[i] == "number"){
            result = operate(currentOperator, result, inputs[i]);
            currentOperator = ""
        } 
    }
    return result;
}

/* returns the current state of expression in inputs */
let printToPrev = () => {
    output = "";
    for(let i = 0; i < inputs.length; i++){
        if(typeof inputs[i] == "number"){
            output += inputs[i].toString();
        }else{
            output += inputs[i]
        }
        output += " ";
    }
    return output;
}

const clear = document.querySelector('.clear');
/* Clears the currentDisplay and previousDisplay screen */
clear.addEventListener('click', () => {
    inputs = [];
    displayValue = "0";
    expression = "0";
    currentDisplay.textContent = displayValue;
    prevDisplay.textContent = expression;
});


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
        return undefined;
    }
    return numOne / numTwo;
};


/* Executes operation based on the passed in operator */
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



