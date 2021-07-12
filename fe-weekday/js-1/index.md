---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript Fundamentals

Before we start writing JavaScript code to make this Number Guesser game work, we're going to touch on some fundamentals that will prepare us for that work.

During this section, the code we write and learn about will not yet be connected to our game. It's just for learnings sake!

## Comments in Code

Throughout this resource and accompanying CodePens we will use today, you will see what we call `comments` in code. It is text in a code file that is usually "greyed out" - it's readable by humans but not by the computer or browser. In JavaScript, each comment must have a `//` at the beginning of it:

```js
//this is considered a comment
this is not!
```

## Variables

We can use variables to store and reference information within a JavaScript program. We can think about it as a storage bin in the garage - the contents inside of the bin are what we care about storing, and the label on the outside is how we can quickly identify it.

The syntax for declaring variables and assigning a value to them is as follows:

```js
var age = 23;
// alert(age);

var sum = 3 + 4;
// alert(sum);
```
>JavaScript can store other type of data, but since we are building a Number Guesser game today, we will focus on Numbers!

## Variables and Calculations

Using the two new pieces of knowledge we've acquired, we can combine them to do work like this:

```js
var washCycleMinutes = 38;
var dryCycleMinutes = 45;

var totalLaundryTime = washCycleMinutes + dryCycleMinutes;

alert(totalLaundryTime); // alert message will be: 83
```

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Visualize The Connections</h3>
    <div><button class="expander-btn"><img src="../../assets/icons/arrow.svg" alt="expander arrow icon" /></button></div>
  </header>
  <div class="hide">
    <img src="../assets/variable-sub.png" alt="Diagram of variables being referenced, and the numbers they store marked by each."/>
  </div>
</div>

<div class="try-it-new">
  <h2>Try It</h2>
  <p>In a new CodePen, declare two variables (name of your choice) and store a value in each one! Declare a third variable that uses both previous variables and a math operation.</p>
  <p>Then use the alert method to ensure all values are being stored as expected.</p>
</div>

### Comparisons

JavaScript can also do comparisons! Today, we will focus on comparing numbers.

<div class="try-it-new">
  <h2>Explore to Learn</h2>
  <p>One at a time, copy and paste or type in each line of code below into your CodePen - make sure this is in the JS pane. Predict what the output will be, then observe the alert message.</p>
  <ul>
    <li><code class="try-it-code">alert(3 < 5)</code></li>
    <li><code class="try-it-code">alert(3 > 5)</code></li>
    <li><code class="try-it-code">alert(3 >= 3)</code></li>
    <li><code class="try-it-code">alert(3 === 5)</code></li>
    <li><code class="try-it-code">alert(5 === 5)</code></li>
    <li><code class="try-it-code">alert(5 !== 5)</code></li>
  </ul>
</div>

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Exploration Takeaways</h3>
    <div><button class="expander-btn"><img src="../../assets/icons/arrow.svg" alt="expander arrow icon" /></button></div>
  </header>
  <div class="hide">
    <ul>
      <li>JavaScript can compare two numbers to determine if one is less than, greater than, equal to, or <em>not</em> equal to the other</li>
      <li>JavaScript evaluates a comparison, then provides us with a <code>Boolean</code> - either true or false - as a response</li>
    </ul>
  </div>
</div>

### Conditionals:

An **if statement** sets up different paths that the program can take depending on what is true at a given moment.

<div class="try-it-new">
  <h2>Explore: Reading if Statements</h2>
  <ol>
    <li>Look at the code in the CodePen below. Jot down your prediction of what will happen when we run this code (once line 5 is uncommented).</li>
    <iframe height="265" style="width: 100%;" scrolling="no" title="If Statement Explore/Try It" src="https://codepen.io/turing-trycoding/embed/ZEBezeX?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/turing-trycoding/pen/ZEBezeX'>If Statement Explore/Try It</a> by Try Coding
  (<a href='https://codepen.io/turing-trycoding'>@turing-trycoding</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <li>Once you've made your prediction, uncomment line 5 and read the alert. Change the value of the <code class="try-it-code">age</code> variable to test out other situations!</li>
  </ol>
</div>

<div class="try-it-new">
  <h2>Try It: Writing if Statements</h2>
  <p>Write an if statement that alerts the user if they have drank enough water for the day. Use this variable as a starting point:</p>
  <p><code>var waterDrankSoFar = 4;</code></p>
  <p>Challenge: If someone drinks more than double the recomended water intake in a day, it's also not good. Alert with a <em>different</em> message if that is the case.</p>
</div>

## JavaScript Fundamentals Summary

- JavaScript can store numbers in variables, then do math operations with those variables
- JavaScript can follow certain directions based on conditions we provide

<a href="../js-2">Next Section: Connecting HTML & JavaScript</a>
