import runGame from '../game';
import genRandom from '../utils';

const gameTaskQuastion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandom = 1;
const maxRandom = 20;

const isEven = (number) => (number % 2 === 0);

const genEvenGameData = () => {
  const data = [];
  const question = genRandom(minRandom, maxRandom);
  const result = isEven(question) ? 'yes' : 'no';

  data.push(question);
  data.push(result);

  return data;
};

const runEvenGame = () => {
  runGame(gameTaskQuastion, genEvenGameData);
};

export default runEvenGame;
