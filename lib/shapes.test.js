const {Triangle, Square, Circle} = require('./shapes');



//run tests for checks for circle, triangle, square
//Triangle
describe ("Triangle", () => {
    test('should return the selected color'), () => {
        const newTriangle = new Triangle();
        newTriangle.setcolor('green');
        expect(newTriangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill='green'/>`);
    }
});

// square 
describe ("Square", () => {
    test('should return the selected color'), () => {
        const newSquare = new Square();
        newSquare.setcolor('green');
        expect(newSquare.render()).toEqual(`<rect width="300" height="100" style="fill='green'/>`);
    }
});


//circle 
describe ("Circle", () => {
    test('should return the selected color'), () => {
        const newCircle = new Circle();
        newCircle.setcolor('green');
        expect(newCircle.render()).toEqual(`<circle cx="50" cy="50" r="40" stroke-width="4" fill='green'/>`)
    }
});