---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Interactive Buttons

We have a webpage, but there's no way for the user to see the definitions! It’s not very interactive for the user. Before JavaScript, websites used to be built with only HTML and CSS. You could maybe click a button and go to another page, but that’s about it. Now, we can do so much more thanks to JavaScript!

## Apply Event Listeners to Your Project

We will use what we learned about event listeners to make our buttons interactive. For this next part of the project, watch me first, and then I'll give you a chance to implement the same functionality in your project. The steps are listed below for your reference as well as the code that I'll be writing.

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Creating Interactive Buttons</h3>
    <div><button class="expander-btn"><img src="../../assets/icons/arrow.svg" alt="expander arrow icon" /></button></div>
  </header>
  <div class="hide">
    <p>We want to dynamically add the “show-text” class when the user clicks the button so that it stays hidden until the user clicks the button.</p>
    <ol>
      <li>Create a new variable called <code>cards</code> and use <code>document.querySelectorAll</code> to store an array of all of the HTML elements with the <code>card</code> class.</li>
      <li>Use the <code>forEach</code> method on the array of cards and pass in each card as the argument.</li>
      <li>Inside of the <code>forEach</code> block, create a new variable called <code>button</code> and store a reference to the button on that card using <code>card.querySelector(".card-btn")</code>.</li>
      <li>Use the <code>addEventListener</code> method on the button variable to wait for a click and then add the “show-text” class to the classList on that card. We will use the keyword <code>toggle</code> instead of <code>add</code>, so that the class will be removed if the user clicks on the button again!</li>
      <li>Remove any <code>console.log</code> statements → these are not usually included in the final production. They are only used as a tool for developers.</li>
    </ol>
  </div>
</div>

The code below shows what we added to our `script.js` file up to this point. If not everything makes sense right now, that's to be expected. Some of this is still going to feel like **magic**, but as you get more familiar with writing code, it will start to make sense. You can also check your work with <a target="blank" href="https://replit.com/@turingschool/mezcla-checkpoint-3#style.css">this replit</a>.

```javascript
var cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  var button = card.querySelector(".card-btn");
  button.addEventListener("click", function() {
    card.classList.toggle("show-text");
  });
});
```

<div class="try-it-new">
  <h2>Breakouts: Interactive Buttons</h2>
  <p>At this point, you'll get a chance in breakouts to get all of your buttons working. If this is your first code project, it's likely that you'll have questions or something will not work quite how you expect. In your breakout groups, share your progress!</p>
  <ul>
    <li>Start by giving everyone in the group 5 minutes to try writing the code above.</li>
    <li>After that, help anyone in your group who has broken code. See if you can problem-solve together and resolve the error.</li>
    <li>Take the time to get any questions answered. </li>
    <li><strong>Finished?</strong> Share lessons learned or challenges you encountered in this last section of the project!</li>
  </ul>
  <p>Use <a target="blank" href="https://replit.com/@turingschool/mezcla-checkpoint-3#style.css">this replit</a> to compare with yours and check your work.</p>
</div>

## JavaScript Interactions Summary

- Everything that changes dynamically on the screen as the user interacts with the web page is all written in JavaScript! It’s a powerful tool and one of the most popular programming languages in the world right now.
- You likely have some gaps in fully understanding the final solution - again, that is OKAY - the goal of this was not to go deep, but spark some curiosity for what is possible!
<br>

<a href="../extensions">Next Section: Group Challenge</a>
