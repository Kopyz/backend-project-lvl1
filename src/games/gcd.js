import { cons, car, cdr } from '@hexlet/pairs';
import runGame from '../game';
import genRandomNumber from '../number';

const genRandomNumForNod = () => cons(genRandomNumber(), genRandomNumber());

const calculateNod = (pair) => {
  const num1 = car(pair);
  const num2 = cdr(pair);
  let diviner = (num1 >= num2 ? num2 : num1);
  while (diviner > 0) {
    if ((num1 % diviner === 0) && (num2 % diviner === 0)) {
      return String(diviner);
    }
    diviner -= 1;
  }
  return '0';
};

const randomNumForNodToString = (pair) => `${car(pair)} ${cdr(pair)}`;

const runGcdGame = () => {
  const gameTaskQuestion = 'Find the greatest common divisor of given numbers.';

  runGame(gameTaskQuestion, genRandomNumForNod, calculateNod,
    randomNumForNodToString);
};

export default runGcdGame;
