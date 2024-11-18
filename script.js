let calculatorDisplayText = "";

// html elements
const calculatorDisplay = document.getElementById("calculator-display");
const numberBtns = document.querySelectorAll('#calculator #number-pad .number-btn');

numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculatorDisplayText += btn.value;
        calculatorDisplay.value = calculatorDisplayText;
    });
});

