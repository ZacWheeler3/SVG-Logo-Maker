const inquirer = require('inquirer');
const {Circle} = require('./lib/shapes')
const questions = [
    {
    type: "input",
    message: "What color do you want your shape to be?",
    name: "color",
    
    
    }
    
    
    
    
    
    
    
    
    
    
    ]

    inquirer
    .prompt(questions)
    // .then(function (data))
    .then((data) => {
 console.log(data);
 let shape; 
 shape = new Circle()
 shape.getColor(data.color)
 console.log(shape);
    })

//     fs.writeFile('log.txt', 'replace this with whatever we are wanting in file', (err) =>
//   err ? console.error(err) : console.log('Success!')
// );