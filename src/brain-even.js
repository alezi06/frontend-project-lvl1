import readlineSync from 'readline-sync';

const MIN = 1;
const MAX = 100;
const message = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = () => parseInt(Math.random() * (MAX - MIN) + MIN, 10);
const isEven = (number) => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
