const fs = require('fs');
const inquirer= require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const file = require('./lib/svg.js')


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
            inquirer
            const svg = setLogo();
            prompts(questions)
            .then((responce) => {
                createLogo(responce);
              })
            fs.writeFile('newLogoDesign.svg', svg, (error) => {
            if (error) throw error;
})};
    
renderLogo();