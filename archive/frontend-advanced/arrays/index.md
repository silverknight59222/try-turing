---
layout: lesson
---

# Arrays
<a href="../">Back to Curriculum Index</a>

## Goals

- Explain what an array is and where they might be used in real applications
- Use the correct syntax to declare arrays of strings
- Use the `.forEach` method to iterate over arrays
- Iterate over an array of strings and display each one in the browser

<br>
## What are Arrays?

An array stores an ordered **list** of values. You should consider using an array whenever you are working with a collection of values that are related to one another.

Some common scenarios in which developers use arrays:
- **Social Media:** list of followers, list of posts, list of DMs
- **E-Commerce:** list of products, list of items in a cart
- **Email Service:** list of emails for all ads, list for certain ads

<br>
## Array Syntax

Each value is referred to as an **element**. You can put different types of data into an array, and there is not a certain number of elements an array can or should contain.

Here is an array of 3 elements, all strings:

```js
var followers = ['@DS_Storoz', '@kefimochi', '@LetaCodes'];
```

Here is an array of 6 elements, all numbers:

```js
var cartItemPrices = [33, 72, 64, 18, 17, 85];
```

Arrays can also be written with values on separate lines, like so:

```js
var emails = [
  'amy@turing.edu',
  'rachel@turing.edu',
  'anna@turing.edu'
];
```

### Adding Elements

Over time, we may want to add or remove elements from an array. Today we will focus on adding. We can use a method called `.push` to add new elements to arrays:

```js
var emails = ['amy@turing.edu', 'rachel@turing.edu', 'anna@turing.edu'];

emails.push('erin@turing.edu');

console.log(emails);
// ['amy@turing.edu', 'rachel@turing.edu', 'anna@turing.edu', 'erin@turing.edu']
```

<div class="try-it-new">
  <h2>Try It: Declaring & Adding to Arrays</h2>
  <p>In the <code>scripts.js</code> file of your Glitch project, declare a variable named <code>toDos</code> that stores an array of at least 3 strings. Each string should be something that you need to do!</p>
  <p>Now, use the <code>push</code> method to add another to-do.</p>
  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>var toDos = ['laundry', 'pay bills', 'yardwork'];

toDos.push('feed pups');</pre>
    </div>
  </div>

</div>

<br>
## Iteration

Iteration is defined as _the repetition of a process_. In programming, we will define that more specifically as taking action on every element in an array. Here are some examples of why we need and use iteration:
- **Social Media:** for each follower on the list, show their username on the follower page
- **Email Service:** for each email address we have, send an ad at 4:30am

Let's look at the syntax:

```js
var emails = ['amy@turing.edu', 'rachel@turing.edu', 'anna@turing.edu'];

emails.forEach(function(email) {
  var message = `Thanks for being a loyal customer, ${email}!`;
  console.log(message);
});
```

Breakdown:
- `emails` is the array we are iterating over
- `.forEach` is the method that does the work for us
- `email` represents the current element being iterated over, can only be used in that block

<div class="try-it-new">
  <h2>Try It: Iterating over Arrays</h2>
  <p>Back in the <code>scripts.js</code> file of your Glitch project, iterate over your list of to-dos. For each, <code>console.log</code> a reminder about what the user needs to do!</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>var toDos = ['laundry', 'pay bills', 'yardwork'];

toDos.forEach(function(toDo) {
  alert(`Don't forget to ${toDo}!`);
});</pre>
    </div>
  </div>

</div>

<br>
## Putting It All Together

Alert messages, or logging to the console won't do our user much good. As Front-End developers, most of our job is about presenting the data to the user in the browser.

Using everything we've learned up until now, let's break this code down:

```js
var emailConfirmations = document.getElementById('confirm-section');     // 1
var emails = ['amy@turing.edu', 'rachel@turing.edu', 'anna@turing.edu']; // 2
                                                                         // 3
emails.forEach(function(email) {                                         // 4
  var message = `<p>An email has been sent to: ${email}!</p>`;           // 5
  emailConfirmations.innerHTML += message;                               // 6
});                                                                      // 7
```

<div class="try-it-new">
  <h2>Try It: Iterating + DOM Manipulation</h2>
  <p>Modify the <code>forEach</code> in your project. Instead of a <code>console.log</code>, insert a paragraph inside of the <code>section</code> for each to-do.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <p><a target="blank" href="https://glitch.com/edit/#!/tc-arrays-solution">Here's a Glitch project</a> with the completed challenge.</p>
    </div>
  </div>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
