#!/usr/bin/env node
import greetings from '../src/cli.js';
import brainEven from '../src/games/even-odd.js';

console.log ('Welcome to the Brain Games!');
const name = greetings();

brainEven(name);
