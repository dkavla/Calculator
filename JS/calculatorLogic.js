
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



