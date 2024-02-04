---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [What is Front End and Back End Engineering?](../what-is-fe-be)

# JavaScript Introduction

JavaScript is a language that allows us to _interact_ with a webpage. We can write JavaScript that can access HTML elements and change their appearance or content based on the way a user interacts with the page.

## Forking Your First Replit

Replit is a web-based interactive development environment or IDE. It allows us to write code and see the output in the console at the same time. To get started today, we will be working in <a href="https://replit.com/@turingschool/js-sandbox?v=1#index.html" target="blank">this JavaScript sandbox replit</a>. When you open this replit, click the blue "Fork Repl" button to make your own copy on your account. From here, you can add code or delete code as much as you like. It's yours!

A sandbox is a place where we can play around with code! Use this space to take notes or try things throughout the workshop today.

<div class='module-card fe-project-card'>
  <p class='standout'>Important Note:</p>
  <p>In order to run the code, click on "Dev Tools" to see the console where the code will print out, then click the green "Run" button.</p>
</div>

## console.log()

In your sandbox replit, complete the activity that follows.

<div class="try-it-new">
  <h3>Try It: Exploring console.log()</h3>
  <p>Read the following JavaScript code, copy & paste it into the <code>script.js</code> file in your sandbox, then run it!</p>
  <pre>console.log("Hello, World!");<br>console.log("Let's start coding.");</pre>
  <p>What does the output tell you about the job of the <code>console.log()</code> command?</p>
</div>

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Takeaways</h3>
    <div>
      <button class="expander-btn">
          <img
            src="../../assets/icons/arrow.svg"
            alt="expander arrow icon" />
      </button>
    </div>
  </header>
  <div class="hide">
    <ul>
      <li><code>console.log()</code> is a <code>command</code> that is built into the JavaScript language</li>
      <li><code>console.log()</code> will print the value it is instructed to print and creates a line break after printing the data</li>
    </ul>
  </div>
</div>
<br>

## Variables

In order to store a piece of data and reference it later, possibly many times throughout our code, we need to use variables. You can think of a variable like a storage container with a label on it where we can hold items we care about. In JavaScript we define variables by typing the keyword <code>var</code> followed by the name of the variable we wish to create, the assignment operator (<code>=</code>), and then the value we want to store in that variable. We end each statement in our code with a semi-colon.

When working with JavaScript, we use <code>camelCase</code> for variable names, which means that words are joined without spaces, and each new word begins with a capital letter.

```js
var email = "helloworld@gmail.com";
var firstName = "Brandi";
var location = "Tampa, FL 🌴";
```

<div class="try-it-new">
  <h3>Try It: Variables in JavaScript</h3>
  <p>Back in your sandbox replit, declare three variables that describe yourself, using the names <code>name</code>, <code>email</code>, and <code>location</code>.</p>
  <p>Make sure to <code>console.log</code> each variable to verify you've stored it correctly!</p>
</div>

## Data Types

In JavaScript, your data (information) can be different types. There are two data types we will be working with today: Number (any numeric value), and String (words or phrases like "JavaScript is fun!"). We use the Number data type if we are storing data that may be manipulated in some way. We use the String data type if our data needs to remain consistent. With String data, anything inside of the quotation marks is preserved.

<div class="module-card fe-project-card">
  <h3>Deciding on a Data Type</h3>
  <p>For each item listed below, determine which data type is most appropriate for the information.
  <ul>
    <li>Username</li>
    <li>Age</li>
    <li>Zip Code</li>
    <li>Balance on a bank account</li>
    <li>Caption for an image</li>
  </ul>
  </p>
</div>

<div class="try-it-new">
  <h3>Try It: Data Types</h3>
  <p>Back in your replit, add two more variables about yourself assigned to Number values. Write a variable called <code>numberOfPets</code> and another variable of your choosing. Use console.log() to verify that the data was stored in the variable as expected!</p>
   <div class="spicy-container">
    <p class="spicy-click">
      <span role="img" aria-label="spicy pepper">🌶</span>Click here for a Spicy Challenge<span role="img" aria-label="spicy pepper">🌶</span>
    </p>
    <div class="spicy-toggle">
      <p>What happens if you add your two number variables together and console.log() the result?</p>
    </div>
  </div>
</div>

## Interpolation

We can use string interpolation to combine static data with dynamic (or variable) data. Here's an example of the syntax:

```js
var firstName = "Amy";
console.log(`Hello, ${firstName}!`);
```

The code above will make "Hello, Amy!" appear in the console.

Note that _back ticks_ are the characters that surround this combination of the string an `${}` syntax. You can find the back-tick key at the top-left of your keyboard, next to the `1`.

Anything inside the back ticks will be read as a string. But, when the interpreter sees the `${`, it will stop and wait for JavaScript code to read. Typically, we provide a variable name here. When the interpreter read the matching closing bracket - `}` - it goes back to treating characters as part of the string.

<div class="try-it-new">
  <h3>Try It: Interpolation</h3>
  <p>Using interpolation and at least two of the variables you declared in the previous section, write a sentence about yourself! Make sure to print that sentence out to the console.</p>
  <p>Change the value of one of the Strings you interpolated and re-run your code. Is the difference reflected in the output?</p>

  <div class="spicy-container">
    <p class="spicy-click">
      <span role="img" aria-label="spicy pepper">🌶</span>Click here for a Spicy Challenge<span role="img" aria-label="spicy pepper">🌶</span>
    </p>
    <div class="spicy-toggle">
      <p>What happens if you interpolate <code>numberOfPets * 4</code>? What does that tell you about how interpolation works?</p>
    </div>
  </div>
</div>

### Up Next

- [Control Flow](../control-flow)
