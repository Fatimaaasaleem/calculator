

Simple Calculator

This is a simple calculator web application built using JavaScript, HTML, and CSS. The calculator can perform basic arithmetic operations including addition, subtraction, multiplication, and division.

Features

Basic Arithmetic: Supports addition, subtraction, multiplication, and division.

Keyboard Input: Users can input numbers and select operations by clicking buttons.

Error Handling: Displays "lmao" for division by zero.

Clear Screen: A button to clear the screen and reset the values.


How to Use

1. Enter the first number by clicking on the number buttons.


2. Select an operation (+, -, X, /) by clicking the corresponding operation button.


3. Enter the second number.


4. Press the = button to see the result.


5. Press the C button to clear the screen and start over.



Files

index.html: Contains the structure of the calculator.

styles.css: Contains the styles for the calculator layout.

script.js: Contains the JavaScript logic for the calculator operations.


JavaScript Logic

The JavaScript (script.js) manages the following:

First and Second Value Handling: Keeps track of the values entered by the user.

Operation Handling: Stores the selected operation (+, -, X, /).

Equal Button: Computes the result when the equal (=) button is pressed.

Division by Zero: If a user attempts to divide by zero, the screen displays "lmao" instead of a numerical result.

Clear Functionality: The clear button resets all values and clears the screen.


Error Handling

Division by Zero: When the division operation is performed with the second value as 0, the calculator displays "lmao" on the screen.


Example

Input: 8, +, 2, = → Output: 10

Input: 5, /, 0, = → Output: lmao



---

Setup and Installation

1. Clone this repository to your local machine.


2. Open index.html in your web browser.


3. Use the calculator interface by clicking on the buttons.



Future Enhancements

Implement more advanced mathematical operations (e.g., square root, exponentiation).

Improve the UI with additional styling.

Add support for keyboard input.



---

License

This project is open-source and can be freely used and modified.
