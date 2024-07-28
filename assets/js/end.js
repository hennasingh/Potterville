const magicSpellEarned = document.getElementById('magic-spells')
const categorySpan = document.getElementById('category')
const totalScoreSpan = document.getElementById('total-score')

const spells = JSON.parse(localStorage.getItem('magicalItems'));
const category = localStorage.getItem('category');

/**
 * The function is run when the page is loaded.
 * It displays the score, category and magic quotient on the screen.
 */
document.addEventListener('DOMContentLoaded', () => {
    magicSpellEarned.textContent = [...spells].join(', ')
    categorySpan.textContent = category
    totalScoreSpan.textContent = spells.length * 10
})

document.getElementById('play-again').addEventListener('click', () => {
    window.location.assign('index.html')
})