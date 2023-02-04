var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");
console.log(txtinput);

var outputdiv = document.querySelector("#output");

outputdiv.innerText = "i am imran"


function clickHandler() {
    console.log('clicked')
    console.log("input", txtinput.value)
};

btnTranslate.addEventListener("click", clickHandler)