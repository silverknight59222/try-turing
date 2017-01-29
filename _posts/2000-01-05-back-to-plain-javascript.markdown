---
title: Back to Plain JavaScript
layout: post
date: 2000-01-05
permalink: javascript
program: front-end
---

jQuery is pretty cool, but let's take a step back for a moment to talk about some plain, vanilla JavaScript concepts. At this point, you may want to start a new CodePen so as to avoid cluttering up your previous one. Just make sure to add the line that will allow us to layer on jQuery later:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

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

Stuck? Check out the starter code below:
</div>
```js
var counter = 0
$('.clickbox').on('click', function(){

});
```

<div class="try-it">
<h2>Challenge: Adding a Conditional</h2>

<p>Was that too easy? Want an extra challenge? Add a conditional so that once the box has been clicked 10 times, it disappears! Look at the example below to see how a conditional in JavaScript looks. Google "how to remove element from page using jQuery" if you're stuck.</p>
</div>
```js
var counter = 0;

$('.clickbox').on('click', function(){
  // your code here

  if (counter >= 10) {
    // your code here
  }
});
```
