import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);

  const iter = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return iter(min, max % min);
  };
  return iter(maxNum, minNum);
};

const getQuestionAndAnswer = () => {
  const first = getRandomNumber(10, 100);
  const second = getRandomNumber(10, 100);

  const question = `${first} ${second}`;
  const answer = String(getCommonDivisor(first, second));

  return cons(question, answer);
};

export default () => runGame(message, getQuestionAndAnswer);
