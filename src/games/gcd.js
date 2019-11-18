import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 20;

const calculateGcd = (first, second) => {
  let diviner = (first >= second ? first : second);
  while (diviner > 0) {
    if ((first % diviner === 0) && (second % diviner === 0)) {
      return diviner;
    }
    diviner -= 1;
  }
  return null;
};

const generateGcdGameData = () => {
  const data = [];
  const value1 = generateRandom(min, max);
  const value2 = generateRandom(min, max);
  const question = `${value1} ${value2}`;
  const correctAnswer = String(calculateGcd(value1, value2));

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runGcdGame = () => {
  runGame(gameTask, generateGcdGameData);
};

export default runGcdGame;
