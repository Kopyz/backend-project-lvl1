#!/usr/bin/env node

import {
  game, randomExpression, randomExpressionToString, realResultOfExpression,
} from '../..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

game(randomExpression, realResultOfExpression, randomExpressionToString);
