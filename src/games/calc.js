import runGame from '../game';
import genRandom from '../utils';

const arithmeticalOperators = '+-*';
const gameTaskQuestion = 'What is the result of the expression?';
const minRandom = 1;
const maxRandom = 20;

const genArithmeticalOperator = () => {
  const selector = genRandom(0, arithmeticalOperators.length);
  return arithmeticalOperators[selector];
};

const calculateResultOfExpression = (first, second, sign) => {
  switch (sign) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
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
  const result = String(calculateResultOfExpression(value1, value2, operator));

  data.push(question);
  data.push(result);

  return data;
};

const runCalcGame = () => {
  runGame(gameTaskQuestion, genCalcGameData);
};

export default runCalcGame;
