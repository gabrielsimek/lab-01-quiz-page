// import functions and grab DOM elements
import { isYes, percentage} from './utils.js';
// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('take-quiz');
const results = document.getElementById('results');

const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');

console.log(button, results)

button.addEventListener('click', () => {
    const userName = prompt('What is your name');
    
    const wantToTake = confirm('Do you want to take the quiz');
    if (!wantToTake) {
        return;
    }

    const answer1 = prompt('Are there Roman remains in Steckborn');
    const answer2 = prompt('Are there almost 2000 jobs in Steckborn');
    const answer3 = prompt('Is Steckborn in Germany?');

    let score = 0;

    if (isYes(answer1)) {
        score++;
    } else {
        question1.style.backgroundColor = 'red';
    }

    if (isYes(answer2)) {
        score++;
    } else {
        question2.style.backgroundColor = 'red';

    }

    

    if (!isYes(answer3)) {
        score++;
    } else {
        question3.style.backgroundColor = 'red';
    }

    alert('Congrats you finished, the results will be displayed bellow');
    let percentScored = percentage(score, 3);
    results.textContent = `${userName}, your scored ${percentScored}, you got ${score} out of 3`;

    if (score === 0){
        results.style.backgroundColor = 'red';
    } else if (score === 1) {
        results.style.backgroundColor = 'orange';
    } else if (score === 2) {
        results.style.backgroundColor = 'yellow';
    } else if (score === 3) {
        results.style.backgroundColor = 'green';
    }


    
    
});