import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'What number is missing in the progression?';
const minRandom = 1;
const maxRandom = 20;

const generateProgressionGameData = () => {
  const data = [];
  const firstValueOfProgression = generateRandom(minRandom, maxRandom);
  const stepOfProgression = generateRandom(minRandom, maxRandom);
  const quantityProgression = 10;

  const shadowPosition = generateRandom(0, quantityProgression - 1);
  const correctAnswer = String(firstValueOfProgression
    + (shadowPosition * stepOfProgression));

  let progression = (shadowPosition === 0 ? '..' : '');
  let i = (shadowPosition === 0 ? 1 : 0);

  for (i; i < quantityProgression; i += 1) {
    if (i === 0) {
      progression = `${firstValueOfProgression}`;
    } else if (i === shadowPosition) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${firstValueOfProgression + (i * stepOfProgression)}`;
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
