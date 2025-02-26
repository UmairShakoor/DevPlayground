let age = prompt("Enter your real Age in numbers");
if (age === null || age.trim() === "" || isNaN(Number(age)) || Number(age) < 10 || Number(age) > 66){
    alert("Invalid input. Please enter a valid age between 10 and 66.");
}
else { 
    age = Number(age);
    if (age < 17){
    alert("You are too young to drive");
}
else if (age <= 50){
    alert("You can drive");
}
else if (age <= 66) {
    alert("You are of an age where driving might not be advisable.");
}
else {
    alert("You can't drive");
}
}
