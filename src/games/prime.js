import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandom = 1;
const maxRandom = 20;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let diviner = 2;
  while (diviner <= number) {
    if (diviner > (number / 2)) {
      return true;
    }
    if (number % diviner === 0) {
      return false;
    }
    diviner += 1;
  }
  return null;
};

const generatePrimeGameData = () => {
  const data = [];
  const question = generateRandom(minRandom, maxRandom);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runPrimeGame = () => {
  runGame(gameTask, generatePrimeGameData);
};

export default runPrimeGame;
