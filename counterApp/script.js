let counter = 0;

const counterDisplay = document.getElementById('counterValue');
const incrementButton = document.getElementById('btnIncrementor');
const decrementButton = document.getElementById('btnDecrementor');
const resetButton = document.getElementById('btnReset');

function updateCounter() {
    counterDisplay.textContent = counter;
}

incrementButton.addEventListener('click', () => {
    if(counter < 10) {
        counter++;
        updateCounter();
    }
});


decrementButton.addEventListener('click', () => {
    if(counter > 0) {
        counter--;
        updateCounter();
    }
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

updateCounter();