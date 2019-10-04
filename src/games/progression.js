import { cons, cdr, car } from '@hexlet/pairs';
import runGame from '../game';
import genRandomNumber from '../number';

const genRandomProgression = () => {
  const firstNumberOfProgression = genRandomNumber();
  const stepOfProgression = genRandomNumber();
  const quantityOfNumbersInProgression = 10;

  const shadowPosition = Math.floor(Math.random() * quantityOfNumbersInProgression);

  let progressionInString = (shadowPosition === 1 ? '..' : '');
  let i = (shadowPosition === 1 ? 1 : 0);

  for (i; i < quantityOfNumbersInProgression; i += 1) {
    if (i === shadowPosition) {
      progressionInString += ' ..';
    } else {
      progressionInString += ` ${firstNumberOfProgression + (i * stepOfProgression)}`;
    }
  }
  return cons(progressionInString,
    (firstNumberOfProgression + (shadowPosition * stepOfProgression)));
};

const getShadowValue = (pair) => String(cdr(pair));

const randomProgressionToString = (pair) => car(pair);

const runProgressionGame = () => {
  const gameTaskQuestion = 'What number is missing in the progression?';

  runGame(gameTaskQuestion, genRandomProgression, getShadowValue,
    randomProgressionToString);
};

export default runProgressionGame;
