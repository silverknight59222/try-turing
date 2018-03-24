---
title: JavaScript For Loops
layout: post
date: 2015-01-08
permalink: javascript-for-loops
program: teachers
tags: teachers
---

Sometimes, we want to do something to each element in the array. For example, we might have a list of email addresses, and we could go through each one and send an email.

We won't get anywhere near that fancy today. Let's look at some simpler examples.

Before we move on, save your work and start a new CodePen. 

Here's an example of appending our favorite foods to the screen. Add a div to your HTML:

```html
<div>
  
</div>
```

Then paste this into your JavaScript editor: 

```js
var favoriteFoods = ['cheerios', 'chocolate', 'sandwiches', 'cheese']

for(var i = 0; i < favoriteFoods.length; i++) {
  document.querySelector('div').innerHTML += "<li>I really like " + favoriteFoods[i] + "</li>"
}
```

What happens? Let's take a minute as a group to talk through this for loop. 

<div class="try-it">
<h2>Try It: Iterating Through Arrays</h2>

<p>Create an array of students. Then use a for loop to iterate through each student in the array and add this sentence to the webpage for each: "[student] is enrolled in biology." Feel free to change the course subject.</p>
</div>

### Slicing and Iteration

What happens if we want to iterate through pairs or triples at a time? We can combine the concept of slicing (from the last lesson) with iteration, like this:

(be sure to add lodash to your project again in order to use the `_.shuffle()` function)

```js
var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
var shuffledCards = _.shuffle(cards)

for(var i = 0; i < shuffledCards.length; i += 2) {
  var pair = shuffledCards.slice(i, i+2)
  document.querySelector('div').innerHTML += "<li>" + pair + "</li>"
}
```

Let's talk through this example as a group before moving on. 

We have three things to try, and we'll start with the most simple change. 

<div class="try-it">
<h2>Try It: Slicing and Iteration, Part I</h2>

<p>Modify the code from the card pairs example to make it so that triplets are distributed instead of pairs.</p>
</div>
<br>

<div class="try-it">
<h2>Try It: Slicing and Iteration, Part II</h2>

<p>Add a button and an event listener so that the cards are shuffled every time the button is clicked.</p>
</div>
<br>

<div class="try-it">
<h2>Try It: Slicing and Iteration, Part III</h2>

<p>Change the array to be a list of students that are being put in random groups of three. Be sure to change the variable names to be representative of the values.</p>

<p>You can copy this list of students to use: [" Jimmy", " Giselle", " Emanuel", " Ruben", " Alexis", " Christina", " Maria", " Victor", " Jessica", " Ubaldo", " Cynthia", " David", " Jasmine", " Gabriel", " Saul", " Richard"]</p>
</div>
