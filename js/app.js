"use strict";
const calc = document.querySelector('.calc');
const log = function (param) {
    console.log(param);
};
let right = 0;
let left = 0;
let operand = "";
let token = "";
function add(left, right) {
    return left + right;
}
function sub(left, right) {
    return left - right;
}
function mult(left, right) {
    return left * right;
}
function div(left, right) {
    return left / right;
}
function calculate(operand) {
    let res = 0;
    switch (operand) {
        case '+':
            res = add(left, right);
            break;
        case '-':
            res = sub(left, right);
            break;
        case '*':
            res = mult(left, right);
            break;
        case '/':
            res = div(left, right);
            break;
        default:
            log("urmom");
            break;
    }
    return res;
}
function tokenize(values) {
    let num = 0;
    let operand = "";
    for (let value of values) {
        log(`value: ${value}`);
        if ((/\d+/).test(value)) {
            num = (num * 10 + parseInt(value));
        }
        else if (/[+\-*/]/.test(value)) {
            left = num;
            num = 0;
            operand = value;
            log(`left: ${left}`);
        }
        else if (/[=]/.test(value)) {
            right = num;
            log(`right: ${right}`);
            log(calculate(operand));
        }
    }
}
const stack = [];
calc.addEventListener('click', (e) => {
    const target = e.target;
    let value = target.textContent;
    if (target.classList.contains('button')) {
        stack.push(value);
        if (value === "=")
            tokenize(stack);
    }
});
