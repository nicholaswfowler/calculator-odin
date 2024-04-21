function add(x, y){
    return String(Number(x) + Number(y));
}

function subtract(x, y){
    return String(Number(x) - Number(y));
}

function multiply(x, y){
    return String(Number(x) * Number(y));
}

function divide(x, y){
    return String(Number(x) / Number(y));
}

function solveEquation(equationArr){
    let x = '';
    let y = '';
    let operator = '';
    if(equationArr.includes('+') && operator == ''){
        operator = '+';
    }
    else if(equationArr.includes('x') && operator == ''){
        operator = 'x';
    }
    else if(equationArr.includes('/') && operator == ''){
        operator = '/';
    }
    else if(equationArr.includes('-') && operator == ''){
        operator = '-';
    }
    console.log(operator);

    for(i = 0; i < equationArr.length; i++){
        if(i < equationArr.indexOf(operator)){
            x = x + equationArr[i]
        }
        else if(i == equationArr.indexOf(operator)){
            continue;
        }
        else{
            y = y + equationArr[i];
        }
    }
    if(operator == '+')return add(x,y);
    if(operator == '-')return subtract(x,y);
    if(operator == 'x')return multiply(x,y);
    if(operator == '/')return divide(x,y);
}

const numpad = document.querySelector("#numpad");
let equationArr = [];

function numberButton(num){
    let number = document.createElement("button");
    number.setAttribute('style', 'width: 20%; margin: 1.5%;')
    number.textContent = `${num}`;
    number.style.fontSize = '24px';

    const display = document.querySelector("#display");
    number.addEventListener("click", () => {
        if((num == '+' || num == 'x' || num == '/') && (equationArr[equationArr.length - 1] == '+' || equationArr[equationArr.length - 1] == '-' || equationArr[equationArr.length - 1] == 'x' || equationArr[equationArr.length - 1] == '/')){
                alert('Cannot have 2 operators in a row. Enter a number.')
            }
        
        else if(num == '-' && equationArr[equationArr.length - 1] == '-' && equationArr[equationArr.length - 2] == '-'){
            alert('Cannot have 2 operators in a row. Enter a number.')

        }    

        else if(num != '='){
            display.textContent = display.textContent + num; 
            if((num == '+' || num == '-' || num == 'x' || num == '/') && (equationArr.includes('+') || equationArr.includes('-') || equationArr.includes('x') || equationArr.includes('/'))){
                if(equationArr[equationArr.length - 1] != '+' && equationArr[equationArr.length - 1] != '-' && equationArr[equationArr.length - 1] != 'x' && equationArr[equationArr.length - 1] != '/'){
                    let answer = solveEquation(equationArr);
                    equationArr = [];
                    equationArr.push(answer);
                    display.textContent = answer + num;
                }
                    
            }
            equationArr.push(num);
            console.log(equationArr);
        }
        else{
            if(equationArr.includes('+') || equationArr.includes('-') || equationArr.includes('x') || equationArr.includes('/')){
                let answer = solveEquation(equationArr);
                equationArr = [];
                equationArr.push(answer);
                display.textContent = answer;
            }
        }
 
    });
    return number;
}

const btnArr = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', 'x', '.', '0', '=', '/']

for(i = 0; i < btnArr.length; i++){
    numpad.appendChild(numberButton(btnArr[i]));
}

const clrButton = document.querySelector("#clr-btn");
clrButton.addEventListener("click", () => {
    display.textContent = '0'
    equationArr = [];
})

