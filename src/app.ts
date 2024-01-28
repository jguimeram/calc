const calc = document.querySelector('.calc') as HTMLDivElement
const log = function (param:any) {
    console.log(param)
 }

let right: number = 0
let left: number = 0
let operand:string = ""
 let token:string = ""

function joinnumbers(array:Array<number>) {
    return array.map(Number).reduce((prev, curr) => prev * 10 + curr)
}

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
            break;
    }

    return res

}





calc.addEventListener('click', (e) => {

    const target = e.target as HTMLElement
    let value:string = target.textContent as string
    if (target.classList.contains('button')) {

        if ((/\d+/).test(value)) {
        console.log('is a number')    
        } else if (/[+\-*/]/.test(value)){
            console.log('is an operand') 
        } else if (/[=]/.test(value)) {
            console.log('equal operand')
        }
    }
})















