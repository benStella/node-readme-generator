import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information for your project."
    },
    {
        type: "input",
        name: "license",
        message: "Please provide license information for your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contributing information for your project."
    }
]).then(answers => {
    const data = `# ${answers.title}\n## Description\n${answers.description}\n## Table of Contents\n- 
    [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- 
    ## Installation\n${answers.installation}\n## Usage\n${answers.usage}\n## License\n${answers.license}\n
    ## Contributing\n${answers.contributing}\n`;

    fs.writeFile("created_readme/README.md", data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created successfully.");
    });
}).catch(error => {
    console.error(error);
});