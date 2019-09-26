import { cons, cdr, car } from '@hexlet/pairs';
import game from './game';
import { randomNumber } from './even';

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

const progressionVerify = (pair) => String(cdr(pair));

const randomProgressionToString = (pair) => car(pair);

const progression = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?\n');

  game(randomProgression, progressionVerify, randomProgressionToString);
};

export default progression;
