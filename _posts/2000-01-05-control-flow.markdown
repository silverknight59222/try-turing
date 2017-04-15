---
title: Control Flow
layout: post
date: 2000-01-05
permalink: control-flow
program: front-end
tags: front-end
---

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

  <p>Open a new Codepen</p>

  <p>Add a button to the HTML. Whenever the button is clicked, the text of the button should increment to represent the number of times it has been clicked.</p>


  <p>Hint: It might help to give your button a height and width in css so that it's easy to find and click! You can also use something called font-size. </p>

  <p>Stuck? Check out the starter code below:</p>
</div>

```js
var count = 0;
var counter = document.getElementById('click-counter');

counter.addEventListener('click', function(){
  
});
```

## Control Flow

Control Flow refers to being able to determine what the program does given certain inputs or values. In JavaScript, you can represent it using an `if... else` statement.

```js

var animal = 'cat'
// we might expect this value to change to 'dog' or 'snake' or 'panther'

if(animal === 'dog') {
  alert('Woof!')
} else if (animal === 'cat') {
  alert('Meow')
} else {
  alert('...')
}

```

What this code says if:

  - I assign the animal variable to 'cat'
  - If the animal variable equals the string of 'dog'
    - then the program barks
  - If the animal variable equals the string of 'cat'
    - then the programs meows
  - If none of those other statements were true
    - then the program responds with silence


<div class="try-it">
<h2>Challenge: Adding a Conditional to your counter</h2>

<p>Add a conditional so that once the box has been clicked 5 times, instead of showing the number, the box says 'Getting closer!'.</p>

<p>Then add a condition so that once the box has been clicked 10 times, it says 'Almost there!'</p> 

<p>And finally, if the box is clicked 15 times, the entire box disapears!</p>

<p>Look at the example above to see how a conditional in JavaScript looks. Google "how to remove element from page using JavaScript" if you're stuck.</p>
</div>

### Conclusion

Take a look at this implementation when you're done!

How does your implementation differ? How is it the same?

<p data-height="300" data-theme-id="23788" data-slug-hash="dWPvJR" data-default-tab="result" data-user="turing" data-embed-version="2" data-pen-title="Try Coding - Control Flow Counter" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/dWPvJR/">Try Coding - Control Flow Counter</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>