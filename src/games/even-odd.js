import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const num = generateRandomNumber();
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

const brainEven = () => {
  startGame(getAnswerAndQuestion, description);
};

export default brainEven;
