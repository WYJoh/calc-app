import { Calculator } from "./calc.js"

let calc = new Calculator();

document.getElementById("calculate").addEventListener('click', function() {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    // parseFloat or Number
    let operation = document.getElementById('operation').value;

    console.log(input1);
    console.log(operation);
    console.log(input2);

    //TODO calculate all outputs
    let output = 0;
    if (operation == "+") {
        output = calc.add(input1, input2);
    }
    else if (operation == "-") {
        output = calc.subtract(input1, input2);
    }
    else if (operation == "*") {
        output = calc.multiply(input1, input2);
    }
    else if (operation == "/") {
        output = calc.divide(input1, input2);
    }
    else {
        output = "ERROR";
    }
    document.getElementById("output").innerText = output;

});