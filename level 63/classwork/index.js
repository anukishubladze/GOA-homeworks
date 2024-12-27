document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const addBtn = document.getElementById('addBtn');
    const subtractBtn = document.getElementById('subtractBtn');
    const resetBtn = document.getElementById('resetBtn');
    const addInput = document.getElementById('addInput');
    const subtractInput = document.getElementById('subtractInput');

    let count = 0;

    const updateDisplay = () => {
        counter.textContent = count;
    };

    const validateInput = (input) => {
        const value = Number(input.value);
        if (isNaN(value) || value < 1) {
            input.value = 1;
            return 1;
        }
        return value;
    };

    addBtn.addEventListener('click', () => {
        const value = validateInput(addInput);
        count += value;
        updateDisplay();
    });

    subtractBtn.addEventListener('click', () => {
        const value = validateInput(subtractInput);
        count -= value;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    addInput.addEventListener('input', () => validateInput(addInput));
    subtractInput.addEventListener('input', () => validateInput(subtractInput));
});