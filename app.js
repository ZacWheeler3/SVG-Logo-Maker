const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "What color do you want your logo to be?",
    name: "color",
  },
  {
    type: "input",
    message: "What color do you want your logo text to be?",
    name: "textcolor",
  },
  {
    type: "input",
    message: "What shape would you like your logo?",
    name: "shape",
  },
  {
    type: "input",
    message: "What characters would you like displayed?",
    name: "text",
  },
];

inquirer
  .prompt(questions)
  // .then(function (data))
  .then(({ color, textcolor, shape, text }) => {
    // let shape;
    if (shape === "circle") {
      shape = new Circle(color, textcolor, text);
    } else if (shape === "triangle") {
      shape = new Triangle(color, textcolor, text);
    } else {
      shape = new Square(color, textcolor, text);
    }

    return shape.render();
  })
  .then((templateString) => {
    fs.writeFile("log.svg", templateString, function (err) {
      err ? console.log(err) : console.log('Success!');
    });
  });


