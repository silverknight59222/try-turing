---
layout: lesson
---

Want to go back?
- [Lesson Home Page](../)
- [Overview](../overview)
- [HTML](../html)


# JavaScript Overview

JavaScript is the part of the code that controls user interaction. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and they usually get some form of visual feedback on the screen that they did something. Before we continue with our interactive webpage, let’s review some JavaScript basics.

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
var age = 21;
var school = 'Turing School of Software & Design';
var firstName = 'Sal';
```

## Arrays

Another data type is an array, which is just a collection of items that belong together. For example, we could have an array of friends, one string for each friend's name. Or we could have an array of numbers, one number for each friend's age.

Arrays are helpful, because we can perform the same action on every item of the array with a method called forEach.

```js
var friends = ['Enrique', 'Selena', 'Shakira', 'Marc', 'Ricky', 'Jennifer'];
```

## console.log()

As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in replit.

Here's the syntax:

```js
console.log(firstName);
//=> 'Sal'
console.log(age);
//=> 21
```
<br>

<div class="try-it-new">
  <h2>Variables</h2>
  <p>That was a LOT of info! Fork <a href="https://replit.com/@turingschool/javascript-variables#script.js" target="blank">this replit</a> and follow the directions to play around with variables and data types. We will only be working on the JavaScript file. There is one example for the first two steps to help you get started.</p>
  <ul>
    <li>Declare 3 variables, using the labels name, email, and numberOfPets. Assign each to an appropriate value.</li>
    <li>Make sure to <code>console.log()</code> each variable to verify you've stored it correctly!</li>
    <li><strong>Finished?</strong> Declare another variable that stores an array. You choose the name of the variable and the values!</li>
  </ul>
</div>


## JavaScript Summary

- Variables allow us to store information in a container with a label.
- Arrays are a collection of items that belong together.
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

## Up Next

- [Wrap Up](../wrap-up)
