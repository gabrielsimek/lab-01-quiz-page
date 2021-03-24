// import functions and grab DOM elements
import { isYes, percentage} from './utils.js';
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
    let percentScored = percentage(score, 3);
    results.textContent = `${userName}, your score is ${score} out of 3 your percent is ${percentScored}`;

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