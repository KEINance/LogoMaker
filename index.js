const fs = require('fs');
const inquirer= require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const svg = require('./lib/svg.js')


//color, shape, and initial prompts for logo
const prompts = [
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
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    }
  ];

function renderLogo() {
    const answers = { text, b_g_colour, font_Colour, shape };
    const responce =  finalLogo

        let selectedShape;
          if (shape === 'Triangle') {
            selectedShape = new Triangle();
          } else if (shape === 'Square') {
            selectedShape = new Square();
          } else {
            selectedShape = new Circle();
          }

    selectedShape.setcolor(b_g_colour),
    shape.setfont(font_Colour),
    shape.setchar(text),
    shape.setshape(selectedShape),

    inquirer
        prompts(answers)
        .then((responce) => {
                const setLogo = responce;
                const svg = setLogo();
                svg(responce);
        })
        
        fs.writeFile('newLogoDesign.svg', svg, (error) => {
        if (error) throw error;
})};
    
renderLogo();