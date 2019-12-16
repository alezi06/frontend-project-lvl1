import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (message, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log();

  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndAnswer = getGameData();
    const question = car(questionAndAnswer);
    const answer = cdr(questionAndAnswer);

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (String(answer) !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
