"use strict"

    const firstNumber = prompt("Please enter the first number.");
    const secondNumber = prompt("Please enter the second number.");
    const enterOperator = prompt("Please enter the operator (you can use only the following ones: +, -, *, /, **).");
    
    let operationResult;        
                
                if (firstNumber != Number(firstNumber) || secondNumber != Number(secondNumber)){
                    operationResult = "Error! Please reload the page and enter the correct numbers.";

                } else if (enterOperator === "+"){
                    operationResult = Number(firstNumber) + Number(secondNumber);
                    
                } else if (enterOperator === "-"){
                    operationResult = firstNumber - secondNumber;
                    
                } else if (enterOperator === "*"){
                    operationResult = firstNumber * secondNumber;
                    
                } else if (enterOperator === "/"){
                    operationResult = firstNumber / secondNumber;
                    
                } else if (enterOperator === "**"){
                    operationResult = firstNumber ** secondNumber;
                    
                } else if (enterOperator === "OMG"){

                    const resultCalculation = (Math.round(firstNumber) < Math.round(secondNumber)) ? Math.round(secondNumber) :
                    (Math.round(secondNumber) < 1) ? "Error! The secoond number you entered is lower than 1." :
                    (Math.round(Math.round(firstNumber) / Math.round(secondNumber)))*Math.round(secondNumber);

                    operationResult = resultCalculation;

                }else {
                    operationResult = "Error! You entered invalid operator. Please reload the page and start again";
                }
                    console.log(operationResult);