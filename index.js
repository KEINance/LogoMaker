const fs = require('fs');
const inquirer= require('inquirer');
const {Triangle, Square, Circle} = require('./shapes');


//color, shape, and initial prompts for logo
inquirer.prompt (
    [
    {
        type: "input",
        name: 'text',
        message: "What characters would you like your logo to be?",
    },
    {
        type: "input",
        name: 'b-g-colour',
        message: "What colour would you like your logo background to be?",
    },
    {
        type: "input",
        name: 'font-colour',
        message: "What colour would you like your logo initials colour to be?",
    },
    {
        type: "list",
        name: 'shapes',
        choices: ['Circle', 'Triangle', 'Square'],
    }
]);

function createLogo() {
    inquirer.prompt(inqueriers).then((answers) => {
        const {text, b-g-colour, font-colour, shapes} = answers
        let shapes;
        if(shapes === 'triangle') {
            shapes = new Circle();
        } else if(shape === 'square') {
            shapes = new Square();
        } else {
            shape = new Circle();
        }

        shape.setColor(b-g-colour);

        fs.writeFile('logo.svg', svg, (error) => {
            if (error) throw error,
        });
    })
}

createLogo();