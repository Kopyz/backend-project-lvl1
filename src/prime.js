import game from './game';
import { randomNumber, numToString } from './even';

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

const prime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

  game(randomNumber, primeNumberVerify, numToString);
};

export default prime;
