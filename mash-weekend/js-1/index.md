---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript - Overview
JavaScript is the part of the code that allows our user to interact with the page. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and the user usually gets some form of visual feedback on the screen that they did something. Before we continue with our FAQ page, let’s review some JavaScript basics.

## Data Types
Variables can store different data types. The most common are strings and numbers. A string is a string of characters enclosed in quotation marks. A number is a whole number with no quotation marks. We can perform operations with number values.

```js
'I am a string!'

"I can hold emojis: 💥🦄✨, lots of spaces:     , and special characters: $#@%"

4 + 2
//=> 6

7 * 3
//=> 21
```

## Variables
Variables allow us to store information in a container with a label. We can then use that label to reference the contents of that container. In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we're about to make a new variable, or _declare a variable_. Here are a few examples of JavaScript variables:

```js
var age = 35;
var school = 'Turing School of Software & Design';
var firstName = 'Kaitlyn';
```

You can also reassign the values in a variable by using only the variable name, followed by the assignment operator, and a new value.

```js
age = 100;
school = 'Harvard University';
firstName = 'KVG';
```

Variables are helpful, because you can use them throughout your application to refer to a specific piece of information. You can even insert variables into another string using `string interpolation`. To do this, you will need to use a single backtick around the sentence instead of quotation marks. The backtick character is located next to the 1 on your keyboard. You will also use a dollar sign followed by the variable name inside of curly braces to insert the value stored in that variable into the string.

```js
var greeting = `Hello, my name is ${firstName}.`;
//=> “Hello, my name is KVG.”
```

## Built-In Methods
There are several tools that are pre-built into the JavaScript language. We call these tools methods. When we use these methods, we can do some pretty cool things by writing only a few lines of code. The first method we will look at is `console.log()`. As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in replit.

```js
console.log(firstName);
//=> “KVG”
console.log(age);
//=> 100
console.log(`Hi, I’m ${firstName} and I am ${age} years old!`);
//=> “Hi, I’m KVG and I am 100 years old!”
```

Another method we will use with number data types is `Math.random()`. This method returns a random decimal value between 0 and 1 (inclusive of 0, but not 1). We can combine this method with other math operations and math methods to get a random number between two values. This will be super helpful when we build our MASH name and we want a random number!

```js
console.log(Math.random());
//=> 0.1261206435198774 or any other random decimal value between 0 and 1
console.log(Math.floor(Math.random() * 5));
//=> 3 or another whole number between 0 and 5 (inclusive of 0, but not 5)
```

<div class="try-it-new">
  <h2>Try It: Variables</h2>
  <p>That was a LOT of info! Fork <a href="https://replit.com/@turingschool/javascript-overview#script.js" target="blank">this replit</a> and follow the directions to play around with variables, data types, and built-in methods. We will only be working in the JavaScript file.</p>
  <ul>
    <li>Declare 3 variables describing your car. Use the variables make, model, and year. Assign each to an appropriate value.</li>
    <li>Make sure to <code>console.log()</code> each variable to verify you've stored it correctly!</li>
    <li>Use <code>console.log()</code> and interpolation to print a sentence describing your car.</li>
    <li>Reassign the values of your variables to describe your dream car.</li>
    <li>Create one more variable called <code>randomNumber</code> that stores a random whole number between 0 and 10 (inclusive of 0, but not 10).</li>
    <li><strong>Finished?</strong> How would you change the value of randomNumber to be a random whole number between 5 and 10?</li>
  </ul>
</div>

## Arrays
Another data type is an array, which is just a collection of items that belong together. For example, we could have an array of strings, one for each student in a class. You could also have an array of numbers! Just like with other data types, we store our arrays in a variable. The variable name should be plural.

```js
var students = [“Chelsea”, “Courtney”, “Alesha”, “Tracey”, “Lindsey”, “Erin”, “Anna”];
```

Each item in the array is referred to as an `element`. If we want to access only one element from the array, we can use `bracket notation` followed by a number that corresponds with that element. That number is called the `index` and as weird as it may seem, <a href="https://skillcrush.com/blog/why-programmers-start-counting-at-zero/" target="blank">counting starts with 0 in most programming languages</a>.

```js
console.log(students[0]);
//=> “Chelsea”
console.log(students[6]);
//=> “Anna”
```

You can also add items to your array using the `push()` method.

```js
students.push(“Amy”);
console.log(students);
//=> [“Chelsea”, “Courtney”, “Alesha”, “Tracey”, “Lindsey”, “Erin”, “Anna”, “Amy”];
```

There are also many other array methods that we can use in JavaScript. If you want to remove an element in a specific location from an array, you can use the `splice()` method. However, you can pass in multiple values – the index location to start at and how many elements to delete. If you want to find the length of an array, you can use the `length` method.

```js
students.splice(0, 1);
console.log(students);
//=> [ “Courtney”, “Alesha”, “Tracey”, “Lindsey”, “Erin”, “Anna”];

students.splice(2, 1);
console.log(students);
//=> [ “Courtney”, “Alesha”, “Lindsey”, “Erin”, “Anna”];

students.splice(3);
console.log(students);
//=> [ “Courtney”, “Alesha”, “Lindsey”];

console.log(students.length);
//=> 3
```

<div class="try-it-new">
  <h2>Try It: Arrays</h2>
  <p>That was a LOT of info! Fork <a href="https://replit.com/@turingschool/javascript-arrays#script.js" target="blank">this replit</a> and follow the directions below to practice using array methods.</p>
  <ul>
    <li>Declare a variable called friends storing an array of strings, each containing a name of a friend. Make sure your array has at least 3 values.</li>
    <li>Use <code>console.log()</code> and bracket notation to print a specific element from the array using its index.</li>
    <li>Add another friend to your friends array.</li>
    <li>Remove the friend in the second position in the array (remember, the second position has an index value of 1).</li>
    <li><strong>Finished?</strong> How could you print the last element of the array, no matter how long the array is? How could you select a random element from the array?</li>
  </ul>
</div>

## Update Your MASH App
Now that we've covered the basics of JavaScript, let's apply this new knowledge to update our MASH app.

<div class="try-it-new">
  <h2>Arrays in Your MASH App</h2>
  <p>Back in your MASH starter kit, follow these steps to begin using arrays in your project.</p>
  <ul>
    <li>Navigate to your JavaScript file.</li>
    <li>Create three more arrays – one for each of your three categories in your HTML file.</li>
    <li>Include at least three values in each of your arrays.</li>
    <li>Finally, create a new variable called future and use string interpolation to create a future you would like using a single value from each array.</li>
    <li>Use <code>console.log(future)</code> to see your future statement in the console.</li>
  </ul>
  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-1#script.js">like this</a>.</p>
</div>

## JavaScript - Overview Summary

- Variables allow us to store information in a container with a label.
- Arrays are a collection of items that belong together.
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

<a href="../js-2">Next Section: JavaScript - Behavior</a>
