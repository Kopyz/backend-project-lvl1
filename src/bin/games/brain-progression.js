#!/usr/bin/env node

import {
  game, randomProgression, randomProgressionToString, progressionVerify,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?\n');

game(randomProgression, progressionVerify, randomProgressionToString);
