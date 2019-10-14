import runGame from '../game';
import { genRandomNumber, genDataFunction } from '../utils';

const gameTaskQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const genRandomNumberForGame = () => genRandomNumber(minRandomNumber, maxRandomNumber);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let diviner = 2;
  while (diviner < number) {
    if (number % diviner === 0) {
      return false;
    }
    diviner += 1;
  }
  return true;
};
const translateBoolean = (number) => (isPrime(number) ? 'yes' : 'no');

const genPrimeGameData = () => genDataFunction(genRandomNumberForGame, translateBoolean, String);

const runPrimeGame = () => {
  runGame(gameTaskQuestion, genPrimeGameData);
};

export default runPrimeGame;
