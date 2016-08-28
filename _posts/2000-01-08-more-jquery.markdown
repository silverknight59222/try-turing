---
title: Some More jQuery
layout: post
date: 2000-01-07
permalink: more-jquery
---

Let's move away from our personal sites for just a second to talk about a few more JavaScript and jQuery concepts. 

### A Note on Working with Numbers

JavaScript has two ways of seeing if two values are equal: `==` and `===`. `==` is notoriously weird, so we tend to avoid it. But there is a small problem with using `===` and getting numbers from input fields that we need to discuss.

Let's consider the following example:

<p data-height="300" data-theme-id="23788" data-slug-hash="GqoYJQ" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/GqoYJQ/">Is this two?</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Hmm—that's curious. It doesn't seem to work. It's actually a good reason. No matter what, input fields always hold strings of text. So, we're actually getting the string `"2"` and not the number `2`. It makes sense that those things are not equal. What we need to do is to turn that string into a number before we compare it.

This is pretty common, so JavaScript gives us a function for doing it called `parseInt()`.

```js
parseInt("2") === 2; // true!
```

Now, we can update our code as follows:

```js
$('.user-submit').on('click', function () {
  var number = $('.user-number').val();
  if (parseInt(number) === 2) {
    $('.message').text('You are right!');
  } else {
    $('.message').text('Sorry, that is not the number 2.');
  }
});
```

It works now!

<p data-height="300" data-theme-id="23788" data-slug-hash="rLxqwe" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/rLxqwe/">Is this two? (Non-Working)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<div class="try-it">
<h2>Try It: Secret Passcode Time</h2>

<p>Can you change the code above so that it's looking for a secret passcode before it prints a hidden message to the screen? It's totally your call on what the password is and what the message should be. I don't want to steal your creative thunder.</p>
</div>

## Bringing It Together: CSS Transitions and Animations Together

We're getting there, right? We know how add and remove classes to elements on the page based on user input. We also know how to smoothly move things between two states using CSS. In the example below, the class of `clicked` is either added or removed whenever the box is clicked.

Change some of the properties of the `.box` and `.clicked` selectors and observe the changes. We'll show off some of our—umm—"most impressive" experiments in a few minutes.

<p data-height="300" data-theme-id="23788" data-slug-hash="xOVxxp" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/xOVxxp/">Flying Box</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Knowing Which Element We Clicked

Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special little variable called `this`. Lucky for us, `$(this)` is set to the box we clicked on.

Let's take a look at the example below:

<p data-height="300" data-theme-id="23788" data-slug-hash="EyKxpp" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/EyKxpp/">$(this)</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<div class="try-it">
<h2>Try It: jQuery and Animations</h2>

<p>Can you create a class that rotates the box 10 degress and then toggle that class on the specific box that was clicked? (For your own sanity, you probably want to remove the alert!)
</p>
</div>

A little while ago, we wanted to figure out how to tell which element we clicked. But, what if we wanted to find an element in relation to the element we clicked? jQuery lets us navigate from one element to another. When the browser parses our HTML, it creates a big tree-like structure. jQuery lets us hop from branch to branch.

We want each box to have a button inside of it. When the user clicks the button. It should rotate the entire box. (We're rotating the box with a CSS class called `.click` because we're super original.) Let's look at some code.

<p data-height="300" data-theme-id="23788" data-slug-hash="vKGYzo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/vKGYzo/">Rotating Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

This code _does not_ work the way we'd like. What we need to do is when the user clicks on a button. Go up and find the box that it lives in and add the class to _that_ element. We can try it like this:

<p data-height="300" data-theme-id="23788" data-slug-hash="YWqzJo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWqzJo/">Rotating Boxes</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

You can see all of ways we can move around the DOM tree in [jQuery documentation](https://api.jquery.com/category/traversing/tree-traversal/).
