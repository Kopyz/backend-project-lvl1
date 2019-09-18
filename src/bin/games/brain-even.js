#!/usr/bin/env node

import {
  game, randomNumber, evenOrOdd, numToString,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

game(randomNumber, evenOrOdd, numToString);
