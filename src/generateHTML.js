let returnEmployees = (arr) => {
  arr.forEach(emp => {
    if(emp.getRole() === "Engineer") {
      `span class="card-title">Engineer</span>` 
    } else if(emp.getRole() === "Manager") {
      `span class="card-title">Manager</span>`
    } else if(emp.getRole() === "Intern") {
      `span class="card-title">Intern</span>`
    }
    console.log(emp.getRole());
  })
}

    function generateHTML(response) {
      return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
    
    ${returnEmployees(response)}
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    </html>
    `;
    };

    module.exports = generateHTML