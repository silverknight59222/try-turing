---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript - Conditionals
Sometimes, we only want code to run if a condition is met. For example, if a user is not already registered, show them the “Create an account” button. If the user is already registered, show them the “Sign in” button. To take a different path in our code based on some information, we use something called a `conditional`.

## Checking for Empty Values
What happens if you don’t type in any values and you click the button? Uh-oh. Our code will still run, but the user sees a very broken and unknown future. We need to check that the user actually typed in values for all fields before we calculate their future. Any time we want to take a different path in our code based on a condition, we need to use a conditional. Below, you can see an example of a `conditional` that changes the response based on a user's age.

```js
var age = 17;

if (age < 18) {
console.log(“You aren’t old enough to vote yet!”);
} else if (age == 18) {
console.log(“It’s your first chance to vote. Make sure you are registered!”);
} else {
console.log(“You can vote! Hooray!”);
}
```

<div class="try-it-new">
  <h2>Try It: Conditionals</h2>
  <p>In this <a target="blank" href="https://replit.com/@turingschool/javascript-conditionals#script.js">starter replit</a>, we have a similar setup to our almost-MASH app. </p>
  <ul>
    <li>Within the <code>showResponse</code> function, write a conditional statement to check for a value for the input field.</li>
    <li>If the current value for <code>firstName</code> is an empty string (""), show the user a response message that says, “Please complete all fields before continuing.”</li>
    <li>If there is a value for the name input field, continue with the “thank you for registering” message.</li>
    <li><strong>Finished?</strong> Make a second input field for <code>lastName</code> and check that both first name and last name are completed before showing the response message. (Hint: The symbol <code>||</code> represents OR in JavaScript code. We can check two conditions using the <code>||</code> symbol between the conditions. You can find the pipe symbol above your return key on your keyboard.)</li>
  </ul>
</div>

## Update Your MASH App
Next, we will use a conditional in our MASH app to check that the user has completed all fields before continuing.

<div class="try-it-new">
  <h2>Conditionals in your MASH App</h2>
  <p>Back in your MASH app, find the <code>showFuture</code> function and write a conditional to check for empty values in any of the arrays. Hint: You will need to use the array method <code>.includes()</code> to check if any elements in the array match a given value.</p>
  <ul>
    <li>If any of the arrays include an empty string (“”), change the value of the future variable to be a message asking the user to complete all fields and try again.</li>
    <li>If all fields are complete, the rest of our code should run, ending with the future variable reassigned to the future that was chosen.</li>
  </ul>

  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-5#script.js">like this</a>.</p>
</div>

## JavaScript - Conditionals Summary
- Conditional statements allow us to take different paths in our code based on information.
- Conditionals are very common for verifying whether or not a user has completed all fields.

<a href="../css">Next Section: CSS - Styles</a>
