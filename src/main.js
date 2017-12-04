const sum = (numberA, numberB) => numberA + numberB;
const sub = (numberA, numberB) => numberA - numberB;
const mult = (numberA, numberB) => numberA * numberB;
const div = (numberA, numberB) => (numberB === 0) ? 'Não é possivel fazer divisão por zero!' : numberA / numberB;

export {
  sum,
  sub,
  mult,
  div,
};
