# Tochomot - Week 04 Project
## JavaScript Fundamentals - Calculator & Grade Tracker

A JavaScript project with a calculator, a student grade tracker, practice tasks (Tasks 7.1-8.4), and 5 daily challenges.

## Live Demo
Open index.html with Live Server, then press F12 → Console to see the output.

## Features
- Calculator with add, subtract, multiply, divide, %, ** and zero-division check
- Grade tracker with addStudent, addGrade, getAverage, getTopStudent, getStudentsAbove
- Practice tasks: variables, functions, control flow, array methods, objects, JSON
- Daily challenges: FizzBuzz, reverse string, largest number, remove duplicates, palindrome

## Technologies
- HTML5, JavaScript (ES6), Git & GitHub, Node.js

## Project Structure
- index.html - loads all JS files
- main.js - practice tasks 7.1 to 8.4
- calculator.js - calculator functions
- grade-tracker.js - student grade tracker
- daily-challenges/ - fizzbuzz.js, reverse-string.js, largest-number.js, remove-duplicates.js, palindrome.js
- README.md - project documentation

## What I Learned
- `===` stopped "5" equalling 5. In Week 4 I had a bug where `"5" == 5` was true, but `"5" === 5` is false. That fixed my grade comparison, because my grade tracker was matching the wrong student when I used `==`.
- Functions must `return` a value. When I only used `console.log` inside my calculator, my tests printed `undefined`. Once I changed it to `return num1 + num2`, `calculate(5, "+", 3)` correctly gave 8.
- `map`, `filter`, `reduce`, `find` are cleaner than manual loops for working with student grades. I used `reduce` to get the total for averages and `find` to get a student by name.

## Challenges Faced
- My first divide-by-zero crashed the calculator. I fixed it by returning "Error: Cannot divide by zero" instead of dividing.
- My `main.js` file had a capital M at first - it worked on Windows but broke on GitHub. I renamed it to lowercase `main.js`.
- My first `getAverage` gave `NaN` because I divided by an empty grades array. I fixed it by checking if the student exists first.