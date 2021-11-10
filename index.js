const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

let start = () => {
  inquirer.prompt([
    {
      message: "What type of employee are you adding?",
      name: "role",
      type: "list",
      choices: ["Manager", "Engineer", "Intern", "quit"] //to do: add default or error
    }
  ])
    .then(function (response) {
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
    .catch(function (err) {
      console.log(err);
    })
}

function generateEngineer() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Engineer's name:"
    },
    {
      name: "id",
      type: "number",
      message: "Engineer's id number:"
    },
    {
      name: "email",
      type: "input",
      message: "Engineer's email:",
    },
    {
      name: "github",
      type: "input",
      message: "Engineer's github username:"
    },
  ])
    .then(function (res) {
      let eng = new Engineer(res.name, res.id, res.email, res.github); //create new engineer
      employees.push(eng); //add new engineer to array
      console.log(employees); //view array of employees so far
      start();
    })
}

function generateManager() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Manager's name:"
    },
    {
      name: "id",
      type: "number",
      message: "Manager's id:"
    },
    {
      name: "email",
      type: "input",
      message: "Manager's email:",
    },
    {
      name: "office",
      type: "number",
      message: "Manager's office number:"
    },
  ])
    .then(function (res) {
      let mgr = new Manager(res.name, res.id, res.email, res.office);
      employees.push(mgr);
      console.log(employees);
      start();
    })
}

function generateIntern() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Intern's name:"
    },
    {
      name: "id",
      type: "number",
      message: "Intern's id:"
    },
    {
      name: "email",
      type: "input",
      message: "Intern's email:",
    },
    {
      name: "school",
      type: "input",
      message: "Intern's school name:"
    },
  ])
    .then(function (res) {
      let itn = new Intern(res.name, res.id, res.email, res.school);
      employees.push(itn);
      console.log(employees);
      start();
    })
}

function quit() {
  fs.writeFile('./dist/index.html', generateHTML(employees), err => {
    err ? console.log(err) : console.log('Success!');
  });
}

start();