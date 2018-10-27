---
title: JavaScript Introduction
layout: post
date: 2000-01-03
permalink: javascript-intro
<!-- program: front-end
tags: front-end
lessontype: fe-new -->
---

JavaScript is a language that allows us to interact with a webpage. With JavaScript, we can create logic, just as we can in Ruby. JavaScript lets us declare variables, functions, and more.

Before we start building anything too exciting, let's look at some basic data types and concepts of JavaScript.

### Numbers, Booleans, & Basic Math

Let's start with a little bit of math. Open the JS console on CodePen.

![show the console](/images/console1.png)

and type the following:

```js
alert(2 + 2)
```

![show the code](/images/console2.png)

And hit the `enter` key to run the code!

What happened?

<div class="try-it">
<h2>Try It: Math and Comparisons</h2>

<p>Now try the following lines:</p>

<p>100 / 20</p>
<p>3 > 5</p>
<p>7 * 4</p>
<p>5 > 3</p>
<p>47 % 5</p>
<p>72 === 11</p>
<p>72 !== 11</p>

</div>  

### Strings

So far, we've just looked at numbers in JavaScript. Another type of data in JS are strings. You can think of strings as a series of characters between two quote marks, like so:

```js
'hello, world!'
```

Go ahead and create a string of your own.

### Variables

Just like in math class (and Ruby if you did a back-end day of Try Coding), we can store data in a variable, like so:

```js
var myName = 'Rachel'
```

Unlike math class, we can use variable names that contain more than one letter. In JavaScript, the convention is to name variables starting with a lower case letter, then capitalize the first letter of any other word. This is known as "camel case". All of the variable names below are valid and conventional JavaScript. Notice that they describe the data they reference:

```js
var counter = 1;
var numberOfStudents = 52;
var message = 'I am a spy';
var enoughMoney = 8 > 9;
```

The power of variables lies in the ability to store data that can be used over and over. Variables save us time and keep us from repeating ourselves too much. It also helps label our data. In the above example, the number `52` doesn't mean very much, but by storing it in the variable `numberOfStudents`, we can clearly see the relevance of the information.

### Combining Strings and Variables

Let's say that you asked a user to enter their name into a text field. You could save that user-entered text as a variable, and then greet them with a welcome message.

```js
var name = 'Rachel'
`Welcome, ${name}`
```
The ``${}`` is the syntax used in JavaScript to display the _value_ of the variable in a string.

Want a more annoying way to have JavaScript interact with your page? Try this:

```js
var name = 'Rachel'
alert(`Welcome, ${name}`)
```

Alerts generally interrupt the flow of a user's experience; no one likes popups!

<div class="try-it">
<h2>Try It: Combining Variables and Strings</h2>

<p>Define a variable called numberOfCookies and give it a value of 7. Now, make an alert() that combines the variable with two strings to output "You have 7 cookies left."</p>
</div>  

### Functions

In JavaScript, we can also create functions! Functions are just bits of code that we've named and can run whenever we want. Just like a variable stores information so we can use it over and over, functions store functionality.

The syntax for creating a function looks like this:

```js
function alertHello() {
  alert('Hello!');
}
```

We use the keyword `function`, the name of our function, parentheses, and curly brackets. Anything in between the curly brackets is the code we want to save as our function!

In order to make that code run, we can call our function like this:

```js
alertHello();
```

We write the name of the function and tell it to run by adding in those parentheses at the end.

<div class="try-it">
<h2>Try It: Write a function!</h2>

<p>Define a function called addTwoAndTwo. Inside the curly braces, define a variable called result and give it a value of 2 + 2. Now, make an alert() that displays the result.</p>

<p>After the closing curly brace, call your addTwoAndTwo function.</p>
</div>  


### Conditional Statements

Sometimes we want our code to make decisions. One way we can do this is to write a conditional statement.

If you say it out loud, the structure for a conditional statement makes sense. "If the flower has an odd number of petals, say 'They love me!', but if it has an even number of petals, say 'They love me not!'"

In code, we would do something like this:

```js
var numberOfPetals = 5;

function askDaisy() {
  // If the number of petals divided by 2 has a remainder (aka if the number of petals is odd)
  if (numberOfPetals % 2 === 1) {
    // do this!
    alert('They love me!');
  } else {
    // if the number of petals is even, do this!
    alert('They love me not!');
  }
}
```

We write the word `if` to start our conditional statement. Inside the parentheses is a comparison that will be either true or false (known as a _boolean_). If the code inside the parentheses is true, we do what's inside the first pair of curly brackets. We can write a second half that begins with `else` - the code here will run if the code in the parentheses is false.

<div class="try-it">
<h2>Try It: Write a conditional statement!</h2>

<p>Create a variable called name, with a value of a string of your name.</p>

<p>Write a function called whoIsTheCoolest, with a conditional statement inside. The condition should check to see if the name variable matches a string of your name. If it does, write an alert that says "Yeah! [Your name] is the coolest!". Write an else: if the variable is any other string, write an alert that says "Wrong! [Your name] is the coolest!"</p>

<p>Run the function. Try changing the name variable to a new value and run the function again.</p>
</div>  
