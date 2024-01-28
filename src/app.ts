const calc = document.querySelector('.calc') as HTMLDivElement
const log = function (param:any) {
    console.log(param)
 }

let right: number = 0
let left: number = 0
let operand:string = ""
let token: string = ""


function add(left:number, right:number):number {
    return left + right
}
function sub(left:number, right:number):number {
    return left - right
}
function mult(left:number, right:number):number {
    return left * right
}
function div(left:number, right:number):number {
    return left / right
}

function calculate(operand: string):number {
    let res:number = 0
    
    switch (operand) {
        case '+':
            res = add(left, right)
            break;
        case '-':
            res = sub(left, right)
            break;
        case '*':
            res = mult(left, right)
            break;
        case '/':
            res = div(left, right)
            break;
        default:
            log("urmom")
            break;
    }

    return res

}

function tokenize(values: Array<string>): void {

    let num: number = 0
    let operand: string = ""

    values.forEach(function(value, key, values){
        
        if ((/\d+/).test(value)) {

            num = (num * 10 + parseInt(value))  

        } else if (/[+\-*/]/.test(value)) {

           
        } else if (/[=]/.test(value)) {    

        }
    })
     
}



const stack:Array<string> = []

calc.addEventListener('click', (e) => {

    const target = e.target as HTMLElement
    let value:string = target.textContent as string
    if (target.classList.contains('button')) {
        stack.push(value)
        if (value === "=") tokenize(stack)
        
    }
})















