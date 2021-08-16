const quiz_form = document.querySelector('.quiz-form');
const submit_btn = document.querySelector('#submit-ans-btn')
const output_div = document.querySelector('.output-msg');
const error_div = document.querySelector('.error-msg');
const question_div = document.querySelectorAll(".question-container");

const correctAnswers = ["3", "obtuse", "acute", "equilateral", "perimeter", "hypotenuse", "5", "180", "60","5"];


function isValidInput(input_values){

    let index = 0;
    for(let value of input_values){
        index += 1;
    }

    if(index === correctAnswers.length){
        return true;
    }
    else{
        setError("Please select all the answers and attempt the entire quiz.")
    }
}

function setError(errorText){
    error_div.innerText = errorText;
}

function resetError(){
    error_div.innerText = "";
}

function setOutput(score, user_answers){

    let index = 0;
    for(let ans of user_answers){

        if(ans){
            question_div[index].style.background="#32CD32";
        }
        else{
            question_div[index].style.background="#EF4444";
        }
        index += 1;
    }

    output_div.innerText = `Your score is ${score} / 10`;
}

function resetOutput(){

    for(let q_div of question_div){
        q_div.style.background = "white";
    }
    output_div.innerText = "";
}

function calculateScore () {

    const formResults = new FormData(quiz_form);
    let user_answers = [];

    if(isValidInput(formResults.values())){
        
        let score = 0, index = 0;
        for(let value of formResults.values()){
            
            if(value === correctAnswers[index]) {
                user_answers[index] = true;
                score = score + 1;
            }
            else {
                user_answers[index] = false;
            }
            index += 1
        }
    
        setOutput(score, user_answers);
    }
    
}

submit_btn.addEventListener("click", calculateScore)
quiz_form.addEventListener("click", function(){
    resetError();
    resetOutput();
})