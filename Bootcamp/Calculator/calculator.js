let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    if(symbol === 'C'){
        buffer = '0';
        runningTotal = 0;
    }
    switch(value){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '&equals':
            if(previousOperator === null){
                return;
            }
            flushOperationO(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
        case '&plus;':
        case '&minus;':
        case '&times;':
        case '&divide;':
            handleMath(symbol);
            break;
    }
}

function handleMath(){
    if(buffer === '0'){
        return;
    }

    const intbuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intbuffer;
    }else{
        flushOperation(intbuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperationO(intbuffer){
    if(previousOperator === '&plus;'){
        runningTotal += intbuffer;
    }else if(runningTotal === '&minus;'){
        runningTotal -= intbuffer;
    }else if(runningTotal === '&times;'){
        runningTotal *= intbuffer;
    }else{
        runningTotal /= intbuffer;
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
    
}

init();