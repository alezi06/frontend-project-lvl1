import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';
import { getRandomNumber, isPrime } from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => runGame(message, game);
