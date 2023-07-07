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
        const logoInitials = `<text x="135" y="120" fill='${selectedColor}'>${selectedText}</text>`
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}'/>`
}
}
//square class
class Square extends Shape {
    render() {
        const logoInitials = `<text x="135" y="120" fill='${selectedColor}'>${selectedText}</text>`
        return `<rect width="120" height="120" fill='${this.color}'/>`
    }
}

//circle class
class Circle extends Shape {
    render() {
        const logoInitials = `<text x="135" y="120" text-anchor='middle' fill='${selectedColor}'>${selectedText}</text>`;
        return `<circle cx="120" cy="120" r="80" stroke-width="4" fill='${this.color}'/>`
    }
}

module.exports = {Triangle, Square, Circle};