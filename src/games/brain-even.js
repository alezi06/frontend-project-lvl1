import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';
import { getRandomNumber, isEven } from '../utils';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => runGame(message, game);
