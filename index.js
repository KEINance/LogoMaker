const fs = require('fs');
const inquirer= require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');


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
        name: 'b_g_colour',
        message: "What colour would you like your logo background to be?",
    },
    {
        type: "input",
        name: 'font_Colour',
        message: "What colour would you like your logo initials colour to be?",
    },
    {
        type: "list",
        name: 'shapes',
        choices: ['Circle', 'Triangle', 'Square'],
    }
]);

function createLogo() {
    inquirer.prompt(query).then((answers) => {
        const {text, b_g_colour, font_Colour, shapes} = answers
        let shape;
        if(shapes === 'triangle') {
            shapes = new Circle();
        } else if(shape === 'square') {
            shapes = new Square();
        } else {
            shape = new Circle();
        }

        shape.setColor(b_g_colour);
        shape.setFont(font_Colour);
        shape.setChar(text);

        
        fs.writeFile('logo.svg', svg, (error) => {
            if (error) throw error;
        });
        
})};

createLogo();