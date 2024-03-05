let storeNumber = new Array();

document.querySelector(".calculator").addEventListener("click", function (event) {
    const display = document.querySelector(".calculator-display");
    const classList = event.target.classList;
    if (classList.contains('number')){
        if (display.innerHTML === '0' || operatorClicked){
            display.innerHTML = '';
            operatorClicked = false
        }
        display.innerHTML += event.target.innerHTML;
    } else if (classList.contains('operator')) {
        if (storeNumber[0] !== undefined && storeNumber[1] !== undefined){
            display.innerHTML = operate(storeNumber[0], display.innerHTML, storeNumber[1]);
        }
        storeNumber[0] = display.innerHTML;
        storeNumber[1] = event.target.innerText;
        operatorClicked = true;            
    } else if (classList.contains('equal')) {
        if (storeNumber[0] !== undefined && storeNumber[1] !== undefined){
            display.innerHTML = operate(storeNumber[0], display.innerHTML, storeNumber[1]);
        } else{
            storeNumber[0] = display.innerHTML;
        }
    } else if (classList.contains('clear')){
        display.innerHTML = '0';
        storeNumber = [];
    } else if (classList.contains('percent')){
        display.innerHTML = +display.innerHTML / 100;
    } else if (classList.contains('decimal')){
        if (display.innerText.slice(-1) !== '.'){
            display.innerHTML += '.';}
    } else if (classList.contains('negative')){
        console.log(display.innerHTML[0])
        if (display.innerHTML[0] === '-'){
            display.innerHTML = display.innerText.replace("-", "");
        } else {
            display.innerHTML = '-' + display.innerHTML;
        }
    }
});



function operate(pendingValue,currentValue, operator) {
    pendingValue = +pendingValue;
    currentValue = +currentValue;
    switch(operator){
        case '÷':
            return pendingValue / currentValue;
        case '+':
            return pendingValue + currentValue;
        case '-':
            return pendingValue - currentValue;
        case '×':
            return pendingValue * currentValue;
    }
}