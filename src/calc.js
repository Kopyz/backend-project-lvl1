import { cons, cdr, car } from '@hexlet/pairs';
import game from './game';
import { randomNumber } from './even';

const randomExpression = () => {
  const pairsNum = cons(randomNumber(), randomNumber());
  const upperLimitForCondition = 3;
  const randomNumForStatement = Math.floor(Math.random() * upperLimitForCondition);

  if (randomNumForStatement < 1) {
    return cons(pairsNum, '+');
  }
  if (randomNumForStatement < 2 && randomNumForStatement >= 1) {
    return cons(pairsNum, '-');
  }
  if (randomNumForStatement < 3 && randomNumForStatement >= 2) {
    return cons(pairsNum, '*');
  }
  return 0;
};

const realResultOfExpression = (pair) => {
  if (cdr(pair) === '+') {
    return String(car(car(pair)) + cdr(car(pair)));
  }
  if (cdr(pair) === '-') {
    return String(car(car(pair)) - cdr(car(pair)));
  }
  if (cdr(pair) === '*') {
    return String(car(car(pair)) * cdr(car(pair)));
  }
  return 0;
};

const randomExpressionToString = (pair) => `${car(car(pair))} ${cdr(pair)} ${cdr(car(pair))}`;

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');

  game(randomExpression, realResultOfExpression, randomExpressionToString);
};

export default calc;
