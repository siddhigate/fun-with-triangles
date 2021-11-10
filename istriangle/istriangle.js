const inputs = document.querySelectorAll('.angle-input')
const is_triangle_btn = document.querySelector('#is-triangle-submit-btn');
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
            setError("Angles should be greater than 0");
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

function setOutput(status){
    if(status){
        output_div.innerHTML = `<div><img src='../assets/happy.svg'></div><div style="margin:auto; font-size: 1.4rem;">Yayy! These angles make a triangle :)</div>`
    }
    else{
        output_div.innerHTML = `<div><img src='../assets/sad.svg'></div><div style="margin:1rem; font-size: 1.2rem; text-align: center">Oops! These angles don't make a triangle :(</div>`;
    }
    bottom_div.scrollIntoView();
}

function resetOutput(){
    output_div.innerText = "";
}

function resetAll(){
    resetError();
    resetOutput();
}
function getSumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3 
    return sum  
}

function isTriangle() {
 
    const sum = getSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))

    if(sum === 180) {
       setOutput(true);
    }
    else {
        setOutput(false);
    }
}

is_triangle_btn.addEventListener("click", function(){
    
    resetAll();
    if(isValidInput()){
        isTriangle();
    }
});
inputs[0].addEventListener("click", resetAll);
inputs[1].addEventListener("click", resetAll);
inputs[2].addEventListener("click", resetAll);