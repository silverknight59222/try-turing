---
layout: lesson
---

# Building a Dynamic To-Do List

## Goals

- Add functionality so that the user can add their own to-dos to the list

[This starter kit](https://glitch.com/edit/#!/tc-arrays-solution) is available if needed. It has the completed work from every section before this. For now, it's recommended that you comment out the code from the arrays section.

## Get User Input

In the HTML, we can see that there is an `input` element that we haven't worked with yet. Let's modify our existing code to grab the data the user types in.

<div class="try-it-new">
  <h2>Get User Input</h2>
  <p>Inside the function that is called when the button is clicked, create a variable that stores the input element.</p>
  <p>Then, <code>console.log</code> that variable to check what you are storing.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>button.addEventListener('click', addToDo);

function addToDo() {
  var userInput = document.getElementById('input');
  console.log(userInput);
});</pre>
    </div>
  </div>
</div>

If we `console.log` that input right now, we don't have quite what we want yet. Let's add `.value` to the end of that new variable to pull out the _value_ that was typed into that element:

```js
var userInput = document.getElementById('input').value;
```

Now, view your app in the browser and click the button. This time, we should see the value that was typed into the input in our `console.log`.

<br>
## Store All To Dos

Somewhere in our program, we need to keep track of all the inputs the user has ever typed in, so that we can display them all. That sentence brings up two technical topics we have learned about:
- variables
- arrays, or lists

<div class="try-it-new">
  <h2>Create an Array for All Inputs</h2>
  <p>At the top of your JavaScript file, declare a variable that stores an empty array.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>var toDoList = [];</pre>
    </div>
  </div>

</div>

Now, we have an empty list of to-dos in our program.

<div class="try-it-new">
  <h2>Add To Dos</h2>
  <p>Inside of the event listener, add a new line of code below the <code>userInput</code> variable. Add the <code>userInput</code> to the array.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>function addToDo() {
  var userInput = document.getElementById('input');
  toDoList.push(userInput);
  console.log(toDoList);
});</pre>
    </div>
  </div>

</div>

## Display All To Dos

If you `console.log` the `toDoList` variable at the end of the function, we can see that to-dos are being added to the list. Why aren't they displaying on the page for the user? We haven't told our program to do that!

<div class="try-it-new">
  <h2>Display Each To Do</h2>
  <p>Inside of the event listener, below your existing code, add a <code>forEach</code>. Inside of it, add <code>innerHTML</code> to the <code>allToDos</code> section.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <p><a href="https://glitch.com/edit/#!/tc-dynamic-complete?path=script.js%3A11%3A26">Here is a completed To Do List!</a></p>
      <pre>function addToDo() {
  var userInput = document.getElementById('input');
  toDoList.push(userInput);

  allToDos.innerHTML = "";

  toDoList.forEach(function(toDo) {
    allToDos.innerHTML += '< p>${toDo}</p>';
  });
});</pre>
    </div>
  </div>

</div>
