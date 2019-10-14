import { cons, car, cdr } from '@hexlet/pairs';
import runGame from '../game';
import { genRandomNumber, genDataFunction } from '../utils';

const gameTaskQuestion = 'Find the greatest common divisor of given numbers.';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const genRandomNumberForNod = () => cons(genRandomNumber(minRandomNumber, maxRandomNumber),
  genRandomNumber(minRandomNumber, maxRandomNumber));

const calculateNod = (pair) => {
  const number1 = car(pair);
  const number2 = cdr(pair);
  let diviner = (number1 >= number2 ? number2 : number1);
  while (diviner > 0) {
    if ((number1 % diviner === 0) && (number2 % diviner === 0)) {
      return String(diviner);
    }
    diviner -= 1;
  }
  return '0';
};

const randomNumberForNodToString = (pair) => `${car(pair)} ${cdr(pair)}`;

const genGcdGameData = () => genDataFunction(genRandomNumberForNod, calculateNod,
  randomNumberForNodToString);

const runGcdGame = () => {
  runGame(gameTaskQuestion, genGcdGameData);
};

export default runGcdGame;
