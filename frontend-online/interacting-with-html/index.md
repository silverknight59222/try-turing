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
  <h2>Try It: Accessing HTML Elements</h2>
  <p>Fork <a href="https://codepen.io/turing-trycoding/pen/dyMgOoM?editors=1010" target="blank">this Puppy Facts CodePen starter</a>. Declare four variables, each storing one of the four text-based HTML elements already written. You can decide the variable names to use! In order to access each element, you'll need a <em>unique</em> way to identify each one.</p>
  <p>Print each variable out to the console to verify your syntax is correct.</p>
  <p><em>Keep this pen open in a tab; we'll come back to it in the next section!</em></p>
  <div class="help-container">
    <button class="help-click">🤚Help Me!</button>
    <div class="help-toggle">
      <p>Need to see an example of this completed? <a target="blank" href="https://codepen.io/turing-trycoding/pen/NWNObqY">Here you go!</a></p>
    </div>
  </div>

</div>

## Changing Text of an Element

Accessing elements alone isn't _that_ cool, but it gets more exciting when we use JavaScript to interact with those HTML elements that we've saved to variables. Let's look at this example:

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="html,result" data-user="turing-trycoding" data-slug-hash="MWyPbwZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Changing Text of an Element Example">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/MWyPbwZ">
  Changing Text of an Element Example</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Before we talk through it, take a minute to sit in that productive struggle and **try to sort through what this code is doing, and how**. The guiding questions below will help you, if you need them!

- What is the content inside of each of the `<li>` tags in the HTML file?
- What content is showing up in the browser for each of the bullet points?
- On line 4 of the code:
  - What does `firstListItem` reference?
  - What _might_ `.innerText` be doing?
  - Does `"Front End Workshop"` look familiar?

<div class="try-it-new">
  <h2>Try It: Changing Text of an Element</h2>
  <p>Back in your Puppy Facts CodePen, write JavaScript that will change the content of all four text-based HTML elements you created variables for earlier.</p>
  <p>When you've completed this, you should see a different title and set of facts in your browser!</p>
  <a target="blank" href="https://codepen.io/turing-trycoding/pen/LYNgbpp"><em>Here's a CodePen you can start with if you closed yours or didn't get it done.</em></a>
  <br>
  <br>

  <div class="spicy-container">
    <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
    <div class="spicy-toggle">
      <p>Do some research to figure out how you can change the <code>src</code> attribute of an <code>img</code> tag in JavaScript! Then, update your image with one that goes with your new facts!</p>
    </div>
  </div>
</div>

<br>
<a href="../event-listeners">Next: Event Listeners</a>
