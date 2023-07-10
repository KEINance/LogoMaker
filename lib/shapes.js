class Shape {
    constructor() {
        this.color = '';
    }
    setcolor(selectedColor) {
        this.color = selectedColor;
    }
}

// triangle class
// call new Triangle()
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//square class
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

//circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Square, Circle };