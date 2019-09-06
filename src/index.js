import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const evenOrOdd = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const name = askName();

  console.log(`Hello, ${name}!\n`);

  let counterToWin = 3;
  while (counterToWin > 0) {
    const randomNumber = Math.floor(Math.random() * 100);

    console.log(`Question : ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === evenOrOdd(randomNumber)) {
      console.log('Correct');
      counterToWin -= 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${evenOrOdd(randomNumber)}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};

export { game, askName };
