// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else {
    const str = license;
    let result = '';
    for (i=0; i <license.length; i++) {
      if (str[i] == '-') {
        result += '%20';
      } else {
        result += str[i];
      }
    }
    result += '-blue';
    return `![License ${license}](https://img.shields.io/badge/${result}.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == '') {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == '') {
    return '';
  } else {
    const badge = `[${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
    return badge;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<div align="center">

  # ${data.title}  

  ${renderLicenseSection(data.license)}

</div>

  ## Table of Contents

  - [Description](#Description)   
  - [Installation](#Installation) 
  - [Usage](#Usage)   
  - [How To Contribute](#How-to-Contribute)  
  - [Tests](#Tests)  
  - [License](#License)  
  - [Questions](#Questions)  

  ## Description  

  ${data.description}  
  
  ## Installation  
  
  ${data.install}  
  
  ## Usage  
  
  ${data.usage}  
  
  ## How to Contribute  
  
  ${data.contribute}  
  
  ## Tests  
  
  ${data.tests}  
  
  ## License  
  
  This application is covered under the license known as ${data.license}.  
  
  ## Questions  
  
  If you'd like to see more of my projects, please visit [My GitHub Profile](https://github.com/${data.username}), or if you'd like to reach me directly, please contact me through this email: ${data.email}.  
  
  `;
}

module.exports = generateMarkdown;