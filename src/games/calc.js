import { cons, cdr, car } from '@hexlet/pairs';
import runGame from '../game';
import genRandomNumber from '../number';

const genArithmeticalOperator = () => {
  const quantityOfOperators = 3;
  const randomNumForStatement = Math.floor(Math.random() * quantityOfOperators);

  if (randomNumForStatement < 1) {
    return '+';
  }
  if (randomNumForStatement < 2 && randomNumForStatement >= 1) {
    return '-';
  }
  if (randomNumForStatement < 3 && randomNumForStatement >= 2) {
    return '*';
  }
  return 0;
};

const genRandomNumbersAndOperator = () => {
  const pairsNum = cons(genRandomNumber(), genRandomNumber());
  return cons(pairsNum, genArithmeticalOperator());
};

const calculateResultOfExpression = (pair) => {
  switch (cdr(pair)) {
    case '+':
      return String(car(car(pair)) + cdr(car(pair)));
    case '-':
      return String(car(car(pair)) - cdr(car(pair)));
    case '*':
      return String(car(car(pair)) * cdr(car(pair)));
    default:
      return 0;
  }
};

const randomExpressionToString = (pair) => `${car(car(pair))} ${cdr(pair)} ${cdr(car(pair))}`;

const runCalcGame = () => {
  const gameTaskQuestion = 'What is the result of the expression?';

  runGame(gameTaskQuestion, genRandomNumbersAndOperator, calculateResultOfExpression,
    randomExpressionToString);
};

export default runCalcGame;
