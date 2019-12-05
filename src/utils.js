const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min, 10);

const isEven = (number) => number % 2 === 0;

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

const gcd = (num1, num2) => {
  const maxNumber = Math.max(num1, num2);
  const minNumber = Math.min(num1, num2);

  const iter = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return iter(min, max % min);
  };
  return iter(maxNumber, minNumber);
};

const genProgression = (start, step) => {
  const array = [];
  array[0] = start;
  for (let i = 1; i < 10; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

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

export {
  getRandomNumber,
  isEven,
  getRandomOperation,
  calculate,
  gcd,
  genProgression,
  isPrime,
};
