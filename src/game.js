import readlineSync from 'readline-sync';

const wonRoundsCounter = 3;

const runGame = (tutorial, genDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${tutorial}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= wonRoundsCounter; i += 1) {
    const [question, realAnswer] = genDataGame();

    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === realAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGame;
