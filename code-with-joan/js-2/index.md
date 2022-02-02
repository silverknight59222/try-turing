---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Event Listeners

Before JavaScript, websites used to be built with only HTML and CSS. You could maybe click a button and go to another page, but that’s about it. Now, we can do so much more thanks to JavaScript! 

## Tour the Existing HTML Code

We will be using a new practice replit to practice these skills before we implement them in our project. Go ahead and <a target="blank" href="https://replit.com/@turingschool/javascript-event-listeners#index.html">fork this replit</a> to get started.

Look at all three files and try to answer these questions.

- How many HTML elements are creating the elements that appear in the browser?
- Which HTML element already has a class on it? What would be a good name for a class on the other elements?


## Accessing an HTML Element with JavaScript

We know variables can store information to reference later. Variables can also reference <strong>parts of the HTML</strong> we’ve written using the JavaScript method `document.querySelector` to access that element. For example, if we want a variable to represent the `h1` heading at the top of our page, we need to do two things:

1. Add a class to the `h1` element in the HTML.
2. Use the JavaScript method `document.querySelector` to access that element.

Here's how that looks in practice:

```html
<!-- HTML code -->
<h1 class="heading">Puppy Facts</h1>
```

```js
// JS code
var title = document.querySelector('.heading');

console.log(title.innerText);
// "Puppy Facts" will print out to the console
```

If you look the script.js file in our practice replit, you'll notice that those two lines of code are already in there.

- What happens when you run the code?
- What do you think line 10 is doing?

For the first time today, we have our JavaScript "talking to" our HTML code! This is exciting stuff! Go ahead and follow the directions in your `script.js` file to create a variable for every HTML element, console.log the values, and then reassign the values.

## Event Listeners

In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. Right now, all of our content changes immediately when the page loads. We want the content to only change <em>when the user clicks the button</em>. That’s an event listener – you’ll tell the code to listen for a click on a specific button on the page, then run the code that changes the content. 

Here's how that looks in practice:

```html
<!-- HTML code -->
<h1 class="header">Puppy Facts</h1>
<button>Change the topic!</button>
```

```js
// JS code
var title = document.querySelector('.header');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
  title.innerText = "Kitten Facts";
})
```

Now that we moved the reassignment of the value on the title inside of the event listener, that code will only run after the user clicks on the button. BOOM! We have an interactive webpage.
<br><br>


<div class="try-it-new">
  <h2>Breakouts: Event Listeners </h2>
  <p>Back in <a target="blank" href="https://replit.com/@turingschool/javascript-event-listeners#script.js">your practice replit</a>, use the example above to write your own event listener below line 12. Here are some things to keep in mind:</p>
    <ul>
      <li>Spelling matters. If you named your button variable <code>button</code> instead of <code>btn</code> like the example, use the spelling you chose!</li>
      <li>All of those characters matter. Make sure you have quotations around "click" and you have opening and closing grouping symbols.</li>
      <li>You can put more than one line of code inside of your event listener function. Put everything you want to change inside of that code block and everything will change at once!</li>
    </ul>
</div>


## JavaScript Event Listeners Summary

- We can access an HTML element using the document.querySelector JavaScript method.
- Event listeners allow us to wait for a user action to change something on the page.
<br>

<a href="../extensions">Next Section: Interactive Buttons</a>
