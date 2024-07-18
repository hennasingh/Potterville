import { questions } from "./questions.js";

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

const categButtons = document.getElementsByClassName('categ-btn')

for( let category of categButtons) {
    category.addEventListener('click', function() {
        let quizType = this.getAttribute('data-type')
        runQuiz(quizType)
    })
}

function runQuiz(quizType) {
    
}