---
layout: lesson
---

# DOM Manipulation
<a href="../">Back to Curriculum Index</a>

## Goals

- Store HTML elements in variables
- Understand the role of event listeners in a web application
- Use the syntax to attach an event listener on a button
- Append new HTML elements to an existing container

## Storing HTML Elements

JavaScript variables can store parts of the HTML that we've written. If we wanted a variable to represent the `h1` heading at the top of our page, we'd need to do two things:

1. Add an ID to the `h1` element in the HTML
2. Use the JavaScript method `.getElementById` to access that element

Here's how that looks in practice:

```html
<h1 id="greeting">Hello, world!</h1>
```

```js
var greetingMessage = document.getElementById('greeting');

console.log(greetingMessage);
// "<h1 id="greeting">Hello, world!</h1>" will print out to the console
```

We will need to create several variables in our programs - one for each HTML element that we want to monitor or change.

<div class="try-it-new">
  <h2>Try It: Storing Elements</h2>
  <p>In your Glitch project, declare two variables. One should store the button and the other should store the section in the HTML file.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>var button = document.getElementById('add-btn');
var allToDos = document.getElementById('all-todos');</pre>
    </div>
  </div>
</div>

## What Are Event Listeners?

Imagine that you’ve just ordered food from GrubHub and are waiting for it to arrive. When the doorbell rings, you’ll stand up from the couch, walk over to the door, open it, and take your food. Guess what? You programmed yourself with an event listener.

In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. You’ll give instructions to the program to listen for the mouse to click on a specific element on the page. When that element is clicked, the program will call a specific function for you.

## Listen For a Button Click

If you attended the first Try Coding workshop, the concept of an event listener may seem familiar. The syntax below, however, may be new.

When the button with the ID of `submit-btn` is clicked, the named function `showAlert` will be called. Notice that the `()` _was not_ included after the name of the function to call it.

```javascript
var button = document.getElementById('submit-btn');

button.on('click', showAlert);

function showAlert() {
  alert("You did it! You clicked the button!")
}
```

## Adding New Elements

Most content that appears in a web application was not "hard-coded", or, typed character-by-character into the HTML. Rather, it was added dynamically.

When we add new content to a page, it needs to live in an HTML element. When we want to add a new HTML element to the page, we need to be able to give specific instructions on where that element should live.

Container elements, like `<div>`, `<nav>`, and `<section>` have the responsibility of wrapping other elements. A common pattern in FE development is to create an empty container element in our HTML, then insert `<p>`, or other elements into using JavaScript.

```javascript
var container = document.getElementById('.container-id');

container.innerHTML += "<p>Hi</p>";
container.innerHTML += "<p>Hey</p>";
container.innerHTML += "<p>Hello</p>";
```

When this code runs, the HTML will not change. But the browser will read the JavaScript and append, or insert, the 3 new `<p>` elements inside of the `<section>` element.

<div class="try-it-new">
  <h2>Try It: Adding New Elements</h2>
  <ol>
    <li>In your Glitch project, attach an event listener to the button. Instruct it to call a function named <code class="try-it-code">addToDo</code>.</li>
    <li>Do you see a little red dot to the left of your new line of code? That's because Glitch is trying to tell you that it doesn't know about a function named <code class="try-it-code">addToDo</code>. Below your event listener, define that function!</li>
    <li>Inside of the <code class="try-it-code">addToDo</code> function, append a new paragraph tag to the section. The paragraph can contain any text you'd like!</li>
  </ol>
  <br>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <p><a target="blank" href="https://glitch.com/edit/#!/dom-manipulation-solution">Here's a Glitch project</a> with the completed challenge.</p>
    </div>
  </div>
</div>

<a href="../">Back to Curriculum Index</a>
