class SVG {
    constructor() {
        this.shape = '';
        this.text = '';
    }
    setShape(selectedShape) {
        this.shape = selectedShape.render();
    }
    setText(initials, color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${initials}</text>`;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

module.exports = SVG;