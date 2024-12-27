let counter = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');

// ფუნქცია, რომელიც განაახლებს counter-ის მნიშვნელობას
function updateCounter() {
    counterElement.textContent = counter;
}

// მომატება
incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

// დაკლება
decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

// reset - ინიციალიზაცია 0-ზე
resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// გვერდის ლოდინისას ფუნქცია განაახლებს მნიშვნელობას
updateCounter();