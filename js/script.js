let integers = [5, 3]; // Example values
let operators = ['+', '-', '*', '/'] //classic calculation operators

function calculate(a, b, operator) { // Function to perform calculation based on operator   
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
            return null;
    }
}
console.log(calculate(integers[0], integers[1], operators[0])); // Example usage
