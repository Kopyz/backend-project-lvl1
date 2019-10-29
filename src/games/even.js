import runGame from '../game';
import genRandom from '../utils';

const gameTaskQuastion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandom = 1;
const maxRandom = 20;

const isEven = (number) => (number % 2 === 0);

const genEvenGameData = () => {
  const data = [];
  const value = genRandom(minRandom, maxRandom);
  const question = value;
  const result = isEven(value) ? 'yes' : 'no';

  data.push(question);
  data.push(result);

  return data;
};

const runEvenGame = () => {
  runGame(gameTaskQuastion, genEvenGameData);
};

export default runEvenGame;
