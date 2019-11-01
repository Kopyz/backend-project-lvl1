import readlineSync from 'readline-sync';

const wonRoundsCounter = 3;

const runGame = (tutorial, genDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${tutorial}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < wonRoundsCounter;) {
    const [question, realAnswer] = genDataGame();

    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
