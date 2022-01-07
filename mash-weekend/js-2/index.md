---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript - Behavior
Right now, we chose the elements we wanted for our future, but that’s not very much fun. Instead, we want a random future chosen for us! And we probably want a different random element from each array every time. When we want to perform the same action repeatedly in our code, it’s a good idea to use a `function`. A function is a block of code designed to perform a specific task. We first define the function and then we call it when we want it to perform the task. 

```js
function sayHi() {
console.log("Hello!");
}

sayHi();
// => “Hello!”

sayHi();
sayHi();
// => “Hello!”
// => “Hello!”
```

We can even make our functions perform the same action with unique values by defining a parameter in the function and passing in an argument when we call the function. In this example, name is the parameter (a variable used only in the declaration of the function) and each of the strings “Kaitlyn”, “Amy” and “Jeff” are all arguments.

```js
function sayHi(name) {
console.log(`Hello, ${name}!`);
}

sayHi(“Kaitlyn”);
sayHi(“Amy”);
sayHi(“Jeff”);
// => “Hello, Kaitlyn!”
// => “Hello, Amy!”
// => “Hello, Jeff!”
```

<div class="try-it-new">
  <h2>Try It: Functions</h2>
  <p>Fork <a href="https://replit.com/@turingschool/javascript-functions#script.js" target="blank">this replit</a> and write a function to get a random number. We will be working in the JavaScript file only.</p>
  <ul>
    <li>Use the function keyword and name your function <code>getRandomNumber</code>.</li>
    <li>Your function should take a parameter called <code>maxNumber</code>.</li>
    <li>Use the <code>Math.floor()</code> and <code>Math.random()</code> methods to calculate a random whole number between 0 and the <code>maxNumber</code>.</li>
    <li>Use the <code>return</code> keyword to make sure the function returns the random number that was chosen.</li>
    <li>Use <code>console.log()</code> and call the function several times using a different <code>maxNumber</code> each time to make sure that your function is working!</li>
  </ul>
</div>

## Update Your MASH App
Now that we understand the role of functions in an application, let's update our MASH app to get a random value from each array.

<div class="try-it-new">
  <h2>Functions in Your MASH App</h2>
  <p>Back in your MASH starter kit, follow these steps to begin using functions in your project.</p>
  <ul>
    <li>In your JavaScript file, declare a function called <code>getRandomNumber</code> that takes in an array for a parameter.</li>
    <li>The function should return a random number between 0 and the maximum index value in the array. Hint: To get the maximum index value, try using the <code>length</code> method we looked at earlier!</li>
    <li>Use that function to get a random element from each array in your future variable, instead of a predetermined value that you selected!</li>
  </ul>

  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-2#script.js">like this</a>.</p>
</div>

## Connect JavaScript to HTML
The biggest problem with our current code is that the user can’t see the future we’ve chosen for them. The console is only visible to developers and won’t show up in the browser. We need a way to modify the HTML once we’ve selected the future, so that the user can see it!

>Note: We will be using jQuery, a JavaScript library, to assist us in completing some of the tasks that follow. If you create your own replit at any point, make sure to add jQuery under the “packages” section on the left toolbar in replit.

Variables can also reference parts of the HTML we’ve written using jQuery to access that element. The syntax is similar to what we did for interpolation, but we tell jQuery which element to reference using a unique identifier, called an id! 

### Explore to Learn
Look back at your HTML file in the MASH starter kit. 
- Where do you see an `id` in this HTML code?
- Is there anywhere it would make sense to add another `id`?

To show our user their future on the screen and not in the console, we need a way to reference the paragraph element in the HTML with the id `future`. The `#` symbol tells jQuery to look for an id with the name `future`.

```js
var futureSection = $("#future");
```

We can then access the text property of that element by using the `text()` method and pass in a new value for the argument to change the text in that element! Take your future variable that was giving the user a random future in the console and move that statement to the argument for the `text()` method. Click the green `Run` button to see the future appear in the browser!

```js
futureSection.text(future);
```

## Event Listeners
Right now, the future shows up right away. What’s the point of having a button if you never use it? We want our code to _wait_ for the user to click the button before showing the future. In JavaScript, an event listener is a way to set up code to run only when a very specific thing happens. You want to change the color of something when the user clicks a button? Great! That’s an event listener – you’ll tell the code to listen for a click on a specific element on the page, then run the code that changes the color. You want to wait to show the user’s future until after the user clicks a button? That’s an event listener too!

<div class="try-it-new">
  <h2>Event Listeners in Your MASH App</h2>
  <p>Back in your MASH starter kit, follow these steps to set up an event listener to <em>wait</em> for your user to click the button before showing their future!</p>
  <ul>
    <li>Store a reference to the “Click to see your future!” button in a variable called <code>futureButton</code>.</li>
    <li>Declare another function called <code>showFuture</code> that will change the text of the futureSection. Paste your code from the previous step (futureSection.text(future)) inside the body of the function. </li>
    <li>To write an event listener, start with the variable that refers to the button followed by the keyword on and pass in two arguments – the event to wait for (<code>“click”</code>) and the function you want to run when that happens (<code>showFuture</code>).</li>
    <li>Now that the future only shows up when we click a button, you can remove the “Your future goes here.” text in the HTML file that currently appears when you load the application.</li>
    <li><strong>Finished?</strong> If you want to recalculate your future every time you click the button, what else needs to be inside of the <code>showFuture()</code> function?</li>
  </ul>

  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-3#script.js">like this</a>.</p>
</div>

## JavaScript - Behavior Summary

- Functions allow us to perform the same task multiple times throughout our code.
- We can use variables to store a reference to an HTML element.
- Event listeners allow us to wait for a user action before executing a function.

<a href="../review">Next Section: Day 1 Review</a>
