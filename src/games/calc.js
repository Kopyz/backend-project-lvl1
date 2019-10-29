import runGame from '../game';
import genRandom from '../utils';

const arithmeticalOperators = '+-*';
const gameTaskQuestion = 'What is the result of the expression?';
const minRandom = 1;
const maxRandom = 20;

const genArithmeticalOperator = () => {
  const selector = genRandom(0, 3);
  return arithmeticalOperators[selector];
};

const calculateResultOfExpression = (first, second, sign) => {
  switch (sign) {
    case '+':
      return String(first + second);
    case '-':
      return String(first - second);
    case '*':
      return String(first * second);
    default:
      return null;
  }
};

const genCalcGameData = () => {
  const data = [];
  const value1 = genRandom(minRandom, maxRandom);
  const value2 = genRandom(minRandom, maxRandom);
  const operator = genArithmeticalOperator();
  const question = `${value1} ${operator} ${value2}`;
  const result = calculateResultOfExpression(value1, value2, operator);

  data.push(question);
  data.push(result);

  return data;
};

const runCalcGame = () => {
  runGame(gameTaskQuestion, genCalcGameData);
};

export default runCalcGame;
