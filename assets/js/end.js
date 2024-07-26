const magicSpellEarned = document.getElementById('magic-spells')
const categorySpan = document.getElementById('category')

const spells = JSON.parse(localStorage.getItem('magicalItems'));
const category = localStorage.getItem('category');

document.addEventListener('DOMContentLoaded', () =>{
    magicSpellEarned.textContent = [...spells].join(', ')
    categorySpan.textContent = category
})
