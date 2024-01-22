const calc = document.querySelector('.calc')
let token = []
let right
let left = 0
let operand = ""

function joinNumbers(array) {
    return array.map(Number).reduce((prev, curr) => prev * 10 + curr)
}

function add(left, right) {
    return left + right
}
function sub(left, right) {
    return left - right
}
function mult(left, right) {
    return left * right
}
function div(left, right) {
    return left / right
}

function calculate(operand) {
    switch (operand) {
        case '+':
            return add(left, right)
        case '-':
            return sub(left, right)
        case '*':
            return mult(left, right)
        case '/':
            return div(left, right)
        default:
            break;
    }
}


calc.addEventListener('click', (e) => {

    let value = e.target.textContent
    if (e.target.classList.contains('button')) {


        if (isNaN(value)) {

            /* if it's not a number: */

            if (left === 0) {
                left = joinNumbers(token)
                console.log(left);
            }

            else {
                right = joinNumbers(token)
                console.log(right);
            }


            if (value === operand) {
                left = calculate(operand)
            }

            if (value != '=') operand = value

            else {
                let res = calculate(operand)
                console.log(res);
            }

            token = []
        } else {


            /* if is a number add to array*/
            value = parseInt(value)
            token.push(e.target.textContent);
        }


    }
})













