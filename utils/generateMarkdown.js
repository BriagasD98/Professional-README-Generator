// TODO: Create a function that returns a license badge based on which license is passed in
const licenseInfoList = [
    {
      name: "GPL 3.0",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      link: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
      name: "Mozilla 2.0",
      badge:
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      link: "https://opensource.org/licenses/MPL-2.0)",
    },
    {
      name: "Apache 2.0",
      badge:
        "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      link: "https://opensource.org/licenses/Apache-2.0)",
    },
    {
      name: "MIT",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      link: "https://opensource.org/licenses/MIT",
    },
    {
      name: "IBM 1.0",
      badge:
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
      link: "https://opensource.org/licenses/IPL-1.0",
    }
  ];
  
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license) {
    const selectedLicenseList = licenseInfoList.filter(
      (item) => item.name === license
    );
    return selectedLicenseList[0].badge;
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license) {
      const selectedLicenseList = licenseInfoList.filter(
        (item) => item.name === license
      );
      return selectedLicenseList[0].link;
    }
    else {
      return ""
    }
   
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
      if (license) {
        return `${license}`;
      } else {
        return ""
      }
  }

// function to generate markdown for README
function generateMarkdown(data) {
    return `
    ${renderLicenseBadge(data.license)}
    
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
  ## Usage
  ${data.projectUsage}
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