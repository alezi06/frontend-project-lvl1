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

export {
  getRandomNumber,
  isEven,
  getRandomOperation,
  calculate,
  gcd,
};
