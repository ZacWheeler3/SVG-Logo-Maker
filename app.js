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
    message: "What shape would you like your logo?",
    name: "shape",
  },
  {
    type: "input",
    message: "What characters would you like displayed?",
    name: "characters",
  },
];

inquirer
  .prompt(questions)
  // .then(function (data))
  .then(({ color, shape, characters }) => {
    let shape;
    if (shape === "circle") {
      shape = new Circle(color, characters);
    } else if (shape === "triangle") {
      shape = new Triangle(color, characters);
    } else {
      shape = new Square(color, characters);
    }

    return shape.render();
  })
  .then((templateString) => {
    fs.writeFile("log.svg", templateString, function (err) {
      err ? console.log(err) : console.log('Success!');
    });
  });


