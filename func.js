let displayValue = '';
const display = document.getElementsByClassName('display')['0'];

function updateDisplay(){
    display.textContent = displayValue;
}
const numKeys = document.getElementsByClassName('numkey');
const operations = document.getElementsByClassName("op");
const eul = document.getElementsByClassName('equal')['0'];
const clr = document.getElementsByClassName('clear')['0'];
const bckspc = document.getElementsByClassName('backspace')['0'];

let x = '';
let y = '';
let operator = '';

for(let button of numKeys){
    button.addEventListener('click', function() {
        const buttonValue = button.textContent;

            if(operator === ''){
                x += buttonValue;
                displayValue = x;
            }
        else{
            y += buttonValue;
            displayValue = y;
        }
        updateDisplay();
    });
}

for (let button of operations){
    button.addEventListener('click', function(){
        if (x !== ''){
            operator = button.textContent;
        }
    });
}

eul.addEventListener('click', function(){
    if(x !== '' && y !== '' && operator !== ''){
        const result = operate(parseFloat(x), parseFloat(y), operator);
        displayValue = result.toString();
        x = result.toString();
        y = '';
        operator = '';
        updateDisplay();
    }
});
function add(a,b){
    return a + b
}

function sub(a,b){
    return b - a
}

function multi(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}



function operate(x,y,operator){
    switch (operator) {
        case "+":
            return add(x,y);
        case "-":
            return sub(x,y); 
        case "*":
            return multi(x,y);
        case "/":
            return divide(x,y);
        default:
            return 0;               
    }
}
bckspc.addEventListener('click', function(){
    
        if(operator === ''){
            x = x.slice(0,-1);
            displayValue = x || '0';
        }else{
            y = y.slice(0,-1);
            displayValue = y || '0';
        }
        updateDisplay();
    
});

clr.addEventListener('click',function(){
    displayValue = '0';
    x = '';
    y = '';
    operator = '';
    updateDisplay();
});
console.log(add(2,3))
console.log(sub(2,3))
console.log(multi(2,3))
console.log(divide(2,3))