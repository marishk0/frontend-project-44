import generateRandomNumber from '../generateRandomNumber.js';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const startRound = () => {
    const num = generateRandomNumber();

    console.log(`Question: ${num}`);
  
    let answer = readlineSync.question(`Your answer: `);
    answer = answer.trim();
    let oppositeAnswer = '';
    let userAnswer = false;
  
    if (answer === 'yes') {
      userAnswer = true;
      oppositeAnswer = 'no';
    } else if (answer === 'no') {
      userAnswer = false;
      oppositeAnswer = 'yes';
    } else {
      console.log(`'${answer}' is wrong answer ;(.`);
      return false;
    }

    if (userAnswer === isEven(num))  {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.`);
        return false;
    }
};

const brainEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const isCorrect = startRound();
        if (!isCorrect) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default brainEven;