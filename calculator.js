function calculate(num1, num2, operation) {
    let result;
  
    // Check for division by zero
    if (operation === "/" && num2 === 0) {
      return "Division by zero is not allowed";
    }
  
    // Perform the operation
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      result = num1 / num2;
    } else {
      return "Invalid operation";
    }
  
    // Return the result
    return `The result is ${result}`;
  }
  
  // Example calls
  console.log(calculate(5, 10, "+")); // Output: The result is 15
  console.log(calculate(5, 0, "/"));  // Output: Division by zero is not allowed
  console.log(calculate(5, 10, "x")); // Output: Invalid operation