const calc = document.querySelector('.calc')
let token = []
let left = 0
let right
let res
let operand = ""
calc.addEventListener('click', (e) => {

    let value = e.target.textContent
    if (e.target.classList.contains('button')) {

        if (isNaN(value)) {
            /* operator */
            /* 1: join numbers => 4, 5, 3 => 453 */
            if (res == undefined) res = token.map(Number).reduce((prev, curr) => prev * 10 + curr)
            else right = token.map(Number).reduce((prev, curr) => prev * 10 + curr)
            console.log(`value: ${value}`);

            if (value != '=') operand = value
            else {
                switch (operand) {
                    case '+':
                        console.log(res + right)
                        break;
                    case '-':
                        console.log(res - right)
                        break;
                    case '*':
                        console.log(res * right)
                        break;
                    case '/':
                        console.log(res / right)
                        break;
                    default:
                        console.log("urmom")
                        break;
                }
            }

            token = []
        } else {
            /* add numbers to array if value is not an operand */
            value = parseInt(value)
            token.push(e.target.textContent)
            //console.log(token);
        }


    }
})

/* 
    console.log(`res: ${res}`);
    console.log(`right: ${right}`);
    console.log(`operand: ${operand}`);
    
*/













