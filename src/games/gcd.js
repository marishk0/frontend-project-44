import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  let minNum;
  let gcd = 1;
  if (a > b) {
    minNum = b;
  } else {
    minNum = a;
  }

  for (let i = 2; i <= minNum; i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      gcd = i;
    }
  }
  return String(gcd);
};

const getAnswerAndQuestion = () => {
  const a = generateRandomNumber(1, 50);
  const b = generateRandomNumber(1, 50);

  const question = `${a} ${b}`;
  const correctAnswer = findGCD(a, b);
  return [question, correctAnswer];
};

const brainGCD = () => {
  startGame(getAnswerAndQuestion, task);
};

export default brainGCD;
