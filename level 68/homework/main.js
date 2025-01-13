const correctPassword = "12348765";

while (true) {
    let userInput = prompt("Please enter the password:");
    
    if (userInput === correctPassword) {
        alert("Correct password! Access granted.");
        break;
    } else {
        alert("Incorrect password. Please try again.");
    }
}




//



const correctPassword = "12348765";
const maxAttempts = 3;
let attempts = 0;

while (attempts < maxAttempts) {
    let userInput = prompt(`Please enter the password (${maxAttempts - attempts} attempts remaining):`);
    attempts++;
    
    if (userInput === correctPassword) {
        alert("Correct password! Access granted.");
        break;
    } else if (attempts === maxAttempts) {
        alert("No more attempts remaining. Access denied.");
    } else {
        alert("Incorrect password. Please try again.");
    }
}