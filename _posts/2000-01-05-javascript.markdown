---
title: Introduction to JavaScript
layout: post
date: 2000-01-04
permalink: javascript
---

## Learning Goals

JavaScript is a lot like Ruby, which you were introduced to yesterday. The syntax and some of the concepts are a little different, but the two have more in common than not.

In this segment of our time together, we'll:

* Learn how to access and use the Chrome Developer Tools
* Develop a basic understanding for JavaScript syntax

## Warmup

Open up the Chrome Developer Tools by pressing `Command-Option-J` on your Mac or `Control-Option-J` on Windows or Linux. This will give you a command line REPL like `irb`—except with JavaScript. Take a few moments to try the following:

* Perform basic arithmetic (`2 + 2`, `3 * 3`)
* Create some strings
* Create an array
* Assign a value to a variable

What works as expected? What are some things that you noticed behave differently?

## Variables

Unlike Ruby, you need to use the `var` keyword when declaring a variable for the first time. If you forget the `var` keyword, your variable will be declared in the global scope—whether you meant it that way or not. (For our purposes today, forgetting the `var` keyword will not be the end of the world, but just know that it could cause subtle bugs in our code. Let's get in the habit of using it now.)

```js
var x = 1;
console.log(x); // => 1
x = 2;
console.log(x); // => 2
```

## Conditionals

Conditional statements have a few extra decorations as compared to Ruby.

```js
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

## Functions

In Ruby, we call methods on an object. In JavaScript, we use functions. Functions behave a lot like methods except that they are objects themselves. This means that you can store a function in a variable, pass a function as an argument to another function, or even call methods on a function.

Functions can be either named or anonymous. Anonymous functions can be stored in a variable or passed as an argument to another function.

```js
// Named function
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('Alan Turing'); // Logs 'Hello, Alan Turing!'
sayHello; // Doesn't log anything. The function was never called.
sayHello(); // Logs 'Hello, undefined!' but does not raise an error like it would in Ruby.
```

Let's take a look at passing a function as an argument to another function.

```js
// Let's start out by defining some functions.

function addTwo(addend) { return addend + 2; }
function subtractOne(minuend) { return minuend - 1; }
function multiplyByThree(factor) { return factor * 3; }
```

Notice how we didn't use the parentheses when we passed the functioned into `doMath`? That's because if we used the parentheses, we would call the function. We don't want to call it. We just want to reference it. This can be confusing. Don't worry too much about it. We're around to help you out today. Eventually you'll get the hang of it and even experienced programmers mess this up some times.

## Try It: Creating a Function

Try the following:

* Create a function that divides one number by the other.
* What happens if you remove the `return` keyword from one of the functions above?

Copy and paste each into the Chrome Developer Tools. Did it work?
