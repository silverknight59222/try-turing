---
title: Rock Paper Scissors Project, Part 2
layout: post
date: 2000-01-11
permalink: rock-paper-scissors-project-part-2
program: front-end
tags: front-end
lessontype: fe-new
---

## Our Functionality!

On the screen, we have a title, some text that will display the player's and opponent's scores, a box where our game results will be displayed, and some buttons so the player can pick their shot.

![What our game looks like](/images/RPS.png)

Using JavaScript, we want to tell the computer that when the user clicks each button, we want to compare that to a randomly generated opponent guess, and we want to display the results of the match. Let's go!

## Adding Event Listeners

<div class="try-it">
  <h2>Try it: Adding Event Listeners</h2>

  <p>Before we get super fancy and complicated, let's start with a basic alert. Can we get some type of confirmation that the user clicked a button?</p>

  <p>Looking back at what we did with in Event Section, go ahead and add an event listener to the Paper button that, when the button is clicked, triggers an alert that reads "Paper button clicked!".</p>

  <p>Once you get the alert working, refactor the event listener to run the provided <code>setPlayerShot()</code> function, being sure to pass in an all-caps string that matches the button being clicked. If you need guidance, the event listener for the Rock button is already in the code for you!</p>
</div>

## Displaying the Results of the Match

Take a look at the functions named `win`, `lose`, and `draw`. What do you think is happening?

Starting with `draw`, this might be a little familiar from earlier in the day. We're updating some of our page text with a new message.

Remember: we can replace the text of any html node by using `someElement.innerText = 'New Content'`. As a reminder, here's how we did that earlier when we replaced a heading with user input:

```js
var changeButton = document.querySelector('#change-me');

changeButton.addEventListener('click', function() {
  var firstHeader = document.querySelector('h1');
  var input = document.querySelector('input');
  firstHeader.innerText = input.value;
});
```

The `win` and `lose` functions also increment either the player or the opponent's score up. The `++` is shorthand in JavaScript that tells the code to add 1 to the existing number.

## Control Flow

No matter what button the user clicks, our game doesn't tell us what happened or keep track of our score!

We need to write a function that handles the different possible outcomes. When you play Rock Paper Scissors, what are the rules? Take a few minutes to write down all the possible plays with your partner.

If only there was some way for our code to detect the outcome of our match and to fire one of our `win`, `lose`, or `draw` functions for us ....

Oh wait! Remember this?

```
if(){

} else {

}
```

We can use an if/else statement in Javascript like in this example:

```js
var count = 2

if(count < 2){
  // do the code that's in between these curly brackets if the count is less than 2
} else {
  // do the code that's in between these curly brackets if the count is NOT less than 2
}
```

The statement `1 < 2` returns a boolean (aka `true` or `false`).

<div class="try-it">
  <h2>Try it: Control Flow!</h2>

  <p>Using control flow, have the game compare the opponentShot and the playerShot to determine if the player won, lost, or if there was a draw. You will call one of those functions inside the curly braces.</p>

  <p>Can you add an `else if` statement to your process that checks different possibilities?</p>
</div>

[Take a Peek at this CodePen if you Get Lost](https://codepen.io/letak/pen/OZdLZb)

### Conclusion

The experience that a user has on a website is often referred to as UX (User Experience), and the interface that they use (everything you can see on the screen) is often called a UI.

It takes a surprising amount of thought and code to make a very simple UI or User Interface that is pleasant and easy to use.

What other features or UI elements could you add that would make the game easier to understand or more exciting to play?

Does your game behave the way you expect a Rock Paper Scissors game to behave? What's missing? What is there that shouldn't be there?

How easy is it to figure out how to use the game? How could you make it easier?

Want a challenge? Head over to <a href="/vending-machine-project-part-3" title="">Rock Paper Scissors: Extensions</a> for more!
