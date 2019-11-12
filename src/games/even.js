import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandom = 1;
const maxRandom = 20;

const isEven = (number) => number % 2 === 0;

const generateEvenGameData = () => {
  const data = [];
  const question = generateRandom(minRandom, maxRandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runEvenGame = () => {
  runGame(gameTask, generateEvenGameData);
};

export default runEvenGame;
