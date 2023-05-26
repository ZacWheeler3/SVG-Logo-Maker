class Shapes {
  constructor(color) {
    this.color = color;
  }

  getColor(color) {
    this.color = color;
  }
}

class Circle extends Shapes {
  constructor(color, text, textcolor) {
    super(color);
    this.text = text;
    this.textcolor = textcolor;
  }

  render() {
    return `<svg><circle cx="150" cy="100" r="80" fill="${this.color}" /><text font-size="50" text-anchor="middle" fill="${this.textcolor}" x="150" y="110">
    ${this.text}
  </text></svg>`;
    // return '<circle cx="150" cy="100" r="80" fill="' + this.color + '" />'
  }
}

class Square extends Shapes {
  constructor(color, text, textcolor) {
    super(color);
    this.text = text;
    this.textcolor = textcolor;
  }
  render() {
    return `<svg><rect width="300" height="200" fill="${this.color}" />
    <text font-size="50" text-anchor="middle" fill="${this.textcolor}" x="150" y="120">
      ${this.text}
    </text>
  </svg>`;
  }
}

class Triangle extends Shapes {
  constructor(color, text, textcolor) {
    super(color);
    this.text = text;
    this.textcolor = textcolor;
  }
  render() {
    return `<svg>
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text font-size="100" dominant-baseline="middle" text-anchor="middle" stroke="${this.textcolor}"
          x="150" y="120">
      ${this.text}
    </text>
  </svg>`;
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
