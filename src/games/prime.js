import runGame from '../game';
import genRandom from '../utils';

const gameTaskQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const genPrimeGameData = () => {
  const data = [];
  const question = genRandom(minRandom, maxRandom);
  const result = isPrime(question) ? 'yes' : 'no';

  data.push(question);
  data.push(result);

  return data;
};

const runPrimeGame = () => {
  runGame(gameTaskQuestion, genPrimeGameData);
};

export default runPrimeGame;
