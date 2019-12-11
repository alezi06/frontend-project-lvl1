import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const message = 'What is the result of the expression?';

const operations = '+-*';

const getCalculatedValue = (first, second, action) => {
  switch (action) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const operation = operations[getRandomNumber(0, operations.length)];

  const question = `${first} ${operation} ${second}`;
  const answer = getCalculatedValue(first, second, operation);

  return cons(question, answer);
};

export default () => runGame(message, getQuestionAndAnswer);
