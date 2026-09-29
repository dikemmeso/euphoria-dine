let num1 = document.getElementById("num_1");
let num2 = document.getElementById("num_2");
let operator = document.getElementById("operator");
let output = document.querySelector(".output");
let btn = document.getElementById("submit");

btn.onclick = function () {
    let num1_val = num1.value;
    let num2_val = num2.value;
    let opt_val = operator.value;

    output.style = "display:none";

    if (num1_val == "") {
        alert("please alert num1 value");
    } else if (num2_val == "") {
        alert("please enter num2 value");
    } else if (opt_val == "") {
        alert("please choose an operator");
    } else {
        let calc = calcFunc(parseInt(num1_val), opt_val, parseInt(num2_val));

        output.textContent = `${num1_val} ${opt_val} ${num2_val}= ${calc}`;
        output.style = "display:block";
    }
};

function calcFunc(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return false;
            break;
    }
}
