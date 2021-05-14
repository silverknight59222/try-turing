---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Connecting HTML & JavaScript

To get all the fun and important interactions on a page, we have to connect the specific parts of HTML that we intend to allow interactions, to JavaScript!

## Accessing HTML from JavaScript

Let's look at [the code in this CodePen](https://codepen.io/turing-trycoding/pen/gOLmYvp?editors=1010), also typed out below, to learn how to start the "conversation" between HTML and JavaScript.

```html
<!-- HTML code -->
<p>This is a paragraph</p>
<button class="submit">A button!</button>
```

```js
// JavaScript code
var paragraph = $('p');
alert(paragraph.text()); //alert will say "This is a paragraph"

var button = $('.submit');
alert(button.text()); //alert will say "A button!"
```

## Changing HTML from JavaScript

Just displaying the information that's already on the page, in an alert, is not helpful though! It was just a stepping stone.

The next stepping stone is learning how to _change_ the text inside an HTML element from our JavaScript code.

<div class="try-it-new">
  <h2>Apply & Explore</h2>
  <p><a href="https://codepen.io/turing-trycoding/pen/yLVMBjP?editors=1010" target="blank">Use this CodePen as a starter</a> for this short activity.</p>
  <ol>
    <li>Create a variable that stores the <code>h1</code> element.</li>
    <li>On the next line, type something like <code>variableName.text('new text');</code>, using the variable name you selected and any text you'd like to see in the browser.</li>
    <li>Look in the mini browser - it should display the text you typed in that last line of code.</li>
  </ol>
</div>

### Listening for Button Clicks

The work we've done still may not seem too exciting though; what's the point? It was another stepping stone. This final section will help us put it all together with **event listeners**. Before we learn the specifics of the code, let's contextualize it with a real life situation:

Imagine that you’ve just ordered food from GrubHub and are waiting for it to arrive. When the doorbell rings, you’ll stand up from the couch, walk over to the door, open it, and take your food. Guess what? You programmed yourself with an event listener.

In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. You’ll give instructions to the program to listen for the mouse to click on a specific element on the page. When that element is clicked, the program will call a specific function for you.

```js
var button = $('button');

button.on('click', doSomething);

function doSomething() {
  // code you want to be run ONLY when button 
  // is clicked, goes here.
}
```

<div class="try-it-new">
  <h2>Next Level</h2>
  <p>For this challenge, you'll use the same CodePen you used for the previous one!</p>
  <ol>
    <li>In the previous challenge, you changed the title, but it happened on page load, so it wasn't very exciting.</li>
    <li>Combine the two new pieces of knowledge/skill you have to change the title only when the button is clicked. A hint is provided at the bottom of the JavaScript file, if you'd like to use that!</li>
  </ol>
</div>

## Connecting HTML & JavaScript Summary

- JavaScript can "talk to" the elements in HTML
- This communication can allow us to write programs that will listen for button clicks and change text on the page

<a href="../js-3">Next Section: Building Dynamic User Experiences</a>

