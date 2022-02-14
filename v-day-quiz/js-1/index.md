---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# JavaScript Basics

JavaScript is the part of the code that controls user interaction. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and they usually get some form of visual feedback on the screen that they did something. Before we dive into making interactive components, let’s discuss some JavaScript basics.

## Data Types

There are different types of data or information that we need to keep track of when we are building our application. The most common are strings and numbers. A string is a string of characters enclosed in quotation marks. A number is a whole number with no quotation marks. We can even perform operations with number values.

```js
'I am a string!'

"I can hold emojis: 💥🦄✨, lots of spaces:     , and special characters: $#@%"

4 + 2
//=> 6

7 * 3
//=> 21
```

## Variables

Variables allow us to store information in a container with a label. We can then use that label to reference the contents of that container. 

In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we're about to make a new variable, or _declare a variable_. Here are a few examples of JavaScript variables:

```js
var age = 104;
var school = 'Turing School of Software & Design';
var firstName = 'Kaitlyn';
```

## console.log()

As we learn about JavaScript today, we will use the `console.log()` method to print the data we are working with out to the console in replit. Here's the syntax:

```js
console.log(firstName);
//=> 'Kaitlyn'
console.log(age);
//=> 104
```

<div class="try-it-new">
  <h2>Variables</h2>
  <p>Fork <a href="https://replit.com/@turingschool/quiz-playground#script.js" target="blank">this replit</a> and follow the directions to play around with variables and data types. We will only be working through exercises 1 and 2 on the JavaScript file. Use the previous examples to help you get started.</p>
  <ul>
    <li>Declare 3 variables, using the labels name, adjective, and yearsAsFriends. Assign each to an appropriate value.</li>
    <li>Make sure to <code>console.log()</code> each variable to verify you've stored it correctly!</li>
  </ul>
</div>

## Objects

All of those variables we declared earlier are referring to one single friend or one single object. In JavaScript (and many other programming languages), we have a way to store all of those related attributes in one variable called an object. The syntax for a JavaScript object looks like this: 

```js
var friend = {
  name : "Ashley",
  adjective : "funny",
  yearsAsFriends : 8
}
```

Each line in the object is called a `property` that consists of a key-value pair. The `key` is on the left and the `value` assigned to that key is on the right. To reference one value in the object, we use `dot notation`, by referencing the name of the object followed by a `.` and the key for the value we want to access. Here's an example:

```js
console.log(friend.name);
//=> 'Ashley'
console.log(friend.yearsAsFriends);
//=> 8
```

<div class="try-it-new">
  <h2>Objects</h2>
  <p>Back in your same playground replit, complete exercises 3 and 4 in the JavaScript file.  </p>
  <ul>
    <li>Create an object that stores all of the properties that describe your friend in one variable.</li>
    <li>Use <code>console.log()</code> and dot notation to print each value to the console.</li>
  </ul>
</div>

## Arrays

Another data type is an array, which is just a collection of items that belong together. For example, we could have an array of strings, one for the name of each student in a class. 

```js
var students = ['Zanna', 'Ranita', 'Samuel', 'Zachary', 'Anhnhi', 'Marianne'];
```

If we just want to access one element from an array, we can use `bracket notation` and a number that corresponds with that element. As weird as it may seem, [counting starts with 0 in most programming languages.](https://skillcrush.com/blog/why-programmers-start-counting-at-zero/)

```js
console.log(students[0]);
//=> 'Zanna'

console.log(students[5]);
//=> 'Marianne'
```

<div class="try-it-new">
  <h2>Arrays</h2>
  <p>In the same playground replit, complete exercises 5 and 6 in the JavaScript file.</p>
  <ul>
    <li>Create an array called friendsArray of three friends' names.</li>
    <li>Use bracket notation to print the first and third friends' names to the console.</li>
  </ul>
</div>

## Putting It All Together

We can combine these data structures to store our data in more complex ways. For example, we could have an `array` of `objects`. That would look something like this:

```js
var students = [
  {
    name : "Zanna",
    location : "Texas"
  },
  {
    name : "Zachary",
    location : "Colorado"
  }
]
```

If we want to access one element from an array and then one property from that object, we can use `bracket notation` and `dot notation` to get that specfic value.

```js
console.log(students[0].location);
//=> 'Texas'

console.log(students[1].name);
//=> 'Zachary'
```

<div class="try-it-new">
  <h2>Arrays of Objects</h2>
  <p>In the same playground replit, complete exercises 7, 8 and 9 in the JavaScript file.</p>
  <ul>
    <li>Create a friends array of three objects, each object representing a friend with the same three properties (name, adjective, and yearsAsFriends).</li>
    <li>Use bracket notation and dot notation to print the second friend's adjective to the console.</li>
    <li>Use bracket notation and dot notation to print the third friend's name to the console.</li>
  </ul>
</div>

## String Interpolation

We can use string interpolation to combine static data with dynamic (or variable) data. Here’s an example of the syntax:

```javascript
console.log(`Hello, ${students[1].name}!`);
//=> 'Hello, Zachary!'
```

Note that back ticks are the characters that surround this combination of the string and ${} syntax. You can find the back-tick key at the top-left of your keyboard, next to the 1.

Anything inside the back ticks will be read as a string. But, when the interpreter sees the ${, it will stop and wait for JavaScript code to read. Typically, we provide a variable name here. When the interpreter read the matching closing bracket - } - it goes back to treating characters as part of the string.

<div class="try-it-new">
  <h2>String Interpolation</h2>
  <p>In the same playground replit, complete exercise 10 in the JavaScript file.</p>
  <ul>
    <li>Use string interpolation to print a complete sentence describing your first friend in the array.</li>
    <li><strong>Finished?</strong> Try it for another friend!</li>
  </ul>
</div>

## Modify the JS in Your Project

<div class="try-it-new">
  <h2>JavaScript Basics in Your Project</h2>
  <p>Now that we are familiar with these tools in JavaScript, let's use this new knowledge in our final project! Go back to your quiz app and use the file navigation pane to find the `script.js` file.</p>
  <ul>
    <li>Under step 1 at the top of this file, you will see some variables defined for you.</li>
    <li>In your questions variable, we have an array of question objects.</li>
    <li>Replace each empty string with the values you want for your questions.</li>
    <li><a href="https://www.brides.com/newlywed-game-questions-5071334" target="blank">Here's a list of common questions for the Newlywed Game</a> or you can make up your own questions!</li>
  </ul>
  <p>At this point, your project should look something <a href="https://replit.com/@turingschool/quiz-app-checkpoint-2#script.js" target="blank">like this</a>.</p>
</div>

## JavaScript Summary

- Variables allow us to store information in a container with a label.
- Arrays are a collection of items that belong together.
- Objects store multiple properties related to one single object.
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

<a href="../js-2">Next Section: Connect HTML & JavaScript</a>
