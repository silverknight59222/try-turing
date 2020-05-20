---
layout: lesson
---

# Mood Tracker Project
<a href="../">Back to Curriculum Index</a>

## Goals

Build a small app with the following functionality:

```
As a user,
- when I type in input and click the submit button,
- I will see my most recent input
- in a list with my previous inputs
```

The example we will walk through will be a mood tracker, but you can choose to ask your user for any type of data!

## Set Up

Let's start with a fresh Glitch project. [Remix this project](). It's recommended that you keep your other project open so you can reference it, if needed!

## Get User Input

In the HTML, we can see that there are several elements in the body:
- `h1` - the name of our app
- `p` - a brief description of what the purpose is
- `input` - where the user will type their input
- `button` - user will click to let the program know they are ready to submit
- `section` - this will hold all past inputs

In the JavaScript, we already have variables declared for the `button` and one named `allInputs` that stores an empty array.

<div class="try-it-new">
  <h2>Get User Input</h2>
  <p>Attach an event listener to the button. When it is clicked, call a function. Inside that function, create a variable that stores the input element.</p>
  <p>Then, <code>console.log</code> or <code>alert</code> that variable, to check what you are storing.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>submitButton.addEventListener('click', addToDo);

function addToDo() {
  var userInput = document.getElementById('input');
  alert(userInput);
});</pre>
    </div>
  </div>
</div>


If we `console.log` or `alert` that input right now, we don't have quite what we want yet. Let's add `.value` to the end of that new variable to pull out the value that was typed into that element:

```js
var userInput = document.getElementById('input').value;
```

Now, run the program and click the button. This time, we should see the value that was typed in, in our `console.log` or `alert`.

## Add Input to Array

Now that we have the value of the text the user most recently provided, let's add it to the list of all inputs.

<div class="try-it-new">
  <h2>Add Input to Array</h2>
  <p>Inside of the event listener, use the <code>.push()</code> method to add the new input to the <code>allInputs</code> array.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
    <pre>submitButton.addEventListener('click', addToDo);

function addToDo() {
  var userInput = document.getElementById('input').value;
  allInputs.push(userInput);
});</pre>
    </div>
  </div>
</div>

## Display All Inputs

Now that we have an updated list of `allInputs`, let's show each of those to our user!

<div class="try-it-new">
  <h2>Display All Inputs</h2>
  <p>Iterate over the <code>allInputs</code> array. For each string in the array, insert a new paragraph inside of the <code>section</code>.</p>
  <p>Think carefully: Should this new piece of code live inside or outside of the event listener? Why?</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
    <pre>submitButton.addEventListener('click', addToDo);

function addToDo() {
  var userInput = document.getElementById('input').value;
  allInputs.push(userInput);

  allInputs.forEach(function(input) {
    section.innerHTML += `< p>${input}</p>`;
  });
});</pre>
    </div>
  </div>
</div>


This is working! But we have, what we call in development, our first [bug](https://www.computerworld.com/article/2515435/moth-in-the-machine--debugging-the-origins-of--bug-.html) 🐛. When, as a user, we give one input, it shows up. When we add another, we see the first input twice, then the new input. When we add another, we see the first input three times, the second twice, and the new input.

<div class="try-it-new">
  <h2>Think About It</h2>
  <p>What in our code might be causing this?</p>

  <div class="help-container">
    <button class="help-click">🐛 Debugging</button>
    <div class="help-toggle" style="width: 72.5%;">
      <p>The <code>innerHTML +=</code> takes the existing HTML and adds on. So we were giving the program the instructions to leave the list as-is, and <em>then</em> add everything inside the array onto that.</p>
      <p>We need to give instructions to clear out the HTML in the section <em>before</em> we iterate over the array. We can add this line of code right before the <code>.forEach</code>.</p>
      <pre>section.innerHTML = "";</pre>
      <p>
        <a target="blank" href="https://glitch.com/edit/#!/tc-mood-tracker-complete">Here is a completed Mood Tracker!</a>
      </p>
    </div>
  </div>
</div>

## Level Up Options:

### Clear Input

As a user, we usually expect that once we fill out a form, the inputs are wiped and return to their default state of being empty.

Once we've collected the users input and displayed all the inputs, we can give instructions to clear out the `value` of the input element.

```javascript
document.getElementById('user-input').value = "";
```

### Determine The Day

Wouldn't this mood tracker be more interesting if we could track the day that the user logged each mood?

When JavaScript runs in the browser, it can do some pretty cool stuff for us, including pull the current time and date.

Add this line of code into your project:

```javascript
var date = new Date();
```

And below, play around with some of the methods listed below. For now, it's probably best to `console.log` each to see what they do for you. You can find [all date methods here](https://www.w3schools.com/js/js_date_methods.asp).

```javascript
date.getDay();
date.toDateString();
date.toLocaleString();
```

Once you've explored this, decide how you want to incorporate the date. You probably want to move your date variable declaration inside of the event listener!

<br>
<a href="../">Back to Curriculum Index</a>
