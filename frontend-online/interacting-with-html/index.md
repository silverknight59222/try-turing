---
layout: lesson
---

# Interacting with HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Declare variables that store HTML elements
- Change the content inside an HTML element with JavaScript

## Accessing an Element

Variables can also represent parts of the HTML that we've written. For example, if we wanted a variable to represent the h1 heading at the top of our page, we'd need to do two things:

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

<div class="try-it-new">
  <h2>Try It: Accessing HTML Elements</h2>
  <p>Fork <a href="https://codepen.io/turing-school/pen/rNVKQjG?editors=1010" target="blank">this CodePen</a>. Declare four variables, each storing one of the four text-based HTML elements already written. You can decide the variable names to use! In order to access each element, you'll need a <em>unique</em> way to identify each one.</p>
  <p>Print each variable out to the console to verify your syntax is correct.</p>
  <p><em>Keep this pen open in a tab; we'll come back to it in the next section!</em></p>
</div>

## Changing Text of an Element

Accessing elements alone isn't _that_ cool, but it gets more exciting when we use JavaScript to interact with those HTML elements that we've saved to variables. Let's look at this example:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="js,result" data-user="turing-school" data-slug-hash="rNVKQGY" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Changing Text of an Element Example">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/rNVKQGY">
  Changing Text of an Element Example</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
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
- On lines 6-7 of the code:
  - Based on what you inferred from working through the previous questions, what do you think these two lines of code are doing?

<div class="try-it-new">
  <h2>Try It: Changing Text of an Element</h2>
  <p>Back in your puppy CodePen, write JavaScript that will change the content of all four text-based HTML elements you created variables for earlier.</p>
  <p>When you've completed this, you should see a different title and set of facts in your browser!</p>
  <p><em>Finished early and ready for a challenge?</em> Do some research to figure out how you can change the <code>src</code> attribute of an <code>img</code> tag in JavaScript! Then, update your image with one that goes with your new facts!</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
