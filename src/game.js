import readlineSync from 'readline-sync';

const runGame = (tutorial, playFunction) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${tutorial}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  const indexInStorageQuestion = 0;
  const indexInStorageResult = 1;

  for (let wonRoundsCounter = 0; wonRoundsCounter < 3;) {
    const generatedData = playFunction();
    const question = generatedData[indexInStorageQuestion];

    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const realAnswer = generatedData[indexInStorageResult];

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      wonRoundsCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
