---
layout: lesson
---

# Dynamically Adding HTML

## Goals

- Create new HTML elements in JavaScript
- Combine everything we've learned today to build a small application

## Create HTML Elements in JavaScript

JavaScript is also used to add brand new HTML elements to the page. On some social media sites, once you finish scrolling to the bottom of the page, you'll see a button that says See More. When you click it, new things magically show up! How does this happen?

Let's look at the example below in groups of 3. Click on "Edit on CodePen" to open it in a new window. Seeing the full code will help you start to recognize JavaScript patterns. With your small group, walk through the code and see how much you can understand on your own. Then, we'll come back together and discuss.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="js,result" data-user="turing-school" data-slug-hash="PoqaVex" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="PoqaVex">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/PoqaVex">
  PoqaVex</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="try-it-new">
  <h2>Try It: Putting it All Together</h2>
  <p>Use <a href="https://codepen.io/turing-school/pen/zYGayVY?editors=1010" target="blank">this CodePen</a> as a starter for this final challenge! Your goal is to build an application that displays a fun picture and button. When the user clicks the button, they get surprised with a compliment! You can determine what level of challenge you are up for. Spicy: take those directions and get to work. Medium: follow the steps below for a little guidance.</p>
  <p>Complete these steps in the HTML pane:</p>
  <ul>
    <li>Add values to the <code>src</code> and <code>alt</code> attributes in the <code>img</code> tag in HTML</li>
    <li>Add a class to the <code>button</code> in the HTML</li>
    <li>Add a class to the <code>div</code> in the HTML</li>
  </ul>
  <p>Complete these steps in the JS file:</p>
  <ul>
    <li>Declare a variable that stores the <code>button</code> element</li>
    <li>Declare a variable that stores the <code>div</code> element</li>
    <li>Write a click event listener for the button</li>
    <li>Inside of the event listener, create an empty paragraph</li>
    <li>Add compliment text to that empty paragraph</li>
    <li>Use <code>appendChild</code> to insert the paragraph to your compliment section.</li>
  </ul>
  <p><a href="https://codepen.io/turingtrycoding/pen/KKwKZqy?editors=1010" target="blank">Here is one completed example</a> if you are looking for a little more support!</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
