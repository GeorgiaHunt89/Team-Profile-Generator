const inquire = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Empty array to hold staff place holders
const staff = [];

