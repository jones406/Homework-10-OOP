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
    <h5>${response.name}</h5>
    <div>${response.id}</div>
    <div>${response.email}</div>
    <div>${renderEmailLink(response)}</div>
    <div>${renderGithubLink(response)}</div>  
    </body>
    </html>
    `;
  };

  module.exports = generateHTML