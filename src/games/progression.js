import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const generateProgression = (firstNum = 1, count = 5, difference = 1) => {
  const arrProgression = [];
  for (let i = 0; i < count; i += 1) {
    arrProgression.push(firstNum + difference * i);
  }
  return arrProgression;
};

const getAnswerAndQuestion = () => {
  const firstNum = generateRandomNumber(1, 5);
  const count = generateRandomNumber(5, 10);
  const difference = generateRandomNumber(1, 5);

  const progression = generateProgression(firstNum, count, difference);
  const hiddenIndex = generateRandomNumber(1, count);

  const correctAnswer = String(progression[hiddenIndex - 1]);
  progression[hiddenIndex - 1] = '..';

  const question = String(progression.join(' '));
  return [question, correctAnswer];
};

const brainProgression = () => {
  startGame(getAnswerAndQuestion, task);
};

export default brainProgression;
