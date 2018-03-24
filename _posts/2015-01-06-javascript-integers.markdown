---
title: JavaScript Integers
layout: post
date: 2015-01-06
permalink: javascript-integers
program: teachers
tags: teachers
---

Most programming languages, including JavaScript, allow you to manipulate numbers. Today, we'll focus on integers (positive and negative whole numbers).

Before we start this section, create a new CodePen so that you can save the work you've already done. 

### Basic Math

Let's start with a little bit of math. Open your console so that you can see the results. Inside of the JavaScript code tab, type the following:

```js
console.log(2+2)
```

<div class="try-it">
<h2>Try It: Math and Comparisons</h2>

<p>Now try the following lines one at a time inside of your console.log(). Some of them are pretty obvious, but can you figure out what the rest do? </p>

<p>100/20</p>
<p>3>5</p>
<p>7*4</p>
<p>5>3</p>
<p>47%5</p>
<p>72===11</p>
<p>72!==11</p>

</div>  


### Integers and Variables

Just like with strings, we can save integers to variables like this:

```js
var numberOfCookiesPerBox = 15
var numberOfBoxes = 17

console.log(numberOfCookiesPerBox * numberOfBoxes)
```

Or, you can be a little fancier by adding text to your calculation:

```js
var numberOfCookiesPerBox = 15
var numberOfBoxes = 17

console.log('You have ' + numberOfBoxes + ' boxes of cookies that each have ' + numberOfCookiesPerBox + ' cookies. That means you have ' + numberOfCookiesPerBox * numberOfBoxes + ' total cookies.')
```


<div class="try-it">
<h2>Try It: Math, Variables, and Console Logs</h2>

<p>Define two variables, numberOfStudents and numberOfPencils. Then, console log a statement that says "You have [number of students] and [number of pencils]. This means that each student gets [calculation] pencils.</p>
</div>

### Prompting For a Number

In the last section, we learned how to prompt the user for input. Unfortunately, all of the inputs that come in through the `prompt()` function are strings. However, there is a function in JavaScript that allows us to change the input from a string (like "5") to an integer (like 5). 

Sometimes, JavaScript will try to "help" you by coercing a string into an integer, but you generally want to control this yourself and not rely on JavaScript to assume it will work. 

```js
var divisor = parseInt(prompt("What do you want to divide 158 by?"))

console.log("158 divided by " + divisor + " equals " + (158 / divisor))
```

Let's talk about the order of what is happening in this example, then we'll move on to combine multiple skills. 

<div class="try-it">
<h2>Try It: Grade Calculator</h2>

<p>Create a new codepen and add an empty div.</p>
<p>Prompt the user with these two questions and save the answers as variables:</p>
<p>"How many points is the assignment worth?" and "How many points did you earn?"</p>

<p>Then use document.querySelector('div').innerText = '' to show a sentence that says "You earned [points earned] out of [total points]. That means your percent is [insert calculation] on this assignment.</p>
</div>
