let displayValue = '';
const display = document.getElementsByClassName('display')['0'];

function updateDisplay(){
    display.textContent = displayValue;
}
const numKeys = document.getElementsByClassName('numkey');

for(let button of numKeys){
    button.addEventListener('click', function() {
        const buttonValue = button.textContent;

        if(displayValue === '0'){
            displayValue = buttonValue
        }else{
            displayValue += buttonValue;
        }
        updateDisplay();
    });
}
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

let x = '';
let y = '';
let operator = '';

function operate(x,y,operator){
    return (x) (operator) (y);
}

const clr = document.getElementsByClassName('clear')['0'];
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