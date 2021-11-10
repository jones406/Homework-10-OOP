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
          ${HTMLCard}
          </div>  
      </div>
    </body>
    </html>`
  };