import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (message, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const qa = game();
    const question = car(qa);
    const answer = cdr(qa);

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (answer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
