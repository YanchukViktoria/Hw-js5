let select = document.getElementById("select");

select.addEventListener("change", function () {
    if (select.value == "Кава") {
        let p = document.getElementById("p").textContent = "Кава";
    }else if (select.value == "Чай") {
        let p = document.getElementById("p").textContent = "Чай";
    }else if (select.value == "Компот") {
        let p = document.getElementById("p").textContent = "Компот";
    }
})

////

let BtnCoolor = document.getElementById("color-btn");
BtnCoolor.addEventListener("click", event);


function event() {
    let input = document.getElementById("color-input").value;
    if (input.toLowerCase() == "червоний") {
        let p = document.getElementById("p").textContent = "стій";
    }  else  if (input.toLowerCase() == "жовтий") {
        let p = document.getElementById("p").textContent = "чекай";
    }  else  if (input.toLowerCase() == "зелений") {
        let p = document.getElementById("p").textContent = "йди";
    }
}

////

let btnOne = document.getElementById("calc-btn-first");
let btnTwo = document.getElementById("calc-btn-sec");
let btnThree = document.getElementById("calc-btn-third");
let btnFour = document.getElementById("calc-btn-fourth");
let btnFive = document.getElementById("calc-btn-fifth");
let btnSix = document.getElementById("calc-btn-sixth");
let btnSeven = document.getElementById("calc-btn-seventh");
let btnEight = document.getElementById("calc-btn-eighth");
let btnNine = document.getElementById("calc-btn-nineth");
let btnPlus = document.getElementById("calc-btn-plus");
let btnMinus = document.getElementById("calc-btn-minus");
let btnSqr = document.getElementById("calc-btn-sqr");
let btnDiving = document.getElementById("calc-btn-diving");
let btnMultiply = document.getElementById("calc-btn-multyply");
let btnDecrimal = document.getElementById("calc-btn-decrimal");
let btnEnter = document.getElementById("calc-btn-enter");
let btnRound = document.getElementById("calc-btn-round");
let btnString = document.getElementById("calc-btn-string");
let btnC = document.getElementById("calc-btn-C");

let sqr = "√"


function Calculate(value) {
    let desc = document.getElementById("calc-desc");
    desc.textContent += value;
}


function CalculateSqrt(value) {
    document.getElementById("calc-desc").textContent += value;

}

function CalculateRound() {
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    res = parseInt(desc);
    document.getElementById("calc-desc").textContent = res;
}

function CalculateDecrimal() {
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    res = Number(desc).toFixed(1);
    document.getElementById("calc-desc").textContent = res;
}

function ConverToString() {
    let desc = document.getElementById("calc-desc").textContent;
    alert("Open the console to see.")

    console.log("It's actually a string, but I'm converting it");
    console.log("First things first, convert to Number");
    console.log(Number(desc));
    console.log("There is no point in converting it further because it is already a string, but I can convert it to a Boolean value");
    console.log(Boolean(desc));
}


function cleanString() {
    document.getElementById("calc-desc").textContent = " ";
}


function Calculation(){
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    if (desc.includes("√")) {
        let desc = document.getElementById("calc-desc").textContent;

        res = Math.sqrt(desc.slice(1));
        document.getElementById("calc-desc").textContent = res;
    } else {
        res = eval(desc);
        document.getElementById("calc-desc").textContent = res;
    }

}


btnOne.addEventListener("click", function(){
    Calculate(btnOne.textContent)
});
btnTwo.addEventListener("click", function(){
    Calculate(btnTwo.textContent)
});
btnThree.addEventListener("click", function(){
    Calculate(btnThree.textContent)
});
btnFour.addEventListener("click", function(){
    Calculate(btnFour.textContent)
});
btnFive.addEventListener("click", function(){
    Calculate(btnFive.textContent)
});
btnSix.addEventListener("click", function(){
    Calculate(btnSix.textContent)
});
btnSeven.addEventListener("click", function(){
    Calculate(btnSeven.textContent)
});
btnEight.addEventListener("click", function(){
    Calculate(btnEight.textContent)
});
btnNine.addEventListener("click", function(){
    Calculate(btnNine.textContent)
});
btnPlus .addEventListener("click", function(){
    Calculate(btnPlus.textContent)
});
btnMinus.addEventListener("click", function(){
    Calculate(btnMinus.textContent)
});
btnSqr.addEventListener("click", function(){
    CalculateSqrt(sqr)
});
btnDiving.addEventListener("click", function(){
    Calculate(btnDiving.textContent)
});
btnMultiply.addEventListener("click", function(){
    Calculate(btnMultiply.textContent)
});
btnDecrimal.addEventListener("click", function(){
    CalculateDecrimal()
});
btnEnter.addEventListener("click", function(){
    Calculation()
});
btnRound.addEventListener("click", function(){
    CalculateRound()
});
btnString.addEventListener("click", function(){
    ConverToString()
});
btnC.addEventListener("click", function () {
   cleanString() 
});