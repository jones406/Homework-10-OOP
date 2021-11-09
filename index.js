const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
//const generateHTML = require('./src/generateHTML');
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

function generateCards(employees) {
  for (const employee of employees) {
    let HTMLCard;
    switch (employee) {
      case "Manager":
        HTMLCard = `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Manager</h5>
              <p class="card-text">
              Name: ${Manager.name}<br>
              ID: ${Manager.id}<br>
              E-Mail: ${Manager.email}<br>
              Office Number: ${Manager.officeNumber}
              </p>
          </div>`;
        break;
      case "Intern":
        HTMLCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
            <p class="card-text">
            Name: ${Intern.name}<br>
            ID: ${Intern.id}<br>
            E-Mail: ${Intern.email}<br>
            Office Number: ${Intern.officeNumber}
            </p>
        </div>`;
        break;
      case "Engineer":
        HTMLCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
            <p class="card-text">
            Name: ${Engineer.name}<br>
            ID: ${Engineer.id}<br>
            E-Mail: ${Engineer.email}<br>
            Office Number: ${Engineer.officeNumber}
            </p>
        </div>`;
        break;
      default:
        console.log('idk');
        break;
    }
  }
}

function generateHTML() {
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid"> Employees
      <div class="container">
        
        </div>  
    </div>
  </body>
  </html>`
};

function quit() {
  fs.writeFile('./dist/index.html', generateHTML(), err => {
    err ? console.log(err) : console.log('Success!');
  });
}

//employees array contains employee types and their info in objects. 
//Example:
// [Manager {
//     name: 'salkfjalksjf;lasjkdf',
//     id: 3233,
//     email: 'afdgj',
//     officeNumber: 1
//   },

//   Engineer { 
//      name: 'asdf', 
//      id: 4, 
//      email: 'f', 
//      github: 'f' }
// ]

start();