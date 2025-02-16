// Get the first number from the user (as a string) and convert it to a Number.
let num1 = Number(prompt("Enter first number"));

// Get the operator from the user (as a string).
let op = prompt("Enter operation like + , - , * , / ,** ,% ");

// Get the second number from the user (as a string) and convert it to a Number.
let num2 = Number(prompt("Enter second number"));

// Input validation: Check if the numbers are valid (not NaN).
if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid Numbers");
}
// Input validation: Check if the operator is valid (not null or empty).
else if (op === null || op.trim() === "") {
    alert("Invalid Operation");
} else {
    let result; // Variable to store the calculation result.
    
    // Perform the calculation based on the operator.
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
            if (num2 === 0) { // Check for division by zero.
                alert("Undefined , Can't divide by Zero");
            } else {
                result = num1 / num2;
            }
            break;
        case "**": // Exponentiation.
            result = num1 ** num2;
            break;
        case "%": // Modulus (remainder).
            result = num1 % num2;
            break;
        default: // Invalid operator.
            alert("Invalid Operation. Please enter one of the following: +, -, *, /, **, %");
    }
    
    // Display the result only if it's a valid number (not NaN).
    if (!isNaN(result)) {
        alert("Answer is : " + result);
    }
}
