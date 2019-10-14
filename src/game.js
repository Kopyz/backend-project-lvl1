import readlineSync from 'readline-sync';

const runGame = (gamePoint, playFunction) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gamePoint}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  let wonRoundsCounter = 3;
  while (wonRoundsCounter > 0) {
    const generatedData = playFunction();
    const question = generatedData('question');

    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const realAnswer = generatedData('result');

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      wonRoundsCounter -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
