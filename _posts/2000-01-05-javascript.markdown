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

In Ruby, we call methods on an object. In JavaScript, we use functions. Functions behave a lot like methods in Ruby, although they have a few different behaviors which we will not get into today.

```js
// Named function
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('Alan Turing'); // Logs 'Hello, Alan Turing!'
sayHello; // Doesn't log anything. The function was never called.
sayHello(); // Logs 'Hello, undefined!' but does not raise an error like it would in Ruby.
```

```js
function addTwo(num) { return num + 2; }
function subtractOne(num) { return num - 1; }
function multiplyByThree(num) { return num * 3; }
```

<div class="try-it">
<h2>Try It: Creating a Function</h2>

Create a function that divides one number by the other. Copy and paste your function into the Chrome Developer Tools. Did it work?
</div>


