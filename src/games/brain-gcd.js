import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';

const message = 'Find the greatest common divisor of given numbers.';
const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min, 10);

const gcd = (num1, num2) => {
  const maxNumber = Math.max(num1, num2);
  const minNumber = Math.min(num1, num2);

  const iter = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return iter(min, max % min);
  };
  return iter(maxNumber, minNumber);
};

const game = () => {
  const firstNumber = getRandomNumber(10, 100);
  const secondNumber = getRandomNumber(10, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);

  return cons(question, answer);
};

export default () => runGame(message, game);
