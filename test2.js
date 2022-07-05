let array = [];
const displayCalculation = document.getElementById('display-calculation');
const equalTo = document.getElementById('equal-to');
const displayResult = document.getElementById('display-result');
let operatorButtons = document.getElementsByClassName("operators");
const clearAll = document.getElementById("ac");
let square = document.getElementById("square");
displayCalculation.textContent = "0"
let firstVarArray;
let secondVarArray;
let operator = "$";
let firstVar;
let firstVarString;
let secondVar;
let secondVarString;
let ans = 0;
let ansArr;
let decimalVar;
let operatorExists = 1;



function addition(a,b){
    ans = a + b;
}

function subtraction(a,b){
    ans = a - b
}

function division(a,b){
    ans = a/b;
}

function multiplication(a,b){
    ans = a*b;
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
buttons.forEach(button => button.addEventListener('click', () => 
{
   operatorExists = 1;


    if(button.className == "operators"){
        checkForOperator()
    }

    if(!array.includes("+") && !array.includes("-") && !array.includes("/") && !array.includes("*")){
       if(button.className == "operators"){
            array.push(button.innerText)
            displayCalculation.innerText = array.join("");
            console.log(array)
            }
    }

    if(button.className == "number"){
    array.push(button.innerText)
    displayCalculation.innerText = array.join("");
    console.log(array)
    }





}))


function seperate(array){
    for(let i = 1; i < array.length ; i ++){
        if(array[i] == "+" ||array[i] == "-" || array[i] == "*" || array[i] == "/" ){
        firstVarArray = array.slice(0,i);
        let numAfterIndex = i +1;
        secondVarArray = array.slice(numAfterIndex, array.length);
        console.log(secondVarArray)
        operator = array[i];

    }
}
    firstVarString = firstVarArray.join("");
    firstVar = parseInt(firstVarString);
    secondVarString = secondVarArray.join("");
    secondVar = parseInt(secondVarString);
}

function equalsTo (){
    checkForErrors();
    if(operatorExists == 1){
    seperate(array);
                console.log(firstVar);
                console.log(secondVar);
    operate(firstVar,secondVar);
    ans.countDecimals();
                console.log(ans)
                console.log(decimalVar);
    if(decimalVar > 0){
    ans = ans.toFixed(2);
    }
    displayResult.innerText = ans;
    let myFunc = num => num;
    var numArr = Array.from(String(ans), myFunc);
    array = [];
    for(let i = 0; i < numArr.length ; i++){
        array[i] = numArr[i]
    }
}
}

equalTo.onclick = function (){
    equalsTo();
}



function checkForOperator(){

    if(array.includes("+") || array.includes("-") || array.includes("/") || array.includes("*")){
        equalsTo();
        if(operatorExists != 2 ){
            if(array.includes("+")){
                array.push("+")
            }
            if(array.includes("-")){
                array.push("-")
            }
            if(array.includes("*")){
                array.push("*")
            }
            if(array.includes("/")){
                array.push("/")
            }
        }
        
    }
}

clearAll.onclick = function (){
    displayCalculation.textContent = "0"
    displayResult.textContent = "";
    operator = "$";
    firstVar = undefined;
    secondVar = undefined;
    array = [];
    z = 1;
 }

 function checkForErrors(){
    for(let i = 0; i < array.length ; i++){
        if(array[i] == "+" || array[i] == "-" || array[i] == "*" || array[i] == "/"){
            if(typeof(array[i+1]) != "string" ){
                console.log(typeof(array[i+1]))
                z = 2;
                alert("please enter a second number!!")
            }
   
        }


    }
 }



 Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    decimalVar =  this.toString().split(".")[1].length || 0; 
}

function squareNum (){
    firstVarArray = array;
    firstVarString = firstVarArray.join("");
    firstVar = parseInt(firstVarString);
    ans = firstVar * firstVar;
    displayResult.innerText = ans;
    let myFunc = num => num;
    var numArr = Array.from(String(ans), myFunc);
    array = [];
    for(let i = 0; i < numArr.length ; i++){
        array[i] = numArr[i]
    }
}

square.onclick = function(){
    squareNum();
}





