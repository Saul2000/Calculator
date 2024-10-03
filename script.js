
const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML)); //Al hacer click en el numero de la Calculadora se agrega al Display
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});