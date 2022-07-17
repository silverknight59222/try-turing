---
layout: lesson
---

# Interacting with HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Declare variables that store HTML elements
- Change the content inside an HTML element with JavaScript

## Accessing an Element

Variables can also represent parts of the HTML that we've written. For example, if we wanted a variable to represent the `h1` heading at the top of our page, we'd need to do two things:

1. Add an ID to the `h1` element in the HTML
2. Use the JavaScript method `.getElementById` to access that element

Here's how that looks in practice:

```html
<!-- HTML code -->
<h1 id="greeting">Hello, world!</h1>
```

```js
// JS code
var greetingMessage = document.getElementById('greeting');

console.log(greetingMessage);
// "<h1 id="greeting">Hello, world!</h1>" will print out to the console
```

<div class="try-it-new">
  <h3>Try It: Accessing HTML Elements</h3>
  <p>Fork <a href="https://replit.com/@turingschool/interacting-with-html#script.js" target="blank">this starter replit</a>. Declare three variables, each storing one of the three <code>paragraph</code> elements already written in HTML. You can decide the variable names to use! In order to access each element, you'll need a <em>unique</em> way to identify each one. <em>This has already been done with the <code>h1</code> element; you can use that as an example.</em></p>
  <p>Print each variable out to the console to verify your syntax is correct.</p>
  <p><span role="img" aria-label="open folder">📂</span> Keep this replit open in a tab; we'll come back to it in the next section!</p>
</div>

## Changing Text of an Element

Accessing elements alone isn't _that_ cool, but it gets more exciting when we use JavaScript to interact with those HTML elements that we've saved to variables. Let's look at <a href="https://replit.com/@turingschool/change-html-with-js#index.html" target="blank">this example</a>.

Before we talk through it, take a minute to sit in that productive struggle and **try to sort through what this code is doing, and how**. The guiding questions below will help you, if you need them!

- What is the content inside of each of the `<a>` tags in the HTML file?
- What content is showing up in the browser for each of the bullet points?
- On line 4 of the JavaScript file:
  - What does `firstLink` reference?
  - What _might_ `.innerText` be doing?
  - Does `"Front End Workshop"` look familiar?

<div class="try-it-new">
  <h3>Try It: Changing Text of an Element</h3>
  <p>Back in your Puppy Facts replit, write JavaScript that will change the content of the <code>h1</code> and three <code>paragraph</code> elements you have variables for, so that your page is about a completely different animal!</p>
  <p>When you've completed this, you should see a different title and set of facts in your browser!</p>

  <div class="spicy-container">
    <p class="spicy-click">
      <span role="img" aria-label="spicy pepper">🌶</span>Click here for a Spicy Challenge<span role="img" aria-label="spicy pepper">🌶</span>
    </p>
    <div class="spicy-toggle">
      <p>Do some research to figure out how you can change the <code>src</code> attribute of an <code>img</code> tag in JavaScript! Then, update your image with one that goes with your new facts!</p>
    </div>
  </div>
</div>

<br>
<a href="../event-listeners">Optional Extension: Event Listeners</a>
<br>
<a href="../wrap-up">Next: Wrap Up</a>
