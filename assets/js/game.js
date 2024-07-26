import { questions } from "./questions.js";
const questionTitle = document.getElementById('ques-title')
const submitBtn = document.getElementById('submit')
const inputAnswer = document.getElementById('answer')
const magicSpellEarned = document.getElementById('magic-spells')
const gameContainer = document.getElementById('game-container')

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
 * and unhide answer input and submit options.
 * Add click listener to submit button
 * and calls displayQuestion function
 * Code help taken from https://www.youtube.com/watch?v=riDzcEQbX6k
 */
function runQuiz(quizType) {
    const quiz = questions.filter((item) => item.id == quizType)[0]
    availableQuestions = quiz.questions 
    localStorage.setItem('category', quiz.option)

    document.getElementById('input-container').classList.remove('hide');
    submitBtn.classList.remove('hide');

    document.getElementById('spellboard').classList.remove('hide');
    submitBtn.addEventListener('click', checkAnswer);

    displayQuestion();
}

/**
 * The function selects a random question from the list and displays it on the screen for the user.
 * The question is removed from the list so its not selected again.
 * Code reference taken from https://github.com/Ant2210/project2/blob/main/assets/js/quiz.js
 * 
 */
function displayQuestion() {
    let random = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions.splice(random,1)[0]

    questionTitle.textContent = currentQuestion.text
    
}

/**
 * This function is called when user clicks on submit button 
 * the function compares user answer to current question answer and add
 * a green color to the game container for correct answer and red for incorrect.
 * 
 * The user is awarded a random spell from the list for correct answer.
 * The function checks the count of remaining questions and calls end.html if no ques is left
 */

function checkAnswer() {
    const userAnswer = inputAnswer.value
    if(currentQuestion.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
        gameContainer.classList.add('correct');

        setTimeout(() => {
            let random = Math.floor(Math.random() * magicalSpells.length);
            awardedSpell.push(magicalSpells.splice(random,1)[0]);

            magicSpellEarned.textContent = [...awardedSpell].join(', ');
            gameContainer.classList.remove("correct");

            if (availableQuestions.length === 0) {
                localStorage.setItem('magicalItems', JSON.stringify(awardedSpell))
                return window.location.assign("end.html")
            }
            inputAnswer.value = ''
            displayQuestion()
        }, 1000);

    } else {
        gameContainer.classList.add('wrong');

        setTimeout(() => {
            gameContainer.classList.remove("wrong");

            if (availableQuestions.length === 0) {
                localStorage.setItem('magicalItems', JSON.stringify(awardedSpell))
                return window.location.assign("end.html")
            }
            inputAnswer.value = ''
            displayQuestion()
        }, 1000);
    }
}