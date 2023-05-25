class Shapes {
  constructor(color) {
    this.color = color;
  }

  getColor(color) {
    this.color = color;
  }
}

class Circle extends Shapes {
    constructor(color,text) {
        super(color)
        this.text = text;
    }

  render() {
    return `<svg><circle cx="150" cy="100" r="80" fill="${this.color}" /><text font-size='50'>${this.text}</text</svg>`;
    // return '<circle cx="150" cy="100" r="80" fill="' + this.color + '" />'
  }
}

class Square extends Shapes {
    constructor(color,text) {
        super(color)
        this.text = text;
    }
  render() {
    return `<svg><rect width="100%" height="100%" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};

// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>
