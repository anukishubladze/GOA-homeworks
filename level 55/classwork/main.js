
const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.";

// Check if password contains only valid characters using a double for loop
for (let i = 0; i < password.length; i++) {
  let isValid = false;
  for (let j = 0; j < validChars.length; j++) {
    if (password[i] === validChars[j]) {
      isValid = true;
      break; // If the character is found, no need to check further for this character
    }
  }
  if (isValid) {
    message.style.color = "#8b1c00";
    message.textContent = "Password must only contain numbers, letters, -, . or ";
    return;
  }
}

// If the password is valid, display a success message
message.style.color = "#eee8a9";
message.textContent = "Password Saved";