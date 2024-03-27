#! /usr/bin/env node
import inquirer from 'inquirer';
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username:',
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:',
    },
];
inquirer.prompt(questions)
    .then((answers) => {
    const username = answers.username;
    const password = answers.password;
    // Replace with your actual authentication logic
    if (username === 'admin' && password === 'password123') {
        console.log('Login successful!');
        // Perform actions for a successful login
    }
    else {
        console.log('Invalid username or password.');
    }
});
