import { cons, car, cdr } from '@hexlet/pairs';
import game from './game';
import { randomNumber } from './even';

const randomNumForNod = () => cons(randomNumber(), randomNumber());

const nodVerify = (pair) => {
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

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');

  game(randomNumForNod, nodVerify, randomNumForNodToString);
};

export default gcd;
