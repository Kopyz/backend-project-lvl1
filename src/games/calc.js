import { cons, cdr, car } from '@hexlet/pairs';
import runGame from '../game';
import { genRandomNumber, genDataFunction } from '../utils';

const arithmeticalOperators = '+-*';
const gameTaskQuestion = 'What is the result of the expression?';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const genArithmeticalOperator = () => {
  const selector = String(genRandomNumber(0, 3));
  switch (selector) {
    case '0':
      return arithmeticalOperators[selector];
    case '1':
      return arithmeticalOperators[selector];
    case '2':
      return arithmeticalOperators[selector];
    default:
      return 0;
  }
};

const genRandomNumbersAndOperator = () => {
  const pairsNum = cons(genRandomNumber(minRandomNumber, maxRandomNumber),
    genRandomNumber(minRandomNumber, maxRandomNumber));
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

const genCalcGameData = () => genDataFunction(genRandomNumbersAndOperator,
  calculateResultOfExpression, randomExpressionToString);

const runCalcGame = () => {
  runGame(gameTaskQuestion, genCalcGameData);
};

export default runCalcGame;
