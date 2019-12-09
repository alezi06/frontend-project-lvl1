import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (acc) => {
    if (number % acc === 0 || number === 1) {
      return false;
    }
    if (acc > number / 2) {
      return true;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => runGame(message, getQuestionAndAnswer);
