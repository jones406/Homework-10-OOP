const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const { generateEngineer, generateIntern, generateManager } = require('./src/prompts')

const start = () => {
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
      name: "role",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"]
    },
  ])
  .then(function(response) {
    console.log(response)
    switch (response.role) {
      case "Manager":
        generateManager(response)
        break;
      case "Engineer":
        generateIntern(response)
        break;
      case "Intern":
        generateEngineer(response)
        break;
      default:
        quit()
        break;
    }
  })
  .then(function (response) { 
    fs.writeFile('index.html', generateHTML(response), err => {
        err ? console.log(err) : console.log('Success!')
    });
})
.catch(function (err) {
    console.log(err);
})
}

start();


