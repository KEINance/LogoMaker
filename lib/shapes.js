class Shape {
    constructor() {
        this.color = '';
    }
setcolor(selectedColor) {
    this.color = selectedColor
}
}

// triangle class
// call new Triangle()
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}'/>`
    };
}

//square class
class Square extends Shape {
    render() {
        return `<rect width="300" height="100" style="fill='${this.color}'/>`
    };
}

//circle class
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke-width="4" fill='${this.color}'/>`
    };
}

module.exports = {Triangle, Square, Circle};