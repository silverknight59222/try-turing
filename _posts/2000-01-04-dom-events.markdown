---
title: Events
layout: post
date: 2000-01-04
permalink: dom-events
<!-- program: front-end
tags: front-end
lessontype: fe-new -->
---

JavaScript is a powerful programming language. It can build entire sites, from back-end to front-end. Today, we're going to learn how to use JavaScript to manipulate the DOM - that is, to interact with the HTML and CSS that is displayed on the screen.

JavaScript can use CSS selectors to find elements on the page and then interact with them. If HTML is the structure and CSS is the style, you can think of JavaScript as the stuff that makes the user experience come alive.

## Responding to User Events

The real power of using JavaScript to change pages emerges when we start listening for user events.

This is the crux of front-end engineering. We present a user interface and then as the user interacts with the UI, we change and update what he or she sees.

Let's take a look at the example below:

<p data-height="265" data-theme-id="0" data-slug-hash="KXowVw" data-default-tab="js,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Coding - Events 2" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/KXowVw/">Try Coding - Events 2</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The following things are happening in the example above:

- We're querying for a button element.
- We're adding an "event listener" to that element, which requires two pieces of information:
  - We're listening for a user's mouse click.
  - We're providing a function. You'll notice that we're not _running_ the function - instead, we're just defining it. The event listener will run the function when it detects the mouse click!
- The function contains code that, when a user clicks, will:
  - Find the first html element with the tag `h1`
  - Change the text in the h1 to 'This is the NEW text using element names.'

Now, whenever a user first clicks on that button, the browser will run the function we provided to the event listener.

<div class="try-it">
<h2>Try It: Changing the Text</h2>

<p>Mild: Change the h1 tag to a p (paragraph) tag. Modify the JavaScript so that a button click changes the paragraph text.</p>

<p>Medium: Start a new codepen. Add a paragraph tag with some text and a button. Copy over the javascript from the previous example and modify it so that the text of the paragraph changes when the button is clicked.</p>

<p>Spicy: Start a new codepen. Add a paragraph tag with some text and a button. Type out your own JavaScript (use the example for reference) that makes the text change when the button is clicked.</p>
</div>

## Changing Styles with Event Listeners

Next, take a few minutes with a partner to figure out what is happening in this example. In order to fully understand this one, you'll need to look at the HTML, the CSS, and the JavaScript.

<p data-height="265" data-theme-id="0" data-slug-hash="mwzwqV" data-default-tab="js,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Coding - Events 2" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/mwzwqV/">Try Coding - Events 2</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<div class="try-it">
<h2>Try It: Toggling a CSS Class</h2>

<p>Mild: Using the same example from above, erase the "newcolor" CSS declaration. Create a new CSS class called "fancy" and add a few styles that change the font size, the text color, and the background color. Modify the JavaScript so that when the button is clicked, the fancy styles are applied.</p>

<p>Medium: In your codepen that you created for the last example, add a class called "fancy" that modifies the font-family, backgroud-color, and font-size. Then, type out or copy over the javascript from the previous example and make it so that when you click the button, the CSS class of fancy is toggled.</p>

<p>Spicy: In your codepen that you created for the last example, add a class called "fancy" that modifies the font-family, backgroud-color, and font-size. Then, type out JavaScript that makes it so that the user must double click (not just single click) to get the fancy style to apply. HINT: use "dblclick"</p>
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
<h2>Try It: Welcome the User</h2>

<p>Mild: In the example, keep the input tag but erase the h1 tag and the button. Add a p tag (paragraph) that says "Welcome, guest." Modify the JavaScript to make it so that when the user enters their name mouse hovers over the paragraph, the message greets them with "Welcome, [insert name].</p>

<p>Spicy: Add a heading at the very top of your page that says, "Welcome, guest!" and give it the ID of "welcome". Add an input box for a visitor to enter their name with the ID of "name". Add a button with the ID of "submit" and the button text of "Change Name".</p>
</div>
