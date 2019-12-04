import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';
import { getRandomNumber, gcd } from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const firstNumber = getRandomNumber(10, 100);
  const secondNumber = getRandomNumber(10, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);

  return cons(question, answer);
};

export default () => runGame(message, game);
