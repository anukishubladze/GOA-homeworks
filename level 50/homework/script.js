const buttonAddText = document.getElementById('AddText');
const buttonChangeColor = document.getElementById('ChangeColor');
const buttonChangeSize = document.getElementById('ChangeSize');
const inputText = document.getElementById('inputText');
const inputColor = document.getElementById('inputColor');
const inputSize = document.getElementById('inputSize');
const outputText = document.getElementById('outputText');
const toggleMode = document.getElementById('toggleMode');

// first button: Add Text
buttonAddText.addEventListener('click', () => {     
    outputText.textContent = inputText.value;
});

// second button: Change Color
buttonChangeColor.addEventListener('click', () => {
    const color = inputColor.value;
    outputText.style.color = color;
});

// third button: Change Size
//  $ used inside template literals to insert a variable (like size) into a string, with the string representing a CSS value
buttonChangeSize.addEventListener('click', () => {
    const size = inputSize.value;
    if (size) {
        outputText.style.fontSize = `${size}px`;  
    }
});

// light/dark mode toggle
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

