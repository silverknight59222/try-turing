---
layout: lesson
---

Want to go back?
- [Lesson Home Page](../)
- [Overview](../overview)
- [HTML](../html)
- [CSS](../css)

# JavaScript Overview

JavaScript is the part of the code that controls user interaction. It allows the user to actually <em>do</em> something on the site. The user can click buttons or type information in a form and they usually get some form of visual feedback on the screen that they did something. Before we continue with our interactive webpage, let’s review some JavaScript basics.

## Data Types

Variables can store different data types. The most common are strings and numbers. A string is a string of characters enclosed in quotation marks. A number is a whole number with no quotation marks. We can perform operations with number values, but we will only be using strings today!

```js
// Strings: 
'Hello!'

"I can hold emojis: 💥🦄✨, lots of spaces:     , and special characters: $#@%"

// Numbers:
4 + 2
//=> 6

7 * 3
//=> 21

// Arrays:
['Pepper', 'Luna', 'Cap', 'Wren', 'Goose']

// Objects:
{
  name: 'Cap',
  breed: 'terrier mix',
  age: 2,
  favTreats: ['bones', 'carrots', 'popcorn']
}
```

## Variables

Variables allow us to store information in a container with a label. We can then use that label to reference the contents of that container.

In JavaScript, we declare variables using the `var` keyword. This tells JavaScript that we're about to make a new variable, or _declare a variable_. Here are a few examples of JavaScript variables:

```js
var age = 21;
var school = 'Turing School of Software & Design';
var firstName = 'Sal';
```

## Arrays

Arrays are a list of items that belong together. For example, we could have an array of friends, one string for each friend's name. Or we could have an array of numbers, one number for each friend's age.

Arrays are helpful, because we can perform the same action on every item of the array with a method called forEach.

Let's look at the `Part 1` example in your CodePen. What happens if we do `console.log(answers[1])`?

**Key Point**: Arrays start counting at 0. So, if you want to access the first element, you'll do `array[0]`, the second element is at `array[1]`, and so on.

## Connecting to HTML

If we want our JavaScript code to affect the elements on the page, we need to be able to access the HTML elements. 

Let's look at `Part 2` of the CodePen and console log the `response` and `ball` variables. What do we think those variables are storing?

**Key Point**: We can "grab" HTML elements from our JavaScript by using `document.querySelector()`.

## Listening for User Events

As we mentioned before, an important part of frontend development is responding to user events. 

Let's look at `Part 3` of the CodePen and get that event listener up and running.

**Key Point**: Event Listeners help us listen for different user events and fire different functions in response.

## Functions

Functions allow us to **do** something! They control the actions of our code. A function might update a username, display information to a user, calculate a total, or countless other things. 

Let's look at `Part 4` of the CodePen. Notice what happens when you click on the ball. 

Update that function so that a different phrase appears when you click on the magic eight ball.

Now, let's make it dynamic by using the function `getRandomNumber` that is already written for us.

**Key Point**: Functions are at the heart of any codebase. They define what actions occur and when. Functions are incredibly dynamic and versatile! We only scratched the surface today.

## Solution

If you want to compare your codepen to ours, check out our completed app <a target="blank" href="https://codepen.io/turing-trycoding/pen/YzRLEdG">here</a>!

## JavaScript Summary

Woof! That was A LOT of content! There is SO much to learn when it comes to JavaScript - trust us, we teach it for 7 whole months and still don't cover every single thing! 

Think about everything we covered today, in just a few short hours. Be proud of yourself for trying something new! 

And...we have a working magic eight ball! Nice work! 

## Up Next

- [Wrap Up](../wrap-up)
