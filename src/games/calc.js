import runGame from '../game';
import generateRandom from '../utils';

const arithmeticalOperators = '+-*';
const gameTask = 'What is the result of the expression?';
const min = 1;
const max = 20;

const generateArithmeticalOperator = () => {
  const indexOperator = generateRandom(0, arithmeticalOperators.length - 1);
  return arithmeticalOperators[indexOperator];
};

const calculate = (first, second, sign) => {
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

const generateCalcGameData = () => {
  const data = [];
  const value1 = generateRandom(min, max);
  const value2 = generateRandom(min, max);
  const operator = generateArithmeticalOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = String(calculate(value1, value2, operator));

  data.push(question);
  data.push(correctAnswer);

  return data;
};

const runCalcGame = () => {
  runGame(gameTask, generateCalcGameData);
};

export default runCalcGame;
