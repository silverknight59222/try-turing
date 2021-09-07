---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript Overview

JavaScript is the part of the code that allows our user to interact with the page. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and the user usually gets some form of visual feedback on the screen that they did something. Before we continue with our FAQ page, let’s review some JavaScript basics.

## Data Types

Variables can store different data types. The most common are strings and numbers. A string is a string of characters enclosed in quotation marks. A number is a whole number with no quotation marks. We can perform operations with number values, but we will only be using strings today!

```js
'I am a string!'

"I can hold emojis: 💥🦄✨, lots of spaces:     , and special characters: $#@%"

4 + 2
//=> 6

7 * 3
//=> 21
```

## Variables

Variables allow us to store information in a container with a label. We can then use that label to reference the contents of that container. 

In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we're about to make a new variable, or _declare a variable_. Here are a few examples of JavaScript variables:

```js
var age = 104;
var school = 'Turing School of Software & Design';
var firstName = 'Kaitlyn';
```

## Arrays

Another data type is an array, which is just a collection of items that belong together. For example, we could have an array of strings, one for the name of each student in a class. Or we could have an array of numbers, one for the number of students in each class.

Arrays are helpful, because we can perform the same action on every item of the array with a method called forEach.

```js
var students = ['Chelsea', 'Alesha', 'Tracey', 'Lindsey', 'Erin', 'Anna'];
```

## console.log()

As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in CodePen.

Here's the syntax:

```js
console.log(name);
//=> 'Kaitlyn'
console.log(age);
//=> 104
```

<div class="try-it-new">
  <h2>Try It</h2>
  <p>That was a LOT of info! Fork <a href="https://replit.com/@turingschool/javascript-variables#script.js" target="blank">this replit</a> and follow the directions to play around with variables and data types. We will only be working on the JavaScript file.</p>
  <ul>
    <li>Declare 3 variables, using the names name, email, and numberOfPets. Assign each to an appropriate value.</li>
    <li>Make sure to console.log each variable to verify you've stored it correctly!</li>
    <li><strong>Finished?</strong> Declare another variable that stores an array. You choose the name of the variable and the values!</li>
  </ul>
</div>


## JavaScript Summary

- Variables allow us to store information in a container with a label.
- Arrays are a collection of items that belong together.
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

<a href="../js-2">Next Section: Interactive FAQ</a>
