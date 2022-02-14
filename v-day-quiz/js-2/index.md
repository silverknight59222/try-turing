---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Connect HTML & JavaScript

Right now, our project has all the information it needs for the questions, but how do we get them to show up in the browser?! 

>Note: We will be using jQuery, a JavaScript library, to assist us in completing some of the tasks that follow. If you create your own CodePen at any point, make sure to [add jQuery to the pen in order for it to work!](https://blog.codepen.io/documentation/using-javascript-libraries/)

## Accessing an HTML Element with JavaScript

We know variables can store information to reference later. Variables can also reference <strong>parts of the HTML</strong> we’ve written using a JavaScript library called `jQuery` to access that element. Here's how that looks in practice:

```html
<!-- HTML code -->
<h2 id="name">Name Placeholder</h2>
<p id="description">A description of my friend will go here.</p>
```

```js
// JS code
var heading = $('h2');
console.log(heading.text());
// => "Name Placeholder" will print out to the console

var description = $('#description');
console.log(description.text());
// => "A description of my friend will go here." will print out to the console
```

You will notice that jQuery can access an element in multiple ways. It found the `h2` element using the tag for that element, but it found the element for the description based on it's id. Notice that we use a `#` before the name of the id.

For the first time today, we have our JavaScript "talking to" our HTML code! This is exciting stuff! Now, we can also use the `text()` property to set a new value for the text of that element. That would look like this:

```js
// JS code
var heading = $('h2');
heading.text(friends[0].name);
```

Now, when I click the green `Run` button, I see the first friend's name in the browser instead of my name placeholder!

<div class="try-it-new">
  <h2>Connect HTML & JavaScript</h2>
  <p>Back in your replit playground, complete exercises 11 and 12.</p>
  <ul>
    <li>Declare variables for the heading and the description that reference the h2 element and the element with the description id in the html.</li>
    <li>Change the text property on both variables and set them equal to the first friend's name and a description of that friend using the other two variables with string interpolation.</li>
  </ul>
</div>

## Connect HTML & JavaScript in Your Project

Now that we've tried this in our playground, let's use the same strategy to show our first question in our quiz projects.

<div class="try-it-new">
  <h2>Connect HTML & JavaScript</h2>
  <p>Navigate back to your quiz project replit. </p>
  <ul>
    <li>Under step 2, replace each empty string with an id that matches the id for the element in the html file.</li>
    <li>Now, under step 3, modify the text of the questionElement, optionAButton, and optionBButton to match the properties of the first question. Hint: You will need to use both bracket notation and dot notation to find the correct value!</li>
    <li>Finally, update the score element to show the current score using string interpolation.</li>
  </ul>
  <p>Click the green Run button at the top of the page to see the results! At this point, your project should look something <a href="https://replit.com/@turingschool/quiz-app-checkpoint-3#script.js" target="blank">like this</a>.</p>
</div>


## Connect HTML & JavaScript Summary

- Variables can store a reference to an HTML element using JavaScript.
- We can modify the `text()` property by passing in a new value for the text of that HTML element.
<br>

<a href="../js-3">Next Section: User Interaction & Functions</a>
