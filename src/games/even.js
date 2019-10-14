import runGame from '../game';
import { genRandomNumber, genDataFunction } from '../utils';

const gameTaskQuastion = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const isEven = (number) => (number % 2 === 0);

const translateBoolean = (number) => (isEven(number) ? 'yes' : 'no');

const genRandomNumberForGame = () => genRandomNumber(minRandomNumber, maxRandomNumber);

const genEvenGameData = () => genDataFunction(genRandomNumberForGame, translateBoolean, String);

const runEvenGame = () => {
  runGame(gameTaskQuastion, genEvenGameData);
};

export default runEvenGame;
