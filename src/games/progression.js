import { cons, cdr, car } from '@hexlet/pairs';
import runGame from '../game';
import { genRandomNumber, genDataFunction } from '../utils';

const gameTaskQuestion = 'What number is missing in the progression?';
const minRandomNumber = 1;
const maxRandomNumber = 20;

const genRandomProgression = () => {
  const firstNumberOfProgression = genRandomNumber(minRandomNumber, maxRandomNumber);
  const stepOfProgression = genRandomNumber(minRandomNumber, maxRandomNumber);
  const quantityOfNumbersInProgression = 9;

  const shadowPosition = genRandomNumber(0, quantityOfNumbersInProgression + 1);

  let progressionInString = (shadowPosition === 0 ? '..' : '');
  let i = (shadowPosition === 0 ? 1 : 0);

  for (i; i <= quantityOfNumbersInProgression; i += 1) {
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

const genProgressionGameData = () => genDataFunction(genRandomProgression,
  getShadowValue, randomProgressionToString);

const runProgressionGame = () => {
  runGame(gameTaskQuestion, genProgressionGameData);
};

export default runProgressionGame;
