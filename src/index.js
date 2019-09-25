import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const askName = () => readlineSync.question('May I have your name? ');

const randomNumber = () => {
  const upperLimitForRandomNum = 50;
  const bottomLimitForRandomNum = 1;
  return Math.floor(Math.random() * upperLimitForRandomNum) + bottomLimitForRandomNum;
};

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

const randomNumForNod = () => cons(randomNumber(), randomNumber());

const randomProgression = () => {
  const startNum = randomNumber();
  const step = randomNumber();
  const quantityOfNumber = 10;
  const shadowPosition = Math.floor(Math.random() * quantityOfNumber);
  let strProgression = (shadowPosition === 1 ? '..' : '');
  let i = (shadowPosition === 1 ? 1 : 0);
  for (i; i < quantityOfNumber; i += 1) {
    if (i === shadowPosition) {
      strProgression += ' ..';
    } else {
      strProgression += ` ${startNum + (i * step)}`;
    }
  }
  return cons(strProgression, (startNum + (shadowPosition * step)));
};

const randomProgressionToString = (pair) => car(pair);

const randomNumForNodToString = (pair) => `${car(pair)} ${cdr(pair)}`;

const numToString = (num) => String(num);

const randomExpressionToString = (pair) => `${car(car(pair))} ${cdr(pair)} ${cdr(car(pair))}`;

const progressionVerify = (pair) => String(cdr(pair));

const primeNumberVerify = (num) => {
  let diviner = num - 1;
  while (diviner > 1) {
    if (num % diviner === 0) {
      return 'no';
    }
    diviner -= 1;
  }
  return 'yes';
};

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

const evenOrOdd = (number) => ((number % 2 === 0) ? 'yes' : 'no');

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
      console.log('Correct!');
      counterToWin -= 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${realAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  game, randomNumber, evenOrOdd, realResultOfExpression,
  randomExpressionToString, randomExpression, numToString,
  randomNumForNod, randomNumForNodToString, nodVerify,
  randomProgression, randomProgressionToString, progressionVerify,
  primeNumberVerify, askName,
};
