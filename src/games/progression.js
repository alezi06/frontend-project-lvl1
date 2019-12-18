import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const message = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result[i] = start + step * i;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);

  const progression = getProgression(startProgression, stepProgression, progressionLength);

  const answer = String(progression[hiddenElementPosition]);
  const question = progression.join(' ').replace(String(answer), '..');

  return cons(question, answer);
};

export default () => runGame(message, getQuestionAndAnswer);
