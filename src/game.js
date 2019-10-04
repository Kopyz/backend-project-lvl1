import readlineSync from 'readline-sync';


const showStartMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);
};

const computeGameAnswer = (verifyOrCalculateFunction,
  generatedData) => verifyOrCalculateFunction(generatedData);

const runGame = (gamePoint, playFunction, verifyFunction, generatedDataToString) => {
  showStartMessage(gamePoint);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  let counterToWin = 3;
  while (counterToWin > 0) {
    const generatedData = playFunction();
    const question = generatedDataToString(generatedData);

    console.log(`Question : ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const realAnswer = computeGameAnswer(verifyFunction, generatedData);

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      counterToWin -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
