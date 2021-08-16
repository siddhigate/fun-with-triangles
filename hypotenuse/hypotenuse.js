const inputs = document.querySelectorAll('.side-input')
const find_hypo_btn = document.querySelector('#find-hypo-btn');
const output_div = document.querySelector('.output-msg');
const error_div = document.querySelector(".error-msg");

const bottom_div = document.querySelector(".footer");

function isValidInput(){
    let flag = true;
    for(el of inputs){
        if(el.value === ""){
            setError("Please enter all the fields");
            flag = false;
        }
        else if(el.value <= 0){
            setError("Length of sides should be greater than 0");
            flag = false;
        }
    }
    return flag;
}

function setError(error_text){
    error_div.innerText = error_text;
}

function resetError(){
    error_div.innerText = "";
}

function setOutput(hypotenuse_length){

    output_div.innerText = `The length of the hypotenuse is ${hypotenuse_length}`;
    bottom_div.scrollIntoView();
}

function resetOutput(){
    output_div.innerText = "";
}

function resetAll(){
    resetError();
    resetOutput();
}
function getSumOfSquares(side1, side2) {
    return side1*side1 + side2*side2;
}

function findHypotenuse() {
 
    const hypotenuse = Math.sqrt(getSumOfSquares(Number(inputs[0].value), Number(inputs[1].value))).toFixed(2);
    setOutput(hypotenuse);
}

find_hypo_btn.addEventListener("click", function(){
    
    if(isValidInput()){
        findHypotenuse();
    }
});
inputs[0].addEventListener("click", resetAll);
inputs[1].addEventListener("click", resetAll);