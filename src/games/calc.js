import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const task = 'What is the result of the expression?';

const whatOperation = (a, b, symbol) => {
    switch (symbol) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            throw new Error(`Unknown operation: '${symbol}'!`);
    }
};

const startRound = () => {
    const a = generateRandomNumber(0, 10);
    const b = generateRandomNumber(0, 10);
    const symbolsArr = ['+', '-', '*'];
    const symbol = symbolsArr[generateRandomNumber(0, symbolsArr.length - 1)];

    const question = `${a} ${symbol} ${b}`;
    const correctAnswer = whatOperation(a, b, symbol).toString();
    return [question, correctAnswer];
};

const brainCalc = () => {
    startGame(startRound, task);
};

export default brainCalc;