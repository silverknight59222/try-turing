---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript Basics

JavaScript is the part of the code that controls user interaction. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and they usually get some form of visual feedback on the screen that they did something. Before we continue with our interactive webpage, let’s review some JavaScript basics.

## Data Types

Variables can store different data types. The most common are strings and numbers. A string is a string of characters enclosed in quotation marks. A number is a whole number with no quotation marks. We can even perform operations with number values.

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

## console.log()

As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in replit.

Here's the syntax:

```js
console.log(firstName);
//=> 'Kaitlyn'
console.log(age);
//=> 104
```

<div class="try-it-new">
  <h2>Variables</h2>
  <p>That was a LOT of info! Fork <a href="https://replit.com/@turingschool/javascript-variables#script.js" target="blank">this replit</a> and follow the directions to play around with variables and data types. We will only be working on the JavaScript file. There is one example for the first two steps to help you get started.</p>
  <ul>
    <li>Declare 3 variables, using the labels firstName, lastName, and age. Assign each to an appropriate value.</li>
    <li>Make sure to <code>console.log()</code> each variable to verify you've stored it correctly!</li>
  </ul>
</div>

## Objects

If 

## Arrays

Another data type is an array, which is just a collection of items that belong together. For example, we could have an array of strings, one for the name of each student in a class. 

```js
var students = ['Zanna', 'Ranita', 'Samuel', 'Zachary', 'Anhnhi', 'Marianne'];
```

If we just want to acces one element from an array, we can use `bracket notation` and a number that corresponds with that element. As weird as it may seem, [counting starts with 0 in most programming languages.](https://skillcrush.com/blog/why-programmers-start-counting-at-zero/)

```js
var students = ['Zanna', 'Ranita', 'Samuel', 'Zachary', 'Anhnhi', 'Marianne'];

console.log(students[0]);
//=> 'Zanna'

console.log(students[5]);
//=> 'Marianne'
```

<div class="try-it-new">
  <h2>Arrays</h2>
  <p></p>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
<br>






## JavaScript Summary

- Variables allow us to store information in a container with a label.
- Arrays are a collection of items that belong together.
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

<a href="../js-2">Next Section: Event Listeners</a>
