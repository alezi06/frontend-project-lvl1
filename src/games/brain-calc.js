import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';
import { getRandomNumber, getRandomOperation, calculate } from '../utils';

const message = 'What is the result of the expression?';

const game = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operation = getRandomOperation();

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operation);

  return cons(question, answer);
};

export default () => runGame(message, game);
