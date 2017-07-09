---
title: Events
layout: post
date: 2000-01-04
permalink: dom-events
program: front-end
tags: front-end
lessontype: fe-new
---

JavaScript is a powerful programming language. You can use it to do all kinds of cool things.

JavaScript can use CSS selectors to find elements on the page and then interact with them. If HTML is the structure and CSS is the style, you can think of JavaScript as the stuff that makes the user experience come alive.

## Responding to User Events

The real power of using JavaScript to change pages emerges when we start listening for user events.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what he or she sees.

Let's take a look at the example below:

<p data-height="265" data-theme-id="dark" data-slug-hash="KmwNEm" data-default-tab="js,result" data-user="turing" data-embed-version="2" data-pen-title="Try Coding - Events 1" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/KmwNEm/">Try Coding - Events 1</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The following things are happening in the example above:

- We're querying for any element with the id of `change-me`.
- We're adding an "event listener" to that element.
- We're listening for a user's mouse click.
- We're providing a function. You can think of a function as a package of code to be executed.
- The function contains code that, when a user clicks, will:
  - Find the first html element with the tag `h1`
  - Change the text in the h1 to 'Puppies are awesome.'

Now, whenever a user clicks on that button. The browser will run the function we provided to the event listener.

Next, take a few minutes with a partner to figure out what is happening in this example. In order to fully understand this one, you'll need to look at the HTML, the CSS, and the JavaScript.

<p data-height="265" data-theme-id="0" data-slug-hash="mwzwqV" data-default-tab="js,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Coding - Events 2" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/mwzwqV/">Try Coding - Events 2</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<div class="try-it">
<h2>Try It: Toggling a CSS Class</h2>

<p>Go back to your personal page. Use JavaScript to toggle the class of a heading when it is clicked. The new class should change at least one property of the element (for example: color, font-family, etc.)</p>

<p>We can also listen for things other than clicks. Take a moment to try these out. For example, you can replace "click" with: </p>

<ul>
  <li> dblclick </li>
  <li> mouseenter </li>
  <li> mouseleave </li>
  <li> keydown: NOTE: for this one, you'll need to use window.addEventListener("keydown"... instead of changeButton.addEventListener("... </li>
</ul>

</div>

## Getting Values from the User

We're getting somewhere good. We can respond to actions. It would be cool if we could also get some information from the user. If you recall, HTML provides `<input>` fields for just this kind of situation. We can get the `value` out of an input field!

Let's explore the following example.

<p data-height="265" data-theme-id="0" data-slug-hash="PjyjRb" data-default-tab="js,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Turing - Events3 " class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/PjyjRb/">Try Turing - Events3 </a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In this example, we're doing the following:

- We're adding an event listener to the "Change Me" button.
- When it's clicked, we're grabbed the value of the input field and storing it into a variable.
- We're then updating the contents of the `<h1>` to the value we stored from the input field.

<div class="try-it">
<h2>Try It: User Input</h2>

<p>Go back to your bio page that you created earlier. Add a heading at the top that says, "Welcome, guest!" and an input box for the guest to enter their name. When they click a submit button, change the text of "guest" to their name. </p>
<p>HINT: You may want to wrap the word "guest" in a span tag so that you can target it. A span tag is an inline element. See the example below of using a span tag to wrap a word.</p>
</div>

```html
  <p>Please add <span class='grocery-item'>tomatoes</span> to the grocery list.</p>
```
