// Calculator state
let currentInput = '0';
let previousInput = '';
let operation = null;
let memory = 0;
let waitingForOperand = false;

// DOM elements
const currentDisplay = document.getElementById('current');
const historyDisplay = document.getElementById('history');

// Constants
const PI = Math.PI;
const E = Math.E;

// Initialize calculator
function init() {
    updateDisplay();
}

// Update display
function updateDisplay() {
    currentDisplay.textContent = currentInput;
    historyDisplay.textContent = previousInput;
}

// Append number to current input
function appendNumber(number) {
    if (waitingForOperand) {
        currentInput = number;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

// Append operator
function appendOperator(operator) {
    const inputValue = parseFloat(currentInput);

    if (previousInput === '' && isNaN(inputValue)) {
        return;
    }

    if (previousInput !== '') {
        calculate();
    }

    operation = operator;
    previousInput = currentInput + ' ' + operator;
    waitingForOperand = true;
    updateDisplay();
}

// Main calculation function
function calculate(scientificFunction = null) {
    const inputValue = parseFloat(currentInput);

    if (scientificFunction) {
        // Handle scientific functions
        let result;
        
        switch (scientificFunction) {
            case 'sin':
                result = Math.sin(inputValue * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(inputValue * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(inputValue * Math.PI / 180);
                break;
            case 'asin':
                result = Math.asin(inputValue) * 180 / Math.PI;
                break;
            case 'acos':
                result = Math.acos(inputValue) * 180 / Math.PI;
                break;
            case 'atan':
                result = Math.atan(inputValue) * 180 / Math.PI;
                break;
            case 'log':
                result = Math.log10(inputValue);
                break;
            case 'ln':
                result = Math.log(inputValue);
                break;
            case 'sqrt':
                result = Math.sqrt(inputValue);
                break;
            case 'pow':
                if (previousInput !== '') {
                    const prevValue = parseFloat(previousInput);
                    result = Math.pow(prevValue, inputValue);
                    previousInput = '';
                } else {
                    result = inputValue;
                }
                break;
            case 'factorial':
                result = factorial(inputValue);
                break;
            case 'exp':
                result = Math.exp(inputValue);
                break;
            case 'abs':
                result = Math.abs(inputValue);
                break;
            case 'pi':
                result = PI;
                break;
            case 'e':
                result = E;
                break;
            default:
                return;
        }

        if (isNaN(result) || !isFinite(result)) {
            currentInput = 'Error';
        } else {
            currentInput = result.toString();
            if (currentInput.includes('.')) {
                currentInput = parseFloat(result).toFixed(8).replace(/\.?0+$/, '');
            }
        }
        updateDisplay();
        return;
    }

    // Handle standard operations
    if (previousInput === '' || isNaN(inputValue)) {
        return;
    }

    const previousValue = parseFloat(previousInput);
    let result;

    switch (operation) {
        case '+':
            result = previousValue + inputValue;
            break;
        case '-':
            result = previousValue - inputValue;
            break;
        case '*':
            result = previousValue * inputValue;
            break;
        case '/':
            if (inputValue === 0) {
                currentInput = 'Error';
                updateDisplay();
                return;
            }
            result = previousValue / inputValue;
            break;
        case '%':
            result = previousValue % inputValue;
            break;
        default:
            return;
    }

    if (isNaN(result) || !isFinite(result)) {
        currentInput = 'Error';
    } else {
        currentInput = result.toString();
        if (currentInput.includes('.')) {
            currentInput = parseFloat(result).toFixed(8).replace(/\.?0+$/, '');
        }
    }

    operation = null;
    previousInput = '';
    waitingForOperand = true;
    updateDisplay();
}

// Factorial function
function factorial(n) {
    if (n < 0 || n !== Math.floor(n)) {
        return NaN;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Clear functions
function clearAll() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    waitingForOperand = false;
    updateDisplay();
}

function clearCurrent() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// Memory functions
function memoryStore() {
    const inputValue = parseFloat(currentInput);
    if (!isNaN(inputValue)) {
        memory = inputValue;
    }
}

function memoryRecall() {
    currentInput = memory.toString();
    waitingForOperand = false;
    updateDisplay();
}

function memoryAdd() {
    const inputValue = parseFloat(currentInput);
    if (!isNaN(inputValue)) {
        memory += inputValue;
    }
}

function memoryClear() {
    memory = 0;
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-') {
        appendOperator(key);
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === '%') {
        appendOperator('%');
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        clearCurrent();
    } else if (key === '(' || key === ')') {
        appendOperator(key);
    }
});

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', init); 