function renderGithubLink(response) {
  if (response.github) {
    return `  [My Github](https://www.github.com/${response.github})`
  } else {
    return 'No github username provided.'
  }
}
function renderEmailLink(response) {
  if (response.email) {
    return ` [Email](mailto:${response.email})`
  } else {
    return 'No email provided.'
  }
}

let returnEmployees = (arr) => {
  arr.forEach(emp => {
    console.log(emp.getRole())
  });
}
//need a seprate fn for each employee type
// use a for each ex: if emp.getRole() === Engineer then make engineer html
// In the body: call fn that loops thru employees array and gets the role and renders a card for each 
//IF (emp.getRole() === "engineer") { create div, add div class as card (if using bootstrap), and then append everything together}

function generateHTML(response) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    ${returnEmployees(response)}
    </body>
    </html>
    `;
  };

  module.exports = generateHTML