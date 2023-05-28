```
Description 
```
SVG logo maker that takes in user prompts to create the requested image. 
```
Usage
```
Github Repo: https://github.com/ZacWheeler3/SVG-Logo-Maker
Live site: https://zacwheeler3.github.io/SVG-Logo-Maker/

Code created through JavaScript to structure questions and using node, inquirer, and a debugger to ensure the project would create the requested images based upon prompts

```
User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

```
Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered cd

 ![alt text](./images/SVG%20readme%20pic.png)