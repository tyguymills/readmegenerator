// var genreadme;
class markDown {
    static generateReadMe(data) {
        return `
        $(data.title)

        $(data.license)
    
        ## Table of Contents
        - [Description](#description)
        - [Usage](#usage)
        - [Installation](#installation)
        - [Contributors](#contributors)
        - [Questions](#question)
        - [License](#installInstructions)
    
        ## Description
        $(data.description)
    
        ## Usage
        $(data.usage)
    
        ## Installation
        $(data.installInstructions)
    
        ## Contributors
        $(data.contributers)
    
        ## Questions
        $(data.question)
        $(data.github)
        $(data.email)
    
        ## License
        $(data.license)`
    }
}

module.exports = markDown;