import { questions } from "./questions.js";
const questionTitle = document.getElementById('ques-title')
const submitBtn = document.getElementById('submit')
const inputAnswer = document.getElementById('answer')
const magicSpellEarned = document.getElementById('magic-spells')

//variables to hold values

let availableQuestions = []
let currentQuestion = []
let awardedSpell = []
let magicalSpells = ['Reducto', 'Stupify', 'Sectumsempra', 'Bombarda', 'Imperio', 'Crucio', 'Diffindo', 'Expulso', 'Confringo', 'Petrificus Totalus']

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
    submitBtn.classList.remove('hide');
    document.getElementById('scoreboard').classList.remove('hide');
    submitBtn.addEventListener('click', checkAnswer);
    displayQuestion();
}

function displayQuestion() {
    let random = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions.splice(random,1)[0]
    console.log(currentQuestion.text) 
    questionTitle.textContent = currentQuestion.text
    
}

function checkAnswer() {
    const userAnswer = inputAnswer.value
    if(currentQuestion.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
        let random = Math.floor(Math.random() * magicalSpells.length);
        awardedSpell.push(magicalSpells.splice(random,1)[0])
        magicSpellEarned.textContent = [...awardedSpell].join(', ')

    } 
    inputAnswer.value = ''
    if (availableQuestions.length === 0) {
        localStorage.setItem('magicalItems', JSON.stringify(awardedSpell))
        return window.location.assign("end.html")
    }
    displayQuestion()
}