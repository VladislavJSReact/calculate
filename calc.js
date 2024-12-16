// Простейший калькулятор
function calculate(operation, num1, num2) {
    switch(operation) {
        case 'add':
            return num1 + num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}

// Примеры использования калькулятора
console.log(calculate('add', 5, 3));       // Результат: 8
console.log(calculate('subtract', 5, 3));  // Результат: 2
console.log(calculate('multiply', 5, 3));  // Результат: 15
console.log(calculate('divide', 6, 3));    // Результат: 2