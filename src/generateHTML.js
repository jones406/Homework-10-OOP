function generateHTML(response) {
  return
  `
  <!DOCTYPE html>
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
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${..}}</h5>
              <p class="card-text">
              Name: ${name}
              ID: ${id}
              E-Mail: ${email}
              Office Number: ${officeNumber}
              </p>
          </div>
        </div>  
    </div>
  </body>
  </html>
  `
};

module.exports = generateHTML