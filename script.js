let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");
let buttons = document.querySelectorAll(".button");
let operations = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");

let firstValue = "";
let secondValue = "";
let operationValue = "";
let waitingForSecondValue = false;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonValue = this.value;
        console.log(buttonValue);

        if (waitingForSecondValue) {
            secondValue += buttonValue;
            screen.innerHTML += buttonValue;
        } else {
            firstValue += buttonValue;
            screen.innerHTML += buttonValue;
        }
    });
});

operations.forEach(operation => {
    operation.addEventListener("click", function () {
        operationValue = this.value;
        console.log(operationValue);
        screen.innerHTML += operationValue;
        waitingForSecondValue = true;
    });
});

equal.addEventListener("click", () => {
    let result;
    if (operationValue === "+") {
        result = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operationValue === "-") {
        result = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operationValue === "/") {
        result = parseFloat(firstValue) / parseFloat(secondValue);
    } else if (operationValue === "X") {
        result = parseFloat(firstValue) * parseFloat(secondValue);
    }

    if (operationValue === "/" && parseFloat(secondValue) === 0) {
        screen.innerHTML = "lmao";  
    } else {
        screen.innerHTML = result;
        console.log("Result:", result);
    }

    firstValue = "";
    secondValue = "";
    operationValue = "";
    waitingForSecondValue = false;
});

clear.addEventListener("click", function () {
    screen.innerHTML = "";
    firstValue = "";
    secondValue = "";
    operationValue = "";
    waitingForSecondValue = false;
});
