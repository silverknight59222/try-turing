---
title: JavaScript Arrays
layout: post
date: 2015-01-07
permalink: javascript-arrays
program: teachers
tags: teachers
---

You can think of an array as a box that can hold things: integers, strings, other arrays, etc. It's a container for other elements. The elements are contained by straight brackets and separated by commas. Any number of elements can be put in an array.

Don't forget to make a new codepen in order to save your previous work! 

### Defining Arrays

Here are some examples of arrays:

```js
var animals = ['piglet', 'kitten']
var myNumbers = [1,2,3,4,5]
```

To see the arrays, we can console.log them:

```js
var animals = ['piglet', 'kitten']
console.log(animals)
```

<div class="try-it">
<h2>Try It: Defining Arrays</h2>

<p>Create an array of six student names and save it to a variable called students. Then, use console.log to see the students in the array.</p>
</div>

### Accessing Elements by Position Number

In programming, we start counting at 0. In human language, we would call something at the front "first", but the computer would call it the "zero-th". 

Let's try something out. Comment out your student array with two slash marks in front of the line of code (you'll need it later). Then, paste this code into your JavaScript tab.

```js
var animals = ['piglet', 'kitten', 'dog', 'elephant']
console.log('This is the first animal: ' + animals[0])
```

What happens? Try changing the 0 to another number. What numbers work? What numbers don't work? 

<div class="try-it">
<h2>Try It: Accessing Elements in an Array</h2>

<p>Uncomment the line of code that defines your students array. Then create six console.log lines that print out all of your students, one-by-one.</p>

<p>The output should look something like this:</p>

<p>The first student is Jose.</p>
<p>The second student is Kimberly.</p>
<p>The third student is Juan.</p>
<p>The fourth student is Estephania.</p>
<p>The fifth student is Brian.</p>
<p>The sixth student is Madison.</p>
</div>

### Shuffling Elements in an Array

We can shuffle elements in an array (think of shuffling a deck of cards). However, in order to do this by hand, it's quite complex. If you want to go down a rabbit hole, just Google "how to shuffle array in JavaScript". 

Instead, we're going to use an already-written library called Lodash. A library is a bit of code that was written by someone else in order to simplify some functionality. In order to bring Lodash into our project, click on the gear icon next to the JavaScript editor tab, then type "Lodash" into the External Resource Search box. Click the first one that pops up -- lodash.js. Finally, click "Save and Close".

This will allow us to use a function (don't freak out, it looks a bit strange): `_.shuffle(["thing1", "thing2", "thing3"])`. Let's try it out. First, comment out the array of students from before because you'll need it later.

Write this bit of code inside of your JavaScript editor:

```js
var cards = _.shuffle(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"])
console.log('You drew a ' + cards[0])
```

This gets a little annoying to test out since you have to make a change in order to run the code. Instead, let's make it so that a card gets shuffled every time we click a button on the screen. 

First, add a button to your HTML like this:

```html
<button>Go!</button>
```

Then, we're going to wrap the bit of code we already pasted in with something called an event handler. 

```js
var targetButton = document.querySelector('button');

targetButton.addEventListener('click', function() {
  var cards = _.shuffle(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"])
  console.log('You drew a ' + cards[0])
});
```

Try it out a few times, and see if you can come up with some sort of explanation for what is happening and why. We'll talk through it as a group, too.

Let's make one more small change together. Let's change the console.log line so that instead of writing to the console, it actually prints out to the page something like "You drew a [insert card]!". We'll need to add a div to our HTML first, then update the JS:

```js
var targetButton = document.querySelector('button');

targetButton.addEventListener('click', function() {
  var cards = _.shuffle(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"])
  document.querySelector('div').innerText = "You chose a " + cards[0]
});
```

<div class="try-it">
<h2>Try It: Shuffling Arrays</h2>

<p>Uncomment your students array from before. Use the bit of code we have for the card game to generate a random student and print the name to the screen.</p>
</div>

### Slicing Arrays

Sometimes, we want more than one element from an array. To do this, we can use the slice function:

```js
var group = students.slice(0, 3)
console.log(group)
```

This is somewhat misleading, because it won't actually give us back elements 0, 1, 2, and 3. Instead, it will slice it right before the final number. That means we'll get back elements 0, 1, and 2. 

<div class="try-it">
<h2>Try It: Slicing Arrays</h2>

<p>Print out the following slices of students: </p>
<p>Students 0 - 4</p>
<p>Students 2 - 5</p>
<p>Students 3 - 5</p>
</div>

### Turning User Input into Arrays

What happens if our student roster changes? Right now, it's just hard-coded into our JavaScript. Wouldn't it be cool if we could prompt the user to enter a list of their students and dynamically generate random students? 

Let's comment out all of the code that you already have and try this out first:

```js
var choices = prompt('Enter your favorite foods separated by commas:').split(', ')

var shuffledChoices = _.shuffle(choices)

console.log('You should eat ' + shuffledChoices[0] + ' for dinner.')
```

Let's take a minute to talk about what is happening with `.split(', ')`. 

<div class="try-it">
<h2>Try It: Shuffling from User Input</h2>

<p>Uncomment the code you had previously (your student array). Make any necessary changes to allow the user to input a comma-separated list of students and have it pick a random student to post on the page.</p>

<p>You may use this list: Jimmy, Giselle, Emanuel, Ruben, Alexis, Christina, Maria, Victor</p>

<p>Want an extra challege? Add code that allows a user to click a button to be prompted for the names. Look back at the example if you're stuck.</p>
</div>
