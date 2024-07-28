const magicSpellEarned = document.getElementById('magic-spells');
const categorySpan = document.getElementById('category');
const totalScoreSpan = document.getElementById('total-score');
const potterhead = document.getElementById('isPotterhead')

const spells = JSON.parse(localStorage.getItem('magicalItems'));
const category = localStorage.getItem('category');
const isPotterhead = localStorage.getItem('isPotterhead');

/**
 * The function is run when the page is loaded.
 * It displays the score, category and magic quotient on the screen.
 */
document.addEventListener('DOMContentLoaded', () => {
    magicSpellEarned.textContent = [...spells].join(', ');
    categorySpan.textContent = category;
    totalScoreSpan.textContent = spells.length * 10;
    potterhead.textContent = isPotterhead ? "Yes" : 'No'
})

document.getElementById('play-again').addEventListener('click', () => {
    window.location.assign('game.html');
})