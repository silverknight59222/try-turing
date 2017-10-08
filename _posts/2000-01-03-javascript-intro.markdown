---
title: JavaScript Introduction
layout: post
date: 2000-01-03
permalink: javascript-intro
program: front-end
tags: front-end
lessontype: fe-new
---

JavaScript is a language that allows us to interact with a webpage.

Before we start building anything too exciting, let's look at some basic concepts on JavaScript. 

### Basic Math

Let's start with a little bit of math. Open the JS console on CodePen.

![show the console](/images/console1.png)

and type the following:

```js
console.log(2+2)
```

![show the code](/images/console2.png)

And hit the `enter` key to run the code!

What happened? 

We are just using the "console.log" function in order to see our results for now. Don't worry, we won't leave it this way when we start to implement real things. 

<div class="try-it">
<h2>Try It: Math and Comparisons</h2>

Now try the following lines.

<p>console.log(100/20)</p>
<p>console.log(3>5)</p>
<p>console.log(7*4)</p>
<p>console.log(5>3)</p>
<p>console.log(47%5)</p>
<p>console.log(72===11)</p>
<p>console.log(72!==11)</p>

</div>  

### Strings

So far, we've just looked at integers in JavaScript. Another type of data in JS are strings. You can think of strings as a series of characters between two quote marks, like so:

```js
console.log('hello, world!')
```

Go ahead and create a string of your own. 

### Variables

Just like in math class, we can save data to a variable, like so:

```js
var myName = 'Rachel'
```

Unlike math class, we can use variable names that contain more than one letter. In JavaScript, the convention is to name variables starting with a lower case letter, then capitalize the first letter of another word. All of the variable names below are valid and conventional JavaScript. Notice that they describe the data they reference:

```js
var counter = 1
var numberOfStudents = 52
var message = 'I am a spy'
var enoughMoney = 8 > 9
```

### Combining Strings and Variables

Let's say that you asked a user to enter their name into a text field. You could save that text as a variable, then greet them with a welcome message. 

```js
var name = 'Rachel'
console.log('Welcome, ' + name) 
```

Want a more annoying (but more real-world) way to have JavaScript interact with your page? Try This:

```js
var name = 'Rachel'
alert('Welcome, ' + name)
```

<div class="try-it">
<h2>Try It: Combining Variables and Strings</h2>

<p>Define a variable called numberOfCookies and give it a value of 7. Now, make an console.log() or an alert() that combines the variable with two strings to output "You have 7 cookies left."</p>
</div>  
