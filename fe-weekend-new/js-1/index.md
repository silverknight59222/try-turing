---
layout: lesson
---

### Go Back

- [Welcome & Setup](../)
- [What is Front End Engineering?](../what-is-fee)
- [HTML Introduction](../html-intro)
- [Introduction to CSS](../intro-to-css)

# JavaScript Fundamentals

Before we start writing JavaScript code to make this "Guess the Number" game work, we're going to touch on some fundamentals that will prepare us for that work. During this section, the code we write and learn about will not yet be connected to our game. It's just for learning!

## Comments in Code

Throughout this resource and accompanying Replits we will use today, you will see what we call `comments` in code. It is text in a code file that is usually gray — it's readable by humans but not by the computer or browser. In JavaScript, each comment must have a `//` at the beginning of it:

```js
//this is considered a comment
this is not!
```

## Variables

Just like in Ruby, we can use variables to store and reference information within a JavaScript program. We can think about it as a storage bin in the garage - the contents inside of the bin are what we care about storing, and the label on the outside is how we can quickly identify it.

When working with JavaScript, we use <code>camelCase</code> for any variable names, meaning all characters are lowercase in the first word, but subsequent words have an uppercase first letter and there are no spaces separating the words. The syntax for declaring variables and assigning a value to them is as follows:

```js
var firstName = "Kaitlyn";
// console.log(firstName);

var age = 23;
// console.log(age);

var sum = 3 + 4;
// console.log(sum);
```
>JavaScript can store other types of data, but since we are building a "Guess the Number" game today, we will focus on numbers and strings!

<div class="try-it-new">
  <h3>Try It: Variables in JavaScript</h3>
  <p>Fork this <a target="blank" href="https://replit.com/@turingschool/js-sandbox#script.js">sandbox replit</a> and declare three variables that describe yourself. Use <code>console.log()</code> followed by each variable name to confirm that you’ve done this correctly!</p>
</div>


## Comparisons

JavaScript can also do comparisons! Today, we will focus on comparing numbers. These comparison expressions was always evaluate to a <code>boolean</code> value, <code>true</code> or <code>false</code>.

<div class="module-card fe-project-card">
  <h3>JavaScript Comparisons</h3>
  <p>For each line below, predict what the output will be. Then, run it in the script.js file to confirm whether or not your prediction was correct!</p>
  <ul>
    <li><code>console.log(3 < 5)</code></li>
    <li><code>console.log(3 > 5)</code></li>
    <li><code>console.log(3 >= 3)</code></li>
    <li><code>console.log(3 === 5)</code></li>
    <li><code>console.log(5 === 5)</code></li>
    <li><code>console.log(5 !== 5)</code></li>
  </ul>

</div>
<br>

## Conditionals

An **if statement** sets up different paths that the program can take depending on what is true at a given moment. Notice both the similarities and the differences between writing if statements in Ruby and JavaScript.

```javascript
var age = 19;

if (age >= 18) {
  console.log("Don't forget to vote!");
} else {
  console.log("You aren't old enough to vote yet, but you might be able to pre-register.");
}
```

<div class="try-it-new">
  <h2>Try It: Writing if Statements</h2>
  <p>Do the following exercise in your sandbox replit. Write an <code>if statement</code> that responds differently to the user based on how much water they have drank so far that day.</p>

  <ol>
    <li>Start with a variable called <code>waterInOunces</code> assigned to a value of 16.</li>
    <li>If the user has already met their goal of 64 ounces, log the message, "Great work! You met your water goal for the day!"</li>
    <li>Otherwise, log the message, "Keep going to reach your water goal!"</li>
  </ol>
  <p><strong>Challenge:</strong> If someone drinks more than double the recommended water intake in a day, it's also not good. Log a <em>different</em> message if that is the case.</p>
</div>

## JavaScript Fundamentals Summary

- JavaScript can store data in variables and use those variables to make comparisons.
- JavaScript can follow different paths based on conditions we provide.

### Up Next

- [Connecting HTML & JavaScript](../js-2)
- [Building Dynamic User Experiences](../js-3)
- [Extensions](../extensions)
- [Wrap-Up](../wrap-up)
