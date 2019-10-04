import runGame from '../game';
import genRandomNumber from '../number';

const isEven = (number) => (number % 2 === 0);

const translateBoolean = (number) => (isEven(number) ? 'yes' : 'no');

const runEvenGame = () => {
  const gameTaskQuastion = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(gameTaskQuastion, genRandomNumber, translateBoolean, String);
};

export default runEvenGame;
