import runGame from '../game';
import generateRandom from '../utils';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 20;

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
  return false;
};

const generatePrimeGameData = () => {
  const data = [];
  const question = generateRandom(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runPrimeGame = () => {
  runGame(gameTask, generatePrimeGameData);
};

export default runPrimeGame;
