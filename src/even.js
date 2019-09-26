import game from './game';

const randomNumber = () => {
  const upperLimitForRandomNum = 50;
  const bottomLimitForRandomNum = 1;
  return Math.floor(Math.random() * upperLimitForRandomNum) + bottomLimitForRandomNum;
};

const evenOrOdd = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const numToString = (num) => String(num);

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  game(randomNumber, evenOrOdd, numToString);
};

export { randomNumber, numToString };
export default even;
