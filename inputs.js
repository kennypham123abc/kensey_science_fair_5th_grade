/*
This is Kensey's 2019 5th Grade Science Fair Project
*/
'use strict';

const inquirer = require('inquirer')

class Character {
  constructor() {
    this.name = '';
    this.level = 1;
  }
}

const player = new Character();

const starting_questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'list',
    name: 'job',
    message: "What is your job?",
    choices: ['superhero', 'engineer', 'pokemon trainer'],
  },
]

const pokemon_questions = [
  {
    type: 'list',
    name: 'pokemon',
    message: "What pokemon do you want?",
    choices: ['bulbasaur', 'charmander', 'squirtle'],
  },
]

inquirer.prompt(starting_questions).then(answers => {
  const keys = Object.keys(answers);
  keys.forEach(function (key) {
    player[key] = answers[key];
    if (key === 'name') {
      console.log(`Hi ${answers.name}! You must be the new ${answers.job}.`);
    }
  });

  inquirer.prompt(pokemon_questions).then(answers => {
    const keys = Object.keys(answers);
    keys.forEach(function (key) {
      player[key] = answers[key];
      console.log(`Great choice!  You and ${answers.pokemon} are a great match!`);
    });
  });
});
