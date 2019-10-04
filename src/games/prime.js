import runGame from '../game';
import genRandomNumber from '../number';

const isPrime = (number) => {
  let diviner = number - 1;
  while (diviner > 1) {
    if (number % diviner === 0) {
      return false;
    }
    diviner -= 1;
  }
  return true;
};
const translateBoolean = (number) => (isPrime(number) ? 'yes' : 'no');

const runPrimeGame = () => {
  const gameTaskQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(gameTaskQuestion, genRandomNumber, translateBoolean, String);
};

export default runPrimeGame;
