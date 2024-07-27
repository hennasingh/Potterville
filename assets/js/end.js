const magicSpellEarned = document.getElementById('magic-spells')
const categorySpan = document.getElementById('category')
const totalScoreSpan = document.getElementById('total-score')

const spells = JSON.parse(localStorage.getItem('magicalItems'));
const category = localStorage.getItem('category');

document.addEventListener('DOMContentLoaded', () =>{
    magicSpellEarned.textContent = [...spells].join(', ')
    categorySpan.textContent = category
    totalScoreSpan.textContent = spells.length * 10
})

document.getElementById('play-again').addEventListener('click' , () => {
        window.location.assign('index.html')
})
