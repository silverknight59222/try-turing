---
title: Introduction to JavaScript
layout: post
date: 2000-01-05
permalink: javascript
program: front-end
---

jQuery is pretty cool, but let's take a step back for a moment to talk about some plain, vanilla JavaScript concepts. 

## Conditionals

A conditional branch is a construct that is pretty similar across programming languages. You can think of a conditional as a "choose your own adventure" situation. 

In JavaScript, a conditional statement looks like this: 

```js
var hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  $('h1').text('I am tired')
} else {
  $('h1').text('I feel fantastic!')
}
```

In addition to the < sign, you can also use 

* > (greater than) 
* <= (less than or equal to)
* >= (greater than or equal to)
* == (exactly equal). 

<div class="try-it">
<h2>Try It: Using Conditionals</h2>

<p>In this Try It assignment, you'll be asked to do two things that we haven't taught yet. That's ok! Part of being a programmer is tinkering with things until you find a way to get something to work. You'll also want to consider using reference docs, online forums (like Stack Overflow), and Google.</p>

<p>Go back to your bio page that you created earlier. Modify your user greeting so that if a user inputs a name that is more than 20 characters, an alert pops up that says "Sorry, we can only accept names that are 20 characters or less. Please try again." If the name is 20 characters or less, the greeting should function as it had been previously.</p>
<p>Stuck? Google "how to find length of string in JavaScript" and/or "how to make an alert pop up in JavaScript". As a programmer, you'll be doing a lot of Googling. Get used to it now!</p>
</div>

## Incrementing Numeric Variables

There may be situations when you want to count how many times something has happened. In that case, you'll need to start out with a counter variable, like this:

```js
var counter = 0
```

The name "counter" is arbitrary. You could name it "clickCount" or "points" or whatever you're counting.

There are a few ways to increment a variable. One is to simply reassign it to equal itself plus 1:

```js
var counter = 0
counter = counter + 1
```

Another is to use this shortcut which represents "increase by one"

```js
var counter = 0
counter++
```

<div class="try-it">
<h2>Try It: Creating a Click Counter</h2>

<p>Add a box (div) to your page. Whenever the box is clicked, the text of the box should increment to represent the number of times the box has been clicked.</p>

<p>Was that too easy? Want an extra challenge? Add a conditional so that once the box has been clicked 10 times, it disappears! Google "how to remove element from page using jQuery" if you're stuck.</p>
</div>
