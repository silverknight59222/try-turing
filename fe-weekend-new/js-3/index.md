---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Building Dynamic User Experiences

Now that we know how to create paths for different outcomes (if statements) and change what the user sees in the browser, let's combine those big areas of knowledge to build a small app!

For this final section, we will all start with <span role="img" aria-label="fork and knife emoji">🍴</span> [this starter kit](https://codepen.io/turing-trycoding/pen/yLgJPBb)!

<div class="try-it-new">
  <h2>Warm Up</h2>
  <p>The first steps of building this Number Guesser will be very similar to the work you just did!</p>
  <p><strong>STEP 1:</strong> Write an event listener and a function skeleton.</p>
  <p><strong>STEP 2:</strong> When the function runs, log a message to the user letting them know they clicked the button.</p>
</div>

## Collect User Input

The one piece of information you don't yet have is how to collect input from a user. Notice that in the HTML code we have an `input` tag:

```html
<input type="number">
```

The `input` tag is a bit different from others in that it is [self-closing](https://www.tutorialmines.net/self-closing-tags-html/), or doesn't have a closing tag. That's because there is no content that we would ever need to contain inside of the opening and closing tags!

To collect a _numerical_ value that the user may have typed into a given input element, we can use the following JavaScript code:

```js
var input = $('input');
var userInput = parseInt(input.val());
console.log(userInput);
```

<div class="try-it-new">
  <h2>Update Your Function</h2>
  <p>The work you do for this step should take place inside of your function:</p>
  <p><strong>STEP 3:</strong> Create a variable for the input element. Get the value of that element, and log it to the console to show the value they typed in. <em>To check that this is working, you'll need to enter a number in the input field and click the button!</em></p>
</div>

That's a great start! Those console.logs() don't show for the user though! They are a tool for developers only, but they won't show on the browser. Instead of using a <code>console.log</code>, let's show the user the number they typed, in the browser. We can use code like this:

```js
feedbackText.text(userInput);
```

This line of code says "for the `feedbackText` variable, change the text inside of it's HTML tags to be the value that is stored in the `userInput` variable".

<div class="try-it-new">
  <h2>Final Touches</h2>
  <p>Think way back to the earlier section on if statements, because this is where they come in:</p>
  <p><strong>STEP 4:</strong> Instead of notifying your user of the number they typed, write an <code>if statement</code> to compare the users guess to the correct number.</p>
  <p>Depending on if the user's guess is correct or incorrect, change the text of the "feedbackText" paragraph to a relevant message!</p>
  <div class="help-container">
  <button class="help-click"><span role="img" aria-label="raised hand">🤚</span>Help Me!</button>
    <div class="help-toggle">
      <p><a href="https://codepen.io/turing-trycoding/pen/abBpgNg?editors=1010" target="blank">Here is a CodePen with a working solution - it starts on line 17.</a></p>
    </div>
  </div>
</div>

## Building Dynamic User Experiences

- One we have a variety of tools - if statements and event listeners - we can combine them in different way to achieve different outcomes
- If you find yourself wondering "is it possible to...", the answer is most likely "yes"!

<a href="../extensions">Next Section: Extensions</a>

<a href="../wrap-up">Wrap Up</a>
