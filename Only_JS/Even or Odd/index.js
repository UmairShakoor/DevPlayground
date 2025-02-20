let number = prompt("Enter a number to check either it is Even or Odd?");

if (number === null || number.trim() === "" || isNaN(Number(number))){
    alert("Invalid Input. Please enter a number");
}
else{
    number = Number(number); // Convert to number *after* validation
    if ((number % 2) === 0) {
        alert(number + " is an Even Number");
    }
    else {
        alert(number + " is an Odd Number");
    }
}
