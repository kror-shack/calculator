const displayCalculation = document.getElementById("display-calculation");
const displayResult = document.getElementById("display-result")
displayCalculation.textContent = "0";
let x= 0;
let y = 0;
let ans =0;
let operator = "$";
const clearAll = document.getElementById("ac");
const add = document.getElementById("addition");
const equalTo = document.getElementById("equal-to");
let firstVar;
let secondVar;
let z = 0;
let node;
let nodeTwo;
const operators = document.getElementsByClassName("operators");



function addition(a,b){
    ans = parseInt(a) + parseInt(b);
}

function subtraction(a,b){
    ans = parseInt(a) - parseInt(b)
}

function division(a,b){
    ans = parseInt(a)/parseInt(b);
}

function multiplication(a,b){
    ans = parseInt(a)*parseInt(b);
}

function operate(a,b){
    switch(operator){
        case "+":
            addition(a,b);
            break;
        case "-":
            subtraction(a,b);
            break;
        case "*":
            multiplication(a,b);
            break;
        case "/":
            division(a,b);
            break;
            
    }
    return ans;
}



const buttons = document.querySelectorAll("button")
buttons.forEach(number => number.addEventListener('click', () =>
 {
    if(operator == "$"){
        if(number.className == "number"){
        if(displayCalculation.textContent == "0"){displayCalculation.textContent=""}
        if(firstVar == undefined){firstVar = number.innerText;
            node = document.createTextNode(firstVar);
            displayCalculation.appendChild(node)
        
        
        }
        else if(firstVar != undefined){x = number.innerText;
        firstVar += x;
        console.log(firstVar);
        displayCalculation.removeChild(node)
         node = document.createTextNode(firstVar);
        displayCalculation.appendChild(node)
        z++;
        }
        }
    }
 }));

 buttons.forEach(number => number.addEventListener('click', () =>
 {
    if(operator != "$"){
        if(number.className == "number"){
            if(secondVar == undefined){secondVar = number.innerText;
                nodeTwo = document.createTextNode(secondVar);
                displayCalculation.appendChild(nodeTwo)
            }

            else if(secondVar != undefined){y = number.innerText;
                secondVar += y;
                console.log(firstVar);
                displayCalculation.removeChild(nodeTwo)
                nodeTwo = document.createTextNode(secondVar);
                displayCalculation.appendChild(nodeTwo)
            }
        
    }
}
 }));

 buttons.forEach(number => number.addEventListener('click', () =>
 {
    if(number.className == "operators"){
    operator = number.innerText;
    console.log(operator)
    let node = document.createTextNode(operator);
    displayCalculation.appendChild(node)
    }
 }));



 clearAll.onclick = function (){
    displayCalculation.textContent = "0"
    displayResult.textContent = "";
    operator = "$";
    firstVar = undefined;
    secondVar = undefined;
 }

equalTo.onclick = function(){
        operate(firstVar,secondVar);
        console.log("what is happy")
        console.log(ans)
        displayResult.textContent = ans;
}

function equalsTo(){


}


