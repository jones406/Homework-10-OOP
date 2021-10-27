function renderGithubLink(response) {
  if (response.github) {
    return `  [My Github](https://www.github.com/${response.github})`
  } else {
    return 'No github username provided.'
  }
}
function renderEmailLink(response) {
  if (response.email) {
    return ` [Email Me](mailto:${response.email})`
  } else {
    return 'No email provided.'
  }
}

function generateHTML(response) {
    console.log("User responses: " + response.name + response.id + response.email);
    return `${response.name}
    ${response.id}  
    ${response.email}
    ${renderEmailLink(response)}  
    ${renderGithubLink(response)}  
    `;
  };

