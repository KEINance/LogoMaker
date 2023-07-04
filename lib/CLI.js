// incorporate shapes and svg for output i want
//pulls from the other two

const {
    Circle, Triangle, Square
} = require('./shapes')

const SVG = require('./svg')

const inquirer = require('inquirer');

const fs = require('fs');

class CLI {
    init () {
        return inquirer.prompt([ 
            {
                type:'list',
                name: 'shapes',
                message: 'What shape would your like your logo?',
                choices: ['Circle', "Triangle", "Square"]
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like?'
            },
            {
                type: 'input',
                name: 'shapeText',
                message: 'What are your logo initials?'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like your logo initials?'
            }
        ])
        .then(data => {
            let logo;
            if (data.shapes === 'Circle') {
                logo = new Circle() 
            }
            else if (data.shapes === 'Triagle') {
                logo = new Triangle()
            }
            else {
                logo = new Square()
            }
            logo.setcolor(data.shapeColor)
            const newlogo = new SVG() 
            newlogo.setText(data.shapeText, data.textColor)
            newlogo.setShape(logo)
            
            return fs.writeFileSync('logo.svg', newlogo.render());
        })
    }
};
module.exports = CLI