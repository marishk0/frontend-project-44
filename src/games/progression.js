import generateRandomNumber from '../generateRandomNumber.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 8;

const generateProgression = (firstNum = 1, progressionLength, difference = 1) => {
  const arrProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression.push(firstNum + difference * i);
  }
  return arrProgression;
};

const getAnswerAndQuestion = () => {
  const firstNum = generateRandomNumber(1, 5);
  const difference = generateRandomNumber(1, 5);

  const progression = generateProgression(firstNum, progressionLength, difference);
  const hiddenIndex = generateRandomNumber(1, progressionLength);

  const correctAnswer = String(progression[hiddenIndex - 1]);
  progression[hiddenIndex - 1] = '..';

  const question = String(progression.join(' '));
  return [question, correctAnswer];
};

const brainProgression = () => {
  startGame(getAnswerAndQuestion, description);
};

export default brainProgression;
