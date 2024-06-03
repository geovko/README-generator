// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/${license})`;
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
  return `# ${data.title}  
  ${renderLicenseSection(data.license)}

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
  
  ${data.license}  
  
  ## Questions  
  
  If you'd like to see more of my projects, please visit [My GitHub Profile](https://github.com/${data.username}), or if you'd like to reach me directly, please contact my [email](${data.email}).  
  
  `;
}

module.exports = generateMarkdown;