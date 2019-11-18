import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'What number is missing in the progression?';
const min = 1;
const max = 20;
const quantity = 10;

const generateProgressionGameData = () => {
  const data = [];
  const firstValue = generateRandom(min, max);
  const step = generateRandom(min, max);

  const shadowPosition = generateRandom(0, quantity - 1);
  const correctAnswer = String(firstValue + (shadowPosition * step));

  let progression = '';

  for (let i = 0; i < quantity; i += 1) {
    if (i === 0 && shadowPosition === 0) {
      progression = '..';
    } else if (progression === '') {
      progression = `${firstValue}`;
    } else if (i === shadowPosition) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${firstValue + (i * step)}`;
    }
  }
  const question = progression;

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runProgressionGame = () => {
  runGame(gameTask, generateProgressionGameData);
};

export default runProgressionGame;
