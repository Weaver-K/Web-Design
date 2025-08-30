let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(a, b, operator));