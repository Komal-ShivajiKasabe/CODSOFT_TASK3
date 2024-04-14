
const currentOperationScreen = document.getElementById('currentOperationScreen');
const buttons = document.querySelectorAll('button');
let currentOperation = '';
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
    if (value === 'C') {
       clear();
    } else if (value === '=') {
        try {
            currentOperation = eval(currentOperation).toString();
        } catch (error) {
            currentOperation = 'Error';
        }
    } else {
        currentOperation += value;
    }
    currentOperationScreen.textContent = currentOperation;
}