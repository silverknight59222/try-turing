---
title: Introduction to JavaScript
date: 2000-01-06
permalink: javascript
program: front-end
---

## Quick Notes on Basic JavaScript

We've actually already seen some JavaScript such as variable assignment and functions while playing with jQuery.

JavaScript is a lot like Ruby, which you were introduced to yesterday. The syntax and some of the concepts are a little different, but the two have more in common than not. With JavaScript, you can do things like:

* Perform basic arithmetic (`2 + 2`, `3 * 3`)
* Create some strings
* Create an array
* Assign a value to a variable

Unlike Ruby, you need to use the `var` keyword when declaring a variable for the first time. If you forget the `var` keyword, your variable will be declared in the global scope—whether you meant it that way or not. (For our purposes today, forgetting the `var` keyword will not be the end of the world, but just know that it could cause subtle bugs in our code. Let's get in the habit of using it now.)

```js
var x = 1;
x = 2;
```

## Conditionals in JavaScript

JavaScript conditional statements have a few extra decorations as compared to Ruby.

```js
var secretPhrase = $('.user-input').val();

if (secretPhrase === "turing") {
  $('h1').addClass('highlighted')
} else {
  alert("DENIED!")
}
```

<div class="try-it">
  <h2>Try It: Adding a Conditional</h2>

  Remember when you welcomed a person with their name from the input box? Now add a conditional so that there is a bright color background on the welcome message if the input is your own name. Otherwise, pop open an alert that tells the user that guests have "limited access".
  <pre>
    if () {
      // do some jQuery!
    } else {
      // do something different!
    }
  </pre>
</div>


### Optional side note: Working with Numbers

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
