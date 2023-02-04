var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");
console.log(txtinput);

var outputdiv = document.querySelector("#output");


function clickHandler() {
    outputdiv.innerText = txtinput.value;
};

btnTranslate.addEventListener("click", clickHandler)