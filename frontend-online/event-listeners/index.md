---
layout: lesson
---

# Event Listeners

<a href="../">Back to Curriculum Index</a>

## Goals

- Understand the concept of an event listener
- Attach an event listener to a button
- Continue building a developers mindset by _breaking code_ and being ok with it!

## Event Listeners

Imagine that you've just ordered food from GrubHub and are waiting for it to arrive. When the doorbell rings, you'll stand up from the couch, walk over to the door, open it, and take your food. Guess what? You programmed yourself with an event listener.

In JavaScript, an **event listener** is a way to set up code to run only when a very specific thing happens. You want to change the color of something when the mouse is in a specific place? Great! That's an event listener -- you'll tell the code to listen for the mouse to be on a specific element on the page, then run the code that changes the color.

## Syntax

Let's look at this example of an event listener and talk through the pieces:

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="html,result" data-user="turing-trycoding" data-slug-hash="oNxaYbb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Event Listeners Example">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/oNxaYbb">
  Event Listeners Example</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Break Things

Earlier, we talked about the mindsets developers must have to be successful: a growth mindset, demonstrated by being curious, resourceful, communicative, and not being afraid to question how things work.

We're going to take a few minutes to really "break" this code to build a deeper understanding of how it's working. If you've had that feeling of "I think I get it, but I couldn't recreate it" or "I basically get this... but if I had to identify one little error, I'd struggle to find it on my own", you are not alone.

When we "break" code, we are engaging in a process of tinkering with it to better understand it. To identify which piece of code plays which role in the functionality, it's important to only **break one tiny thing at a time**!

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turing-trycoding" data-slug-hash="OJNBbMx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Break Things">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/OJNBbMx">
  Break Things</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

- What happens if you remove lines 2-4 from the JavaScript?
- Bring back lines 2-4, now remove line 5. What happens?
- Bring back line 5. Remove lines 8-12. What happens?
- Why isn't the image changing? Look at line 3 in HTML and line 5 in JS to see if you can identify the problem.


## Applying What We've Learned

<div class="try-it-new">
  <h2>Try It: Changing HTML with JavaScript</h2>
  <p>Back in your own Puppy Facts CodePen, add a button in the HTML.</p>
  <p>Write code in the JavaScript pane so that when the button is clicked, the title of the webpage changes to a different topic!</p>
  <p>If you complete that with extra time, change the text in the <code>p</code> tags so that when the button is clicked, the facts match your new topic!</p>
  <a target="blank" href="https://codepen.io/turing-trycoding/pen/WNwaorJ"><em>Here's a CodePen you can start with!</em></a>
  <br>
  <br>

  <div class="spicy-container">
    <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
    <div class="spicy-toggle">
      <p>Wouldn't it be nice if the user could toggle back and forth between Puppy Facts and your other facts? Add another button, then implement the code to make this happen.</p>
    </div>
  </div>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
