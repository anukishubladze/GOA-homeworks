//Write a program that asks the user to input two numbers and outputs their product. If the user enters 'exit' after the operation, then exit the program, otherwise continue until the user enters 'exit'.
while (true) {
    // Get first number
    let num1 = prompt("Enter first number:");
    if (num1?.toLowerCase() === 'exit') {
        break;
    }
    num1 = parseFloat(num1);

    // Check if num1 is valid
    if (isNaN(num1)) {
        alert("Please enter a valid number!");
        continue;
    }

    // Get second number
    let num2 = prompt("Enter second number:");
    if (num2?.toLowerCase() === 'exit') {
        break;
    }
    num2 = parseFloat(num2);

    // Check if num2 is valid
    if (isNaN(num2)) {
        alert("Please enter a valid number!");
        continue;
    }

    // Calculate and show product
    let product = num1 * num2;
    alert(`The product is: ${product}`);

    // Ask to continue
    let choice = prompt("Type 'exit' to quit or press Enter to continue:");
    if (choice?.toLowerCase() === 'exit') {
        break;
    }
}
