import runGame from '../game';
import genRandom from '../utils';

const gameTaskQuestion = 'What number is missing in the progression?';
const minRandom = 1;
const maxRandom = 20;

const genProgressionGameData = () => {
  const data = [];
  const firstValueOfProgression = genRandom(minRandom, maxRandom);
  const stepOfProgression = genRandom(minRandom, maxRandom);
  const quantityProgression = 9;

  const shadowPosition = genRandom(0, quantityProgression + 1);
  const shadowPositionValue = String(firstValueOfProgression
    + (shadowPosition * stepOfProgression));

  let progression = (shadowPosition === 0 ? '..' : '');
  let i = (shadowPosition === 0 ? 1 : 0);

  for (i; i <= quantityProgression; i += 1) {
    if (i === shadowPosition) {
      progression += ' ..';
    } else {
      progression += ` ${firstValueOfProgression + (i * stepOfProgression)}`;
    }
  }
  const question = progression;
  const result = shadowPositionValue;

  data.push(question);
  data.push(result);

  return data;
};

const runProgressionGame = () => {
  runGame(gameTaskQuestion, genProgressionGameData);
};

export default runProgressionGame;
