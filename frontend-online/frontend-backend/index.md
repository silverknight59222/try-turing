---
layout: lesson
---

# Connecting a Front-End and Back-End

<a href="../">Back to Curriculum Index</a>

## Goals

- Use JavaScript to ask a backend API for data
- Programmatically add that data to your HTML

## APIs

**API** stands for Application Programming Interface. It can refer to a lot of different things, but in our case today, we're going to think of it as a service we can ask for data.

We're going to use an API that stores compliment data. We'll ask it to give us a compliment back. Then, as front-end developers, we will decide _how_ that data gets displayed to the page.

The API that we're going to be using today has an endpoint (or URL) that gives us back a random string of a compliment. Before we integrate the API into our code, let's check out the endpoint to see the raw data that it gives us: [Compliment API Endpoint](https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments). Refresh the page a few times, as this endpoint is set up to generate a random string for each request.

Now, let's look at how we can use that endpoint in our JavaScript code.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="js,result" data-user="turing-school" data-slug-hash="xxGaOJY" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Compliment API Example">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/xxGaOJY">
  Compliment API Example</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<div class="try-it-new">
  <h2>Try It: Integrating the API</h2>
  <p>Go back to your Compliment Generator. Right now, we've <em>hardcoded</em> a compliment. Where can you integrate the call to the compliment API so that you can get back a random compliment and show that to the user?</p>
  <p>Need help? Check out <a target="blank" href="https://codepen.io/turing-school/pen/eYNLzLR?editors=1010">this example</a>.</p>
</div>
