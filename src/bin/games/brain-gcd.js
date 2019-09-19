#!/usr/bin/env node

import {
  game, randomNumForNod, randomNumForNodToString, nodVerify,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');

game(randomNumForNod, nodVerify, randomNumForNodToString);
