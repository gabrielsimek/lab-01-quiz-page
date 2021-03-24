// import functions and grab DOM elements
import { isYes } from './utils.js';
// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('take-quiz');
const results = document.getElementById('results');

console.log(button, results)

button.addEventListener('click', () => {
    const userName = prompt('What is your name');
    
    const wantToTake = confirm('Do you want to take the quiz');
    if (!wantToTake) {
        return;
    }

    const answer1 = prompt('the answer is yes???');
    const answer2 = prompt('the answer is yes???');
    const answer3 = prompt('the answer is no???');

    let score = 0;

    if (isYes(answer1)) {
        score++;
    }

    if (isYes(answer2)) {
        score++;
    }

    if (!isYes(answer3)) {
        score++;
    }

    alert('Congrats you finished, the results will be displayed bellow');

    results.textContent = `${userName}, your score is ${score} out of 3`;


    
    
});