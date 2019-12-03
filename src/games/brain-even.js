import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min, 10);
const isEven = (number) => number % 2 === 0;

const game = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => runGame(message, game);
