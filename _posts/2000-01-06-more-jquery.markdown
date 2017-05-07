---
title: Some More jQuery
layout: post
date: 2000-01-06
permalink: more-jquery
program: front-end
lessontype: fe-current
---

A few more things you can do with jQuery...

## The This Keyword

Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special little variable called `this`. Lucky for us, `$(this)` is set to the box we clicked on.

We want each box to have a button inside of it. When the user clicks the button, it should rotate the entire box. (We're rotating the box with a CSS class called `.clicked` because we're super original.) Let's look at some code.

<p data-height="265" data-theme-id="0" data-slug-hash="bgNWew" data-default-tab="js,result" data-user="rwarbelow" data-embed-version="2" data-pen-title="bgNWew" class="codepen">See the Pen <a href="http://codepen.io/rwarbelow/pen/bgNWew/">bgNWew</a> by Rachel Warbelow (<a href="http://codepen.io/rwarbelow">@rwarbelow</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Checking Key Presses

jQuery allows us to check for certain keys being pressed. Paste this in your JavaScript box. Next, ***click in the preview area*** and press the h key on your keyboard. Clicking in the preview area is essential -- it will not watch for keypresses until you do this. Remember this later! 

```js
$(document).keydown(function (e) {
  var key = e.which
  if(key == '72') {
    alert('you pressed h!')
  }
});
```

'72' is the the keycode for the h key. On the third line, we're checking to see if Take a look at other keycodes <a href="https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes">here</a>. 

For now, don't worry too much about the intricacies of structure in this construct; just know that it is a format you can use to figure out which key was pressed. 

<div class="try-it">
<h2>Try It: Using Keycodes</h2>

<p>Modify the keycode number and alert message to respond to a user pressing the down arrow key. NOTE: This is different from the "page down" key.</p>
</div>

## Combining Key Presses and Movement

Look at your previous example. Replace your alert with the line below. What happens? 

```js
$('div').css({marginTop: '+=15px'});
```

What happens if you change it to '-=15px' instead of '+=15px'? 

Try replacing marginTop with marginLeft.

<div class="try-it">
<h2>Try It: Movement Based on Key Presses</h2>

<p>Modify your program so that the block can move in all four directions. You might want to do some Googling!</p>

<p>If you're super stuck, look at the starter block of code below.</p>
</div>

```js
if(key == "40") {
  // your code here
} else if(key == "38") {
  // your code here
} else if(key == "37") {
  // your code here	
} else if(key == "39") {
  // your code here	
}
```
