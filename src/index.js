import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';


const upperLimitForRandomNum = 20;

const askName = () => readlineSync.question('May I have your name? ');

const evenOrOdd = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const randomNumber = () => Math.floor(Math.random() * upperLimitForRandomNum);

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

const randomExpressionToString = (pair) => `${car(car(pair))} ${cdr(pair)} ${cdr(car(pair))}`;

const numToString = (num) => String(num);

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

const gameAnswer = (verify, generateNum) => verify(generateNum);

const game = (playFunction, verifyFunction, toString) => {
  const name = askName();

  console.log(`Hello, ${name}!\n`);

  let counterToWin = 3;
  while (counterToWin > 0) {
    const play = playFunction();
    const question = toString(play);

    console.log(`Question : ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const realAnswer = gameAnswer(verifyFunction, play);

    if (answer === realAnswer) {
      console.log('Correct');
      counterToWin -= 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${realAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};

export {
  game, randomNumber, evenOrOdd, realResultOfExpression, randomExpressionToString, randomExpression, numToString,
};
