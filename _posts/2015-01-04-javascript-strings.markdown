---
title: JavaScript Strings
layout: post
date: 2015-01-04
permalink: javascript-strings
program: teachers
tags: teachers
---

JavaScript is a language that allows us to interact with a webpage. Before we build anything too fancy, let's start with some JavaScript basics. 

Before we start, save your work and create a new CodePen project by clicking your icon in the upper-right-hand corner, then selecting "New Pen".

### Strings

You can think of strings as a series of characters (alpha, numeric, spaces, and special characters) between two quote marks, like so:

```js
'hello, world!'
```

In JavaScript, strings can be either double quoted ("like this") or single quoted ('like this').

In order to experiment with strings, we'll click on the console button in codepen: 

![show the console](/images/console1.png)

Then, type in the following: 

```js
'hello, world!'
```

<div class="try-it">
<h2>Try It: More Strings</h2>

<p>In the console, type three more strings of your own. They can be any length. Don't forget your quote marks on both sides!</p>
</div>

### Console.log

Right now, we can see the strings we type in when we hit enter. However, we won't always be writing our code in the console, so let's move to a more realistic way of writing our JavaScript. 

Keep the console open, but in the JavaScript editor tab on Codepen, type the following:

```js
console.log('hello, world!')
```

You should see this appear in the console. This isn't super exciting right now, but let's build on it. 

### Variables

In most programming languages, including JavaScript, you can save values to variables. Unlike in math class, where we would use x or y and a number, variables in programming are much more flexible. For example, here are three variables, each of which has a string as its value. 

```js
var email = "rachel@turing.io"
var address = "123 Nowhere Street, Denver, CO 80202"
var firstName = "Rachel"
```

To define a variable, we use the `var` keyword followed by an arbitrary name we choose for the variable. Notice that all of the variables start with a lowercase letter. If you are choosing a variable name that has two words, uppercase the first letter of the second word. This is called camelCase. 

After naming the variable, we use the `=` sign to show what value the variable will hold. 

We can now console.log any of these variables we have defined. The example below defines three variables, but only one will be logged to the console. 

```js
var email = "rachel@turing.io"
var address = "123 Nowhere Street, Denver, CO 80202"
var firstName = "Rachel"

console.log(firstName)
```

You could change `firstName` to be any of the variables that you have defined. 

<div class="try-it">
<h2>Try It: Strings and Variables</h2>

<p>Define three of your own variables. Then, console.log each one of them.</p>
</div>

### Combining Strings and Variables

We can combine strings and variables by using the `+` symbol. When you do this, be sure to follow these guidelines:

* Put quote marks around your literal strings
* Do not put quote marks around your variable names
* Be sure to leave a space in your string if you require a space

```js
var firstName = 'Jesse'

console.log('Your name is ' + firstName + '.')
```

<div class="try-it">
<h2>Try It: Combining Strings and Variables</h2>

<p>Define a variable called firstName and another called email. Then, console.log a sentence that looks like this: "Your name is [insert firstName] and your email address is [insert email].</p>
</div>


### Prompting the User

Programming gets really powerful when we can interact with the user and their choices. One way to do that in JavaScript is with the `prompt()` function. Here's an example:

```js
var firstName = prompt('What is your name?'')

console.log('Your name is ' + firstName + '.')
```

CAUTION: Since CodePen auto-reloads every time it sees a change, you'll want to comment-out the prompt line until you're ready to use it. You can do this by adding two slash marks in front of the line, like so:

```js
// var firstName = prompt('What is your name?'')
```

When you're ready to run the code, uncomment the code by removing the two slash marks, and it will run. 

<div class="try-it">
<h2>Try It: Prompting the User</h2>

<p>Ask the user to enter their email address, then print out a line to the console that says "Your email address is [insert their email here]. Thank you for your submission!"</p>
</div>
