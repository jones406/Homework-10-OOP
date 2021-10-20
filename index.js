const path = require("path");
const inquirer = require("inquirer");
const { generateEngineer, generateIntern, generateManager } = require('path/to/file')

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
      message: "What is your employee's email?"
      // find a way to validate a proper email address
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
}

start();

//generate HTML and CSS files