# 10 Object-Oriented Programming: Team Profile Generator

  ## Description  
This Node.js command-line application can be used by team managers to create a team profile. The app takes in information about employees and then generates an HTML webpage that displays summaries for each person. 

  ## Table of Contents
- [Installation](#installation)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Questions](#questions)  


## Installation  
 - [Click here for Overview Video](https://youtu.be/Xg-WGRQmbTk)
 - Open an integrated terminal from the root and type "npm i" to install the necessary node packages. 
 - Type "npm start" or "node server.js" to run the inquirer prompts. This is how you will add different employees and their information to create your team. 
 - Finally, you can select "quit" once all employees are added. This will generate an HTML file in the "dist" folder. You may open this in a browser to view your team.


## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Credits  
  Tutors: Tyler Arthur and Jaired Jawed
  ASKBCS Learning Assistants

## License MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
Link: https://www.mit.edu/~amini/LICENSE.md  
      
  ## Contribute  
  N/A  

  ## Test
  See tests folder for Employee, Engineer, Intern, and Manager tests. Open the terminal from there and type "npm run test" (after ensuring you've done "npm i").


  ## Questions  
  For questions, please check out my Github profile or email me.  
    [My Github](https://www.github.com/jones406)  
   [Email Me](mailto:brookejones406@gmail.com)  
