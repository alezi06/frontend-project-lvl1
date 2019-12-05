import { cons } from '@hexlet/pairs';
import runGame from '../game-engine';
import { getRandomNumber, genProgression } from '../utils';

const message = 'What number is missing in the progression?';

const game = () => {
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const hidePosition = getRandomNumber(1, 10);

  const progression = genProgression(startProgression, stepProgression);

  const answer = progression[hidePosition];
  const question = progression.join(' ').replace(String(answer), '..');

  return cons(question, answer);
};

export default () => runGame(message, game);
