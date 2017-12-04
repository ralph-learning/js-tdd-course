/*
  Desafio FizzBuzz

  Escreve uma lib que recebe o número e:

  Se o número for divisivel por 3 no lugar do número escreve Fizz
  Se o número for divisivel por 5 no lugar do número escreve Buzz
  Se o número for divisivel por 3 e 5 no lugar do número escreve FizzBuzz
  Se não for multiplo de nada, retorna o número
*/

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('sould return Fizz when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return Buzz when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and multiple of 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return number when is NOT multiple of 3 and 5', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
    expect(FizzBuzz(22)).to.be.equal(22);
  });
});
