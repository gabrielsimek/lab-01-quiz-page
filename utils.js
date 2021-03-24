
export function isYes(userInput) {
    if (userInput[0].toLowerCase() === 'y') {
        return true;
    } else {
        return false;
    }
}