let day = prompt("What day is Today");

switch (day.toLowerCase()) {
    case "monday":
        alert("Start of the work week!");
        break;
    case "tuesday":
        alert("Second day, keep going!");
        break;
    case "wednesday":
        alert("Hump day! Halfway there.");
        break;
    case "thursday":
        alert("Almost Friday!");
        break;
    case "friday":
        alert("TGIF! Time to relax.");
        break;
    case "saturday":
        alert("Weekend time!");
        break;
    case "sunday":
        alert("Relax and recharge for the week ahead.");
        break;
    default:
        alert("Invalid day of the week.");
}