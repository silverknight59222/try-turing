---
layout: lesson
---

# Dynamically Adding HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Create new HTML elements in JavaScript
- Combine everything we've learned today to build a small application

## Create HTML Elements in JavaScript

JavaScript is also used to add brand new HTML elements to the page. On some social media sites, once you finish scrolling to the bottom of the page, you'll see a button that says See More. When you click it, new things magically show up! How does this happen?

Open the CodePen below in a new tab. Seeing the full code will help you start to recognize JavaScript patterns. Read through the code and see how much you can understand on your own. Then, we'll come back together and discuss.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="js,result" data-user="turing-school" data-slug-hash="PoqaVex" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="PoqaVex">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/PoqaVex">
  PoqaVex</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="try-it-new">
  <h2>Try It: Putting it All Together</h2>
  <p>For this challenge, use <a target="blank" href="https://codepen.io/turing-school/pen/wvaLXam">this CodePen as a starter</a>. Your goal is to build an application that displays a new button. When the user clicks the button, they get surprised with a new fact! You can determine what level of challenge you are up for. <em>Spicy</em>: take those directions and get to work.</p>
  <p>Not ready for the Spicy challenge? That's ok! Follow the steps below for a little guidance.</p>
  <p>Complete these steps in the HTML pane:</p>
  <ul>
    <li>Add an id to the <code>button</code> in the HTML</li>
    <li>Add an id to the <code>section</code> in the HTML</li>
  </ul>
  <p>Complete these steps in the JS file:</p>
  <ul>
    <li>Declare a variable that stores the <code>button</code> element</li>
    <li>Declare a variable that stores the <code>section</code> element</li>
    <li>Write a click event listener for the button</li>
    <li>Inside of the event listener, create an empty paragraph</li>
    <li>Add <code>puppyFact</code> text to that empty paragraph</li>
    <li>Use <code>appendChild</code> to insert the paragraph to your compliment section.</li>
  </ul>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
