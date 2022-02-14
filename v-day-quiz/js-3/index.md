---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# User Interaction & Functions

Ok, so now the first question shows up, but none of our buttons do anything! This is where we need some more JavaScript to implement user interaction. 

## Functions

Before we get the buttons working, we need to talk about one more JavaScript concept - functions! First, we `define` what we want that function to do. Then, we can `call` that function repeatedly to perform the same action many times.

Defining a function:

```javascript
function sayHello() {
  console.log("Hello!");
};
```

Calling a function:

```javascript
sayHello();
// => 'Hello!'
```

<div class="try-it-new">
  <h2>Functions</h2>
  <p>Back in your playground replit, complete exercises 13 and 14.</p>
    <ul>
      <li>Declare a function called clickButton() that will print "You clicked the button!" to the console.</li>
      <li>Call the function.</li>
      <li>Click the <code>Run</code> button. Did you see that statement in the console?</li>
    </ul>
</div>

## Event Listeners

In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. We don't want our clickButton() function to run immediately! We only want to call that function <em>when the user clicks the button</em>. We need an event listener.

Here's how that looks in practice:

```js
var heading = $('h2');
var description = $('#description');
var button = $('#next-btn');

button.on("click", clickButton();

function clickButton() {
  console.log("You clicked the button!");
}
```

<div class="try-it-new">
  <h2>Event Listeners</h2>
  <p>Back in your playground replit, use the example above to complete exercises 15 and 16.</p>
    <ul>
      <li>Declare a variable for the button element.</li>
      <li>Write an event listener to wait for a click on the next button and then call the function.</li>
    </ul>
</div>

Currently, in our playground replit, we are only showing the first friend. Ideally, when the user clicks the button, they see the next friend show up! This means we need a different function to accomplish that.

<div class="try-it-new">
  <h2>Show the Next Friend Function</h2>
  <p>Back in your playground replit, complete exercises 17, 18, and 19.</p>
    <ul>
      <li>Declare a variable to store the currentIndex.</li>
      <li>Declare a function called <code>showNextFriend</code> that replaces the text for the heading and the description with the next friend.</li>
      <li>Write another event listener to call the function when the button is clicked.</li>
    </ul>
</div>

## Conditionals

We have a working application! Our app now cycles through all of the friends in our array. However, it breaks when we get to the last friend. Let's start with thinking about the functionality. What do we want to happen when it's the last friend? We want the user to see a message that indicates that's the end and we probably want to disable that next button. We essentially have a fork in the road for our application. Every time the user clicks next, we want to show the next friend. However, <strong>if</strong> it's already the last friend, we want to show a "Done" message and disable the button. Here are two examples of conditional statements in practice.

```js
var friend = "Ashley";

if (friend === "Ashley") {
  console.log("She's cool!");
} else {
  console.log("Oh. I don't know them.");
}
// => 'She's cool!'
}
```

Notice that the `===` is checking if the values are the same. Since the friend variable is storing the string "Ashley", these values are the same and we get the "She's cool!" message in the console.

```js
var friend = "Kaitlyn";

if (friend === "Ashley") {
  console.log("She's cool!");
} else {
  console.log("Oh. I don't know them.");
}
// => 'Oh. I don't know them!'
}
```

This time, the variable friend is the string "Kaitlyn". Since friend is not equal to "Ashley", we get the other message this time.

<div class="try-it-new">
  <h2>Conditionals</h2>
  <p>Back in your playground replit, complete exercise 20.</p>
    <ul>
      <li>Edit your showNextFriend function with a conditional, so that as long as the current friend is not the last one, the next friend is shown.</li>
      <li><strong>Hint #1:</strong> To check if the currentIndex is still less than the length of the array, use <code>currentIndex < friends.length</code> for your condition. Your original code should go in the <code>if</code> block.</li>
      <li><strong>Hint #2:</strong> In the <code>else</code> block, show a "Done" message and disable the buttons.</li>
    </ul>
</div>

## Functions & Event Listeners in Your Project

Basically, there are two things that we want to happen repeatedly in our application. We want to show the user some feedback when the user clicks an answer and we want to show the current question when the user clicks next. That's two functions! To simplify your work for this section, I wrote the functions for you and you just need to uncomment that code.

<div class="try-it-new">
  <h2>Functions in Your Project</h2>
  <p>In your final project, look at the functions showQuestion and showFeedback under steps 4 and 5.</p>
    <ul>
      <li>Now look at the <code>showFeedback</code> function. What does each line of code do?</li>
      <li>Start with the <code>showQuestion</code> function. What does each line of code do?</li>
    </ul>
</div>

Now that we know what our functions are doing, let's add an event listener to trigger those functions when the user does something on our page.

<div class="try-it-new">
  <h2>Event Listeners in Your Project</h2>
  <p>In your final project, write event listeners under steps 6 and 7.</p>
    <ul>
      <li>Write an event listener to wait for a click on an option and then show the feedback.</li>
      <li>Write an event listener to wait for a click on the next button and then show the next question.</li>
    </ul>
  <p>Awesome! We have a fully-functioning quiz application. At this point, your project should look something <a href="https://replit.com/@turingschool/quiz-app-checkpoint-4#script.js" target="blank">like this</a>.</p>
</div>


## User Interaction & Functions Summary

- Everything that changes dynamically on the screen as the user interacts with the web page is all written in JavaScript! It’s a powerful tool and one of the most popular programming languages in the world right now.
- You likely have some gaps in fully understanding the final solution - again, that is OKAY - the goal of this was not to go deep, but spark some curiosity for what is possible!
<br>

<a href="../css">Next Section: CSS</a>