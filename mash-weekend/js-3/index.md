---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript - Capture User Input
So far, we can select a random future for the user, but it’s still not very dynamic, because it only chooses from the hard-coded values we typed in the arrays. Let’s review <a target="blank" href="https://www.youtube.com/watch?v=vFPxE3KnVro&t=4s">this video</a> to remember where we are going with this app.

## Planning for New Functionality
A lot of people have the misconception that coding is all about typing really fast, in a basement, usually alone, etc. That’s not really the case. Most software developers say they spend at least 40% of their time planning and/or collaborating with other developers on how to design solutions in code. To plan for new features, developers often write pseudocode. Basically, in plain English, what do you want your application to do?

<div class="try-it-new">
  <h2>Try It: Pseudocoding</h2>
  <p>Think through every step of what would need to happen next to make our app mirror the paper version as closely as possible. What features are missing from our app? What steps would we need to take to make this happen? Break it down as much as possible!</p>
</div>

## Capture User Input
Next, we will capture user input using another jQuery method similar to the `text()` method. The `val()` method allows us to access the value that was typed into an input element. Let's talk through the code below as an example.

```js
var jobs = [];

var jobOne = $("#job-1").val();
var jobTwo = $("#job-2").val();
var jobThree = $("#job-3").val();

jobs = [jobOne, jobTwo, jobThree];
```

<div class="try-it-new">
  <h2>Code-Along: Capture User Input for One Category</h2>
  <p>You have two options for this next part. You can code along with me or you can copy and paste the code and then watch as I explain it.</p>
  <ul>
    <li>Delete the original values from your array.</li>
    <li>First, capture the values from the inputs and store them in variables.</li>
    <li>Then, reassign the value of the array to be the inputs the user typed in.</li>
  </ul>
</div>

## Update Your MASH App
Now that we understand how to capture user input for one category, let's apply that knowledge to our remaining categories!

<div class="try-it-new">
  <h2>Capture All User Input in Your MASH App</h2>
  <p>Do the same thing for the other categories in your MASH app.</p>
  <ul>
    <li>Delete the original values of the array.</li>
    <li>Store the values from the input elements in variables.</li>
    <li>Reassign the value of the array.</li>
    <li><strong>Note:</strong> You want to capture all of the input values only when the user clicks the button! You’ll need to move all of that code inside of the <code>showFuture</code> function to make sure you capture those values when the user clicks the button.</li>
    <li><strong>Finished?</strong> If you want to clear all input fields after the user clicks the button, use this line of code at the end of your showFuture() function –  <code>$(“:input”).val("");</code> – this tells jQuery to find all of the input fields and reset their values to an empty string!</li>
  </ul>

  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-4#script.js">like this</a>.</p>
</div>

## JavaScript - Capture User Input Summary

- Planning how we will approach a solution is just as important as the code itself.
- We can capture user input using the `val()` method.
- You likely have some gaps in fully understanding the final solution - again, that is OKAY - the goal of this was not to go deep, but spark some interest for what is possible!

<a href="../js-4">Next Section: JavaScript - Conditionals</a>
