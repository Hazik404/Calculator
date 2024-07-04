let displayValue = '';
const display = document.getElementsByClassName('display')['0'];

function updateDisplay(){
    display.textContent = displayValue;
}
const numKeys = document.getElementsByClassName('numkey');
const operations = document.getElementsByClassName("op");
const eul = document.getElementsByClassName('equal');
const clr = document.getElementsByClassName('clear')['0'];

let x = '';
let y = '';
let operator = '';

for(let button of numKeys){
    button.addEventListener('click', function() {
        const buttonValue = button.textContent;

        if(displayValue === '0'){
            if(operator = ''){
                x += buttonValue;
                displayValue = x;
            }
        }else{
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
    return (x) (operator) (y);
}


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