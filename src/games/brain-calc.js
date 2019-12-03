import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';

const message = 'What is the result of the expression?';
const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min, 10);
const getRandomOperation = () => '+-*'[getRandomNumber(0, 3)];

const calculate = (first, second, action) => {
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

const game = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operation = getRandomOperation();

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operation);

  return cons(question, answer);
};

export default () => runGame(message, game);
