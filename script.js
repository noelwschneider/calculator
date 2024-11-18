let calculatorDisplayText = "";

// html elements
const calculatorDisplay = document.getElementById("calculator-display");
const numberBtns = document.querySelectorAll('#calculator #number-pad .number-btn');
const decimalBtn = document.getElementById("decimal-btn");

numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculatorDisplayText += btn.value;
        calculatorDisplay.value = calculatorDisplayText;
        decimalBtn.classList.remove('error', 'pending')
    });
});

decimalBtn.addEventListener('click', () => {
    if (calculatorDisplayText.endsWith('.')) {
        calculatorDisplayText = calculatorDisplayText.slice(0, -1);
        decimalBtn.classList.remove('pending');
    } else if (calculatorDisplayText.includes('.')) {
        decimalBtn.classList.add('error');
    } else {
        calculatorDisplayText += ".";
        decimalBtn.classList.add('pending');
    }
});
