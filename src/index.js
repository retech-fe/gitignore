#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';
import gitignoreContent from './config/gitignore.js';


(async () => {
  const { option } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'option',
      message: 'Get the .gitignore file',
      default: false,
    },
  ]);
  if (option) {
    const cwd = process.cwd();
    fs.writeFileSync(`${cwd}/.gitignore`, gitignoreContent);
    console.log('.gitignore successfully created');
  } else {
    console.log(`.gitignore creation failed choose 'y' to create it`);
  }
})();