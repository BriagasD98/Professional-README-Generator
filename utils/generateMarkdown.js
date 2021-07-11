 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

// function to generate markdown for README
function generateMarkdown(data) {
    return `
  #  ${data.projectTitle}
  ${data.badge}
  ${data.projectDescription}
  <br/>
  <br/>
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  <br/>
  <br/>

  ## Installation
  ${data.projectInstall}
  <br/>
  <br/>
  ## Instructions
  ${data.projectInstructions}
  <br/>
  <br/>
  ## License
  [${data.projectLicense}](${data.licenseURL})
  <br/>
  <br/>
  ## Contributing
  ${data.projectContribute}
  <br/>
  <br/>
  ## Tests
  ${data.projectTest}
  <br/>
  <br/>
  ## Questions  
  If you have questions about the project you can email me, or you can open an issue in the GitHub repository.
  My GitHub profile is [${data.projectGithub}](https://github.com/${data.projectGithub})  
    
  Email: [${data.userEmail}](mailto:${data.userEmail}).  
  `;
  }
  
  module.exports = generateMarkdown;