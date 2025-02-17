let num1 = Number(prompt("Enter first number"));
let op = prompt("Enter operation like + , - , * , / ,** ,% ");
let num2 = Number(prompt("Enter second number"));

// Input Validation (Essential)
if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid Numbers.");
} 
else if (op === null || op.trim() === "") {
    alert("Invalid Operation");
} 
else {
    let result;
    let fault = Math.random();
    console.log(fault);
    if (fault < 0.1) {
        // Faulty Calculations (10% chance)
        switch (op) {
            case "+":
                result = num1 - num2; // Subtraction instead of addition
                break;
            case "-":
                if (num2 === 0) {
                    alert("Undefined, Can't divide by Zero");
                } else {
                    result = num1 / num2; // Division instead of subtraction
                }
                break;
            case "*":
                result = num1 + num2; // Addition instead of multiplication
                break;
            case "/":
                result = num1 ** num2; // Exponentiation instead of division
                break;
            case "**":
                result = num1 % num2; // Modulus instead of exponentiation
                break;
            case "%":
                result = num1 * num2; // Multiplication instead of modulus
                break;
            default:
                alert("Invalid Operation. Please enter one of the following: +, -, *, /, **, %");
        }
    } else {
        // Correct Calculations (90% chance)
        switch (op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("Undefined, Can't divide by Zero");
                } else {
                    result = num1 / num2;
                }
                break;
            case "**":
                result = num1 ** num2;
                break;
            case "%":
                result = num1 % num2;
                break;
            default:
                alert("Invalid Operation. Please enter one of the following: +, -, *, /, **, %");
        }
    }
    
    if (!isNaN(result)) {
        alert("Answer is : " + result);
    }
}
