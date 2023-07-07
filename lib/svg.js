class SVG {
    constructor() {
        this.shape = '';
        this.text = '';
    }
    setShape(selectedShape) {
        this.shape = selectedShape.render();
    }
    // setText(selectedText, selectedColor) {
    //     this.text = `<text x="135" y="120" fill='${selectedColor}'>${selectedText}</text>`;
    // }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
};

module.exports = SVG;