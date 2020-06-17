---
layout: lesson
---

# Front-End Extensions

## Dynamically Adding HTML

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
  <h2>Try It: Puppy Fact Generator</h2>
  <p>For this challenge, use <a target="blank" href="https://codepen.io/turing-school/pen/wvaLXam">this CodePen as a starter</a>. Your goal is to build an application that displays a new button. When the user clicks the button, they get surprised with a new fact! You can determine what level of challenge you are up for. <em>Spicy</em>: take those directions and get to work.</p>

  <div class="help-container">
    <button class="help-click">🤚I'm not ready for the Spicy Challenge!</button>
    <div class="help-toggle">
    <div class="left-align">
      <p>That's ok! Follow the steps below for a little guidance.</p>
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
        <li>Use <code>appendChild</code> to insert the paragraph to your fact section.</li>
      </ul>
      </div>
    </div>
  </div>

</div>

## Connecting a Front-End and Back-End

## Goals

- Use JavaScript to ask a backend API for data
- Programmatically add that data to your HTML

## APIs

**API** stands for Application Programming Interface. It can refer to a lot of different things, but in our case today, we're going to think of it as a service we can ask for data.

We're going to use an API that stores compliment data. We'll ask it to give us a compliment back. Then, as Front-End developers, we will decide _how_ that data gets displayed to the page.

The API that we're going to be using today has an endpoint (or URL) that gives us back a random string of a compliment. Before we integrate the API into our code, let's check out the endpoint to see the raw data that it gives us: [Dog Fact API Endpoint](https://dog-api.kinduff.com/api/facts). Refresh the page a few times, as this endpoint is set up to generate a random string for each request under the "Facts" section.

Now, let's look at how we can use that endpoint in our JavaScript code.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="js,result" data-user="turing-school" data-slug-hash="zYGVarY" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dog Fact API Example">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/zYGVarY">
  Dog Fact API Example</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="try-it-new">
  <h2>Try It: Integrating the API</h2>
  <p>Go back to your Puppy Fact Generator. Right now, we've <em>hard-coded</em> a fact. Where can you integrate the call to the dog fact API so that you can get back a random fact and show that to the user?</p>

  <div class="help-container">
    <button class="help-click">🤚Help Me!</button>
    <div class="help-toggle">
      <p>Check out <a target="blank" href="https://codepen.io/turing-school/pen/eYNLzLR?editors=1010">this example</a>.</p>
    </div>
  </div>

</div>

<br>
<a href="../">Back to Curriculum Index</a>
