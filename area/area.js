const inputs = document.querySelectorAll('.side-input')
const find_area_btn = document.querySelector('#find-area-btn');
const output_div = document.querySelector('.output-msg');
const error_div = document.querySelector(".error-msg");

function isValidInput(){
    let flag = true;
    for(el of inputs){
        if(el.value === ""){
            setError("Please enter all the fields");
            flag = false;
        }
        else if(el.value <= 0){
            setError("Sides should be greater than 0");
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

function setOutput(area){
    output_div.innerText = `The area of the triangle is ${area}`;
}

function resetOutput(){
    output_div.innerText = "";
}

function resetAll(){
    resetError();
    resetOutput();
}

function getArea(side1 , side2) {
    return (0.5 * side1 * side2);
}

function calculateArea() {
    const area = getArea(Number(inputs[0].value), Number(inputs[1].value));
    setOutput(area);
}

find_area_btn.addEventListener("click", function(){
    
    if(isValidInput()){
        calculateArea();
    }
});
inputs[0].addEventListener("click", resetAll);
inputs[1].addEventListener("click", resetAll);