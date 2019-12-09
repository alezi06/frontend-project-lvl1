import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const PROGRESSION_LENGTH = 10;

const message = 'What number is missing in the progression?';

const getProgression = (start, step, progressionLength) => {
  const array = [];

  for (let i = 0; i < progressionLength; i += 1) {
    array[i] = start + step * i;
  }
  return array;
};

const getQuestionAndAnswer = () => {
  const startProgression = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(1, 10);
  const hiddenElementPosition = getRandomNumber(1, PROGRESSION_LENGTH);

  const progression = getProgression(startProgression, stepProgression, PROGRESSION_LENGTH);

  const answer = progression[hiddenElementPosition];
  const question = progression.join(' ').replace(String(answer), '..');

  return cons(question, answer);
};

export default () => runGame(message, getQuestionAndAnswer);
