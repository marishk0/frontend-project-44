import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers.length === 2;
};

const getAnswerAndQuestion = () => {
  const num = generateRandomNumber();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

const brainPrime = () => {
  startGame(getAnswerAndQuestion, description);
};

export default brainPrime;
