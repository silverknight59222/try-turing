---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Interactive FAQ Page

We have a complete FAQ Page, but it’s not very engaging as a user. Before JavaScript, websites used to be built with only HTML and CSS. You could maybe click a button and go to another page, but that’s about it. Now, we can do so much more thanks to JavaScript!

## Planning for New Functionality with Pseudocoding

A lot of people have the misconception that coding is all about typing really fast, in a basement, usually alone, etc. That's not really the case. Most software developers say they spend at least 40% of their time planning and/or collaborating with other developers on how to design solutions in code.

<div class="try-it-new">
  <h2>Pseudocoding</h2>
  <p>Pseudocoding is essentially writing down the high-level logic of your code in plain English, rather than using a specific coding language. Before we worry about the code, let's think about how we want the user to be able to interact with this page. Think through the intended purpose of the page and really try to understand it.</p>
  <ul>
    <li>What is the user trying to do with this page?</li>
    <li>What do we want to change on the screen as the user interacts with the page?</li>
  </ul>
  <p><strong>Take one minute to type in the chat one thing that you would like the see happen on your page when the user interacts with something.</strong></p>
  <p>If you need some help getting started, use a "when... then..." statement. For example, "When the user clicks on...then...<em>something happens</em>."</p>
</div>

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Pseudocoding Examples</h3>
    <div><button class="expander-btn"><img src="../../assets/icons/arrow.svg" alt="expander arrow icon" /></button></div>
  </header>
  <div class="hide">
    <ul>
      <li>When the user clicks the arrow down button, the answer to the question appears.</li>
      <li>When the user clicks the arrow down button, the arrow rotates 180 degrees to show an arrow up.</li>
      <li>When the user clicks the arrow up button, the answer to the question disappears.</li>
      <li>When the user clicks the arrow up button, the arrow rotates 180 degrees to show an arrow down again.</li>
    </ul>
  </div>
</div>

### Accessing an HTML Element with JavaScript

Variables can also reference parts of the HTML we’ve written using the JavaScript method `document.querySelector` to access that element.

### Event Listeners

In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. You want to change the color of something when the user clicks a button? Great! That’s an event listener – you’ll tell the code to listen for a click on a specific element on the page, then run the code that changes the color. You have two options for next steps on your project:

1. Follow my screen and do a live code-along.
1. Use <a target="blank" href="https://replit.com/@turingschool/faq-final#style.css">this replit</a> to copy and paste the last few lines of CSS and all of the JavaScript into your file and then watch as I code.

<div class="try-it-new">
  <h2>Write the JavaScript: Iteration 1</h2>
  <p>We want to dynamically add the “show-text” class when the user clicks the button.</p>
  <ul>
    <li>Use <code>document.querySelector</code> to select the element with the question class and store the reference to that element in a question variable.</li>
    <li>Use <code>querySelector</code> on that question variable to find the button element with the “question-btn” class and store the reference to that element in a button variable.</li>
    <li>Use <code>addEventListener</code> on the button variable to wait for a click and then add the “show-text” class to the classList on that question.</li>
    <li>Change <code>add</code> to <code>toggle</code> so that clicking on the button again removes the class.</li>
    <li>Add a CSS rule targeting the <code>.show text .question-btn</code> classes so that the arrow button rotates 180 degrees.</li>
  </ul>
  <p>Now, we have it doing what we want, but it’s only the first one! At this point, your code should look <a href="https://replit.com/@turingschool/faq-js-iteration1#style.css" target="blank">like this</a> if you want to check that you have it working as expected.</p>
</div>

<div class="try-it-new">
  <h2>Write the JavaScript: Iteration 2</h2>
  <p>We want this to happen on every question, not just the first one!</p>
  <ul>
    <li>On line 1, change <code>querySelector</code> to <code>querySelectorAll</code>. This will store an array of all HTML elements with the <code>.question</code> class.</li>
    <li>Change the variable name question to questions (plural form).</li>
    <li>Write a <code>forEach</code> method on the list of questions and pass in each question as the argument. Then, move the event listener code block inside of that function to apply the eventListener on all buttons.</li>
    <li>Remove <code>console.log</code> statements → these are not usually included in the final production. They are only used as a tool for developers.</li>
  </ul>
  <p>Now, our FAQ page is fully functional and the user can interact with each element on the screen! The final working solution can be found <a target="blank" href="https://replit.com/@turingschool/faq-final#style.css">here</a>.</p>
</div>

## JavaScript Interactions Summary

- We can access an HTML element using the document.querySelector JavaScript method.
- Event listeners allow us to wait for a user action to change something on the page.
- Everything that changes dynamically on the screen as the user interacts with the web page is all written in JavaScript! It’s a powerful tool and one of the most popular programming languages in the world right now.
- You likely have some gaps in fully understanding the final solution - again, that is OKAY - the goal of this was not to go deep, but spark some curiosity for what is possible!
<br>

<a href="../extensions">Next Section: Extension Challenge</a>
<br>
<a href="../wrap-up">Wrap Up</a>
