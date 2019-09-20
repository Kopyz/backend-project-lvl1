#!/usr/bin/env node

import {
  game, randomNumber, primeNumberVerify, numToString,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

game(randomNumber, primeNumberVerify, numToString);
