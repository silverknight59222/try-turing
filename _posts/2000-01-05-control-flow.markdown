---
title: Variables and Control Flow
layout: post
date: 2000-01-05
permalink: fe-control-flow
program: front-end
tags: front-end
lessontype: fe-new
---

Before we start this lesson, go and take a look at the [Cookie Clicker game](http://orteil.dashnet.org/cookieclicker/). 

## Incrementing Numeric Variables

There may be situations when you want to count how many times something has happened. In that case, you'll need to start out with a counter variable, like this:

```js
var count = 0
```

The name "count" is arbitrary. You could name it "clickCount" or "points" or whatever you're counting.

There are a few ways to increment a variable. One is to simply reassign it to equal itself plus 1:

```js
var count = 0
count = count + 1
```

Another is to use this shortcut which represents "increase by one"

```js
var count = 0
count++
```

<div class="try-it">
  <h2>Try It: Creating a Click Counter</h2>

  <p>Open a new Codepen.</p>

  <p>Add a button element to the HTML. Whenever the button is clicked, the text of the button should increment to represent the number of times it has been clicked.</p>

  <p>Want to be fancy? Use a cookie image instead of a button, then make sure you have a heading where you can replace the count each time the cookie is clicked.</p>

  <p>Stuck? Check out the starter code below:</p>
</div>

```js
var count = 0;
var counterButton = document.querySelector('#click-counter');

counterButton.addEventListener('click', function(){
  // add your code here!
});
```

<p data-height="265" data-theme-id="0" data-slug-hash="WEzppy" data-default-tab="html,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="counter-base" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/WEzppy/">counter-base</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Control Flow

Control Flow refers to being able to determine what the program does given certain inputs or values. In JavaScript, you can represent it using an `if... else` statement.

For the example below, let's assume we have a variable called counter that is being incremented somewhere in our program. 

```js
if(counter < 10) {
  alert('Almost there!')
} else if (counter < 15) {
  alert('So close!')
} else {
  alert('Whoa! That was a lot of clicks.')
}
```

What this code says if:

  - If the counter is less than 10, pop up an alert that says "Almost there!"
  - If the counter is between 10 and 15, pop up an alert that says "So close!"
  - If the counter is 15 or higher, pop up an alert that says "Whoa! That was a lot of clicks."

<div class="try-it">
<h2>Challenge: Adding a Conditional to your counter</h2>

<p>Add a conditional so that once the button has been clicked exactly 5 times, instead of showing the number, the text of the button says 'Boo!'.</p>
</div>
