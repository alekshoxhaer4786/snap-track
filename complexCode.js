// Filename: complexCode.js
// Description: Complex code demonstrating advanced JavaScript concepts

(function() {
  "use strict";

  // Global variables
  const PI = 3.14159;
  let counter = 0;

  // Class representing a Shape
  class Shape {
    constructor(name) {
      this.name = name;
    }

    // Method to get shape's name
    getName() {
      return this.name;
    }

    // Abstract method to calculate perimeter
    calculatePerimeter() {
      throw new Error("Method not implemented!");
    }
  }

  // Class representing a Circle, derived from Shape
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }

    // Override Shape's calculatePerimeter method
    calculatePerimeter() {
      return 2 * PI * this.radius;
    }
  }

  // Class representing a Rectangle, derived from Shape
  class Rectangle extends Shape {
    constructor(width, height) {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }

    // Override Shape's calculatePerimeter method
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }

  // Function to calculate factorial recursively
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  // Function to generate Fibonacci sequence up to a given number
  function generateFibonacciSequence(limit) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= limit) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    return fibonacci;
  }

  // Function to simulate a heavy computation
  function simulateComputation() {
    for (let i = 0; i < 100000000; i++) {
      counter++;
    }
  }

  // Main function
  function main() {
    console.log("Starting complex code execution...");

    // Create instances of shapes
    const circle = new Circle(5);
    const rectangle = new Rectangle(7, 3);

    // Calculate and display shape perimeters
    console.log(`Perimeter of ${circle.getName()}: ${circle.calculatePerimeter()}`);
    console.log(`Perimeter of ${rectangle.getName()}: ${rectangle.calculatePerimeter()}`);

    // Calculate factorial and check if a number is prime
    console.log(`Factorial of 5: ${factorial(5)}`);
    console.log(`23 is prime? ${isPrime(23)}`);

    // Generate Fibonacci sequence up to 50
    console.log(`Fibonacci sequence up to 50: ${generateFibonacciSequence(50)}`);

    // Simulate heavy computation
    console.log("Simulating a heavy computation...");
    simulateComputation();
    console.log("Heavy computation finished!");

    console.log("Complex code execution completed.");
  }

  // Invoke the main function
  main();
})();