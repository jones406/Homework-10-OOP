const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

function generateEngineer() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your employee's name?"
    },
    {
      name: "id",
      type: "number",
      message: "What is your employee's id?"
    },
    {
      name: "email",
      type: "input",
      message: "What is your employee's email?",
    },
    {
      name: "github",
      type: "input",
      message: "What is your engineer's github username?"
    },
  ])
  .then(function(res) {
    let eng = new Engineer(res.name, res.id, res.email, res.github);
    employees.push(eng);
    console.log(employees);
    start();
  })
}

function generateManager() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your employee's name?"
    },
    {
      name: "id",
      type: "number",
      message: "What is your employee's id?"
    },
    {
      name: "email",
      type: "input",
      message: "What is your employee's email?",
    },
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
      name: "name",
      type: "input",
      message: "What is your employee's name?"
    },
    {
      name: "id",
      type: "number",
      message: "What is your employee's id?"
    },
    {
      name: "email",
      type: "input",
      message: "What is your employee's email?",
    },
    {
        name: "school",
        type: "input",
        message: "What is your intern's school name?"
      },
    ]) 
}

const start = () => {
  inquirer.prompt([
    {
      message: "What type of employee are you adding?",
      name: "role",
      type: "list",
      choices: ["Manager", "Engineer", "Intern", "quit"]
    },
  ])
  .then(function(response) {
    console.log(response)
    switch (response.role) {
      case "Manager":
        generateManager()
        break;
      case "Intern":
        generateIntern()
        break;
      case "Engineer":
        generateEngineer()
        break;
      default:
        quit()
        break;
    }
  })
  // .then(function (response) { 
  //   fs.writeFile('./dist/index.html', generateHTML(response), err => {
  //       err ? console.log(err) : console.log('Success!')
  //   });
// })
.catch(function (err) {
    console.log(err);
})
}

const quit = () => {
  fs.writeFile('./dist/index.html', generateHTML(employees), err => {
  err ? console.log(err) : console.log('Success!')
})
}

start();