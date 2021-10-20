const inquirer = require("inquirer");
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateEngineer(obj) {
    inquirer.prompt([
      {
        name: "github",
        type: "input",
        message: "What is your engineer's github username?"
      },
    ])
    .then(function(response) {
      console.log(response, obj.name, obj.id)
    })
}

function generateManager() {
    inquirer.prompt([
        {
          name: "officeNumber",
          type: "number",
          message: "What is your Manager's office number?"
        },
      ]) 
}

function generateIntern() {
    inquirer.prompt([
        {
          name: "school",
          type: "input",
          message: "What is your intern's school name?"
        },
      ]) 
}

module.exports = { generateEngineer, generateManager, generateIntern }

