
export function isYes(userInput) {
    if (userInput[0].toLowerCase() === 'y') {
        return true;
    } else {
        return false;
    }
}

export function percentage(number, of){
    const percent = (number / of) * 100;
    return Math.floor(percent) + '%';
}

