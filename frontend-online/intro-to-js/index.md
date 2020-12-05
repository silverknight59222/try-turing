---
layout: lesson
---

# Intro to JavaScript

<a href="../">Back to Curriculum Index</a>

## Goals

- Identify Strings and Numbers as JavaScript data types
- Create variables to store Strings and Numbers
- Combine static string data with variables using String interpolation

## What is JavaScript?

JavaScript is a language that allows us to _interact_ with a webpage. We can write JavaScript that can access HTML elements and change their appearance or content based on the way a user interacts with the page.

## Strings and Numbers

In programming, a String is a series of characters (alpha, numeric, or symbol) between quotation marks. We classify strings as a **data type**. This is true in any programming language, not just JavaScript.

```js
'I am a string!'

'string-here~~~~~'

"I can also be in double-quotes!"

"I can hold emojis: 💥🦄✨, lots of spaces:     , and special characters: $#@%"
```

Another data type in JavaScript is a Number. Just like we interact with numbers on a daily basis and in math class, JavaScript can work with numbers. Here are a couple of operations in use:

```js
4 + 2
//=> 6

7 * 3
//=> 21
```

## console.log()

As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in CodePen.

Here's the syntax:

```js
console.log('I am a string!');
console.log(4 + 5);
```

When we run the code above, we will see the associated values print out in the console.

<img src="{{ site.url }}/assets/images/console-log.png" alt="screen shot of CodePen and arrow pointing to 'open console' button">

## Variables

A variable is like a box with a label on it. You can put something in the box, label it, and be able to reference that thing later by its label.

In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we're about to make a variable.

Variables can store strings (text in between quotation marks), numbers, HTML elements, among many other things! Here are a few examples of JavaScript variables:


```js
var age = 104;
var school = 'Turing School of Software & Design';
var firstName = 'Amy';
```

### Why Variables?

Since JavaScript is in charge of user interactions, we may want to hold onto a piece of information for later use.
- In [Flag Fest](https://flag-fest.herokuapp.com/flag-fest), the developer has variables for `region`, `activeAmount`, and `flag`. In order for the game to work, the developer has to "hold on" to the data the user has provided. (This app was made by a FE student!)
- On social media sites, there is usually a `username` or `handle` variable. If you are logged in, the variable will be set to your information. If another user was logged in, for the instance of that session, the variable would be set to that other users information.

Variables are at the core of everything we do in programming and this isn't unique to JavaScript.

<div class="try-it-new">
  <h2>Try It: Variables</h2>
  <p>Create a new pen in CodePen. For this exercise, you will be working in the JavaScript (JS) pane.</p>
  <p>Declare 4 variables, using the names <code>name</code>, <code>email</code>, <code>numberOfPets</code>, and<code>myLocation</code>. Assign each to an appropriate value.</p>
  <p>Finished? Declare at least two more variables - you choose the name and values!</p>
</div>

## Interpolation

We can use string interpolation to combine static data with dynamic (or variable) data. Here's an example of the syntax:

```js
var firstName = 'Amy';
console.log(`Hello, ${firstName}!`);
```

The code above will make "Hello, Amy!" appear in the console.

Note that _back ticks_ are the characters that surround this combination of the string an `${}` syntax. You can find the back-tick key at the top-left of your keyboard, next to the `1`.

Anything inside the back ticks will be read as a string. But, when the interpreter sees the `${`, it will stop and wait for JavaScript code to read. Typically, we provide a variable name here. When the interpreter read the matching closing bracket - `}` - it goes back to treating characters as part of the string.

<div class="try-it-new">
  <h2>Try It: Interpolation</h2>
  <p>Using interpolation and at least two of the variables you declared in the previous section, write a sentence about yourself! Make sure to print that sentence out to the console.</p>
  <p>Change the value of one of the Strings you interpolated and re-run your code. Is the difference reflected in the output?</p>

  <div class="spicy-container">
    <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
    <div class="spicy-toggle">
      <p>What happens if you interpolate <code>numberOfPets * 4</code>? What does that tell you about how interpolation works?</p>
    </div>
  </div>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
