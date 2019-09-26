import readlineSync from 'readline-sync';


const askName = () => readlineSync.question('May I have your name? ');

const gameAnswer = (verify, generateNum) => verify(generateNum);

const game = (playFunction, verifyFunction, toString) => {
  const name = askName();

  console.log(`Hello, ${name}!\n`);

  let counterToWin = 3;
  while (counterToWin > 0) {
    const play = playFunction();
    const question = toString(play);

    console.log(`Question : ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const realAnswer = gameAnswer(verifyFunction, play);

    if (answer === realAnswer) {
      console.log('Correct!');
      counterToWin -= 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${realAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
