"use strict";
const calc = document.querySelector('.calc');
const log = function (param) {
    console.log(param);
};
let right = 0;
let left = 0;
let operand = "";
let token = "";
function joinnumbers(array) {
    return array.map(Number).reduce((prev, curr) => prev * 10 + curr);
}
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
            break;
    }
    return res;
}
calc.addEventListener('click', (e) => {
    const target = e.target;
    let value = target.textContent;
    if (target.classList.contains('button')) {
        if ((/\d+/).test(value)) {
            console.log('is a number');
        }
        else if (/[+\-*/]/.test(value)) {
            console.log('is an operand');
        }
        else if (/[=]/.test(value)) {
            console.log('equal operand');
        }
    }
});
