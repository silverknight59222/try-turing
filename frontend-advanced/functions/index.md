---
layout: lesson
---


# Functions
<a href="../">Back to Curriculum Index</a>

## Goals

- Explain the purpose of a function
- Use the syntax to define and call a function

## What is a Function?

A function is an _action_ in our code. It has a specific job, and it sits around waiting to be asked to do it. It can perform its job as many or as few times as we need. It can have a very small job (add two numbers together) or a very big job (find the standard deviation of 1 million numbers). We define them, so we have control over what each function does!

## Defining a Function

To define a function, we start with the keyword `function`, then name our function whatever we want. The name should describe the type of action our function is taking. Like variables, we use camelCase.

Directly after the function name, we see open and close parentheses `()`, then open and close curly brackets `{}`. The directions we want our function to take will live inside the curly braces, we we call a `block`. We can give a function as many directions as we’d like!

```js
//empty function definition
function addUp() {}
```

```js
//function definition with code inside block
function addUp() {
  var sum = 3 + 4;
  alert("I added two numbers!", sum);
}
```
## Calling a Function

We have a function written, but we need to **call** it for the function to actually run. Until we call the function, the code will just sit around and do nothing.

```js
addUp();
```

<div class="try-it-new">
  <h2>Try It: Functions</h2>
  <p>In your Glitch projects <code>scripts.js</code> file, define a function named <code class="try-it-code">giveReminder</code>. The function should trigger an alert that gives a friendly reminder to the user to wash their hands!</p>
  <p>Remember to call the function.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>function giveReminder() {
  alert("Please don't forget to wash your hands!");
}

  giveReminder();</pre>
    </div>
  </div>
</div>

<a href="../">Back to Curriculum Index</a>
