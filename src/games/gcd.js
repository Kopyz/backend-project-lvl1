import runGame from '../game';
import genRandom from '../utils';

const gameTaskQuestion = 'Find the greatest common divisor of given numbers.';
const minRandom = 1;
const maxRandom = 20;

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

const genGcdGameData = () => {
  const data = [];
  const value1 = genRandom(minRandom, maxRandom);
  const value2 = genRandom(minRandom, maxRandom);
  const question = `${value1} ${value2}`;
  const result = String(calculateGcd(value1, value2));

  data.push(question);
  data.push(result);

  return data;
};

const runGcdGame = () => {
  runGame(gameTaskQuestion, genGcdGameData);
};

export default runGcdGame;
