import { questions } from "./questions.js";
const questionTitle = document.getElementById('ques-title')
const submitBtn = document.getElementById('submit')
const inputAnswer = document.getElementById('answer')

//variables to hold values

let availableQuestions = []
let currentQuestion = []
let magicalItems = []

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

const categButtons = document.getElementsByClassName('categ-btn')

for( let category of categButtons) {
    category.addEventListener('click', function() {
        let quizType = this.getAttribute('data-type')
        document.getElementById('categories-container').style.display = "none";
        runQuiz(quizType)
    })
}
/**
 * 
 * The function loads the questions from the selected category
 * and unhide answer input and submit options
 */
function runQuiz(quizType) {
    const quiz = questions.filter((item) => item.id == quizType)[0]
    availableQuestions = quiz.questions 
    document.getElementById('input-container').classList.remove('hide');
    submitBtn.classList.remove('hide')
    
    displayQuestion()
}

function displayQuestion() {
    let random = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions.splice(random,1)[0]
    console.log(currentQuestion.text) 
    questionTitle.textContent = currentQuestion.text
    submitBtn.addEventListener('click', checkAnswer)
}

function checkAnswer() {
    const userAnswer = inputAnswer.value
    console.log(userAnswer)
}