---
layout: lesson
---

# Cross a To Do Off Your List ✔️
<a href="../extensions">Back to All Extensions</a>

## Goals

- Use methods to identify which To Do the user wants to cross off
- Use a new array method to remove a To Do string from an array
- Start developing the skill and art of _pseudo-coding_

## Add a Delete Button

To give the user the opportunity to indicate they want to mark a to-do complete, we have to give them a button!

<div class="try-it-new">
  <h2>Add Cross Off Button</h2>
  <p>Inside of the event listener, where you instruct the program to add a paragraph to the <code>innerHTML</code>, instead, instruct the program to add a div element that contains a paragraph and a button.</p>
  <p>Now, write an event listener for the <code>allToDos</code> section that calls a function named <code>crossOffToDo</code>. Inside that function, print out <code>event.target</code>. We will discuss what that does!</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">
      <pre>allToDos.innerHTML += '
  < div>
    < p>${toDo}</p>
    < button> ❌ </button>
  </div>
';</pre>

<pre>allToDos.addEventListener('click', crossOffToDo);

function crossOffToDo() {
  console.log(event.target)
}</pre>
    </div>
  </div>

</div>

At this point, if the user clicks an ❌ button associated with any to-do, nothing happens. Yet.

## Identify Which To Do To Cross Off

If a user logs several to-dos, then wants to cross off a select few, we have to make sure our program can handle that with accuracy. We want to make sure that our program only removes the to-do that is associated with the button the user clicked. To do this, we will draw on knowledge about parent and children elements in HTML. In the code snippet below, the `<div>` element is the parent to both `<p>` and `<button>` elements.

```html
<div>
  <p>${toDo}</p>
  <button> ❌ </button>
</div>
```

In addition to being able to store HTML elements in JavaScript variables, we can also traverse around the HTML document. Check out the code snippet below to learn about some new methods:

```html
<body>
  <h1>My To Do List</h1>
  <input id="input" type="text" />
  <button id="add-btn">Add To Do</button>
  <section id="all-todos">
    <!--   TO DOS will be added here, later   -->
  </section>
</body>
```

```javascript
var allToDos = document.getElementById('all-todos');

console.log(allToDos.parentElement);
console.log(allToDos.parentElement.children);
console.log(allToDos.parentElement.firstElementChild);
console.log(allToDos.parentElement.firstElementChild.innerText);
```

If you'd like, read about [parentElement](https://www.w3schools.com/jsref/prop_node_parentelement.asp) and [firstElementChild](https://www.w3schools.com/jsref/prop_element_firstelementchild.asp)!

<div class="try-it-new">
  <h2>Identify Which To Do To Cross Off</h2>
  <p>Inside of the <code>crossOffToDo</code>, use a combination of the new methods listed above to find the text of the to-do that is associated with the button clicked on. Store that text in a variable called <code>toRemove</code>.</p>

  <div class="help-container">
    <button class="help-click">🤚 Help Me!</button>
    <div class="help-toggle">

    <pre>function crossOffToDo() {
      var toRemove = event.target.parentElement.firstElementChild.innerText;
      console.log(toRemove);
    }</pre>
    </div>
  </div>
</div>

## Find the To Do, Cross If Off

Now that we have identified which to-do we want to cross off, and have it in the form of a string, we need to look through the array of all to-dos and see which one it matches.

```javascript
toDoList.forEach(function(toDo) {
  if (toDo === toRemove) {
    console.log(toDo, "was clicked on an need to be removed!");
  }
});
```

Instead of `console.log`ging that statement, we actually need to dig that specific string out of the array. We will use a method called `splice`. To delete an element from an array, we must provide `splice` with two pieces of information: 1 - the position in the array, 2 - how many elements to delete. Let's break down the code below:

```javascript
toDoList.forEach(function(toDo, currentPosition) {
  if (toDo === toRemove) {
    toDoList.splice(currentPosition, 1)
  }
});
```

Lastly, if you've included this code in your project, you may have noticed that the app does not update until a new to-do has been added. Let's instruct the program to re-display all current to-dos by adding two piece into the `crossOffToDo` function:

```javascript
function crossOffToDo() {
  var toRemove = event.target.parentElement.firstElementChild.innerText;

  toDoList.forEach(function(toDo, currentPosition) {
    if (toDo === toRemove) {
      toDoList.splice(currentPosition, 1);
    }
  });

  allToDos.innerHTML = "";

  toDoList.forEach(function(toDo) {
    allToDos.innerHTML += `
      <div>
        <p>${toDo}</p>
        <button> ❌ </button>
      </div>
    `;
  });
}
```

[Here is a project with this sections challenge completed!](https://glitch.com/edit/#!/tc-delete-complete)

<br>
<a href="../extensions">Back to All Extensions</a>
