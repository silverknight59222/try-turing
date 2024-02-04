---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [JavaScript Intro](../js-intro)

# Control Flow

The control flow is the order in which the computer executes the statements in our text editor. Code normally runs from the first line in the file to the last line, top to bottom, unless something changes that. Enter Control Flow.

## What is Control Flow?

You probably noticed the program we wrote before isn’t very flexible. We can ask the user a question and store their input, but we pretty much always say the same thing in response. What if we wanted the flexibility to change the behavior in reaction to the data?

Control flow gives us the flexibility we’re looking for. We can change the response depending on the information the user types. Take a look at the code below and see if you can guess what the output might look like. Be prepared to share.

```js
var age = 35;

if (age >= 21) {
  console.log("Welcome to Sierra Nevada Brewing Company!");
} else {
  console.log("Sorry, you’re not old enough to access our site. Come back later!");
}
```

## if Statements

JavaScript's <code>if</code> statement is always followed by an expression, which is a fancy way of saying something that evaluates to true or false. If the expression evaluates to true, anything inside that code block is executed. However, if the expression is false, JavaScript skips over that block of code. Here’s an example of what that might look like:

```js
if (5 > 4) {
  console.log("You will see this statement in the console, because five is greater than four!");
}
```

The way our code is written now, if the expression evaluates to false, we don’t see any output in the console. In order to have another statement that runs if the expression is false, we need an <code>else</code> statement. Here’s an example:

```js
if (5 < 4) {
  console.log("This statement won’t print, because five is NOT less than 4.");
} else {
  console.log("This statement will print instead!");
}
```

We can also check a second condition if we want using an <code>else if</code> statement.

```js
if (5 < 4) {
  console.log("This statement won’t print, because five is NOT less than 4.");
} else if (5 > 4) {
  console.log("This statement will print, because five is greater than 4.");
} else {
  console.log("This statement won’t print, because a true expression was already found!");
}
```

<div class="try-it-new">
  <h3>Try It: Control Flow with if Statements</h3>
  <p>Back in your sandbox replit, write a program that will check the user’s age and determine whether or not they can rent a car using the following guidelines:</p>
  <ul>
    <li>If the driver is below 20 years old, they cannot rent a car.</li>
    <li>If the driver is between 20 and 24 years old, they can rent the car, but they need to pay an underage driver fee.</li>
    <li>If the driver is over the age of 25, they can rent the car.</li>
  </ul>

</div>

### Up Next

- [User Input](../user-input)
