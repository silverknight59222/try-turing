---
title: Afternoon Projects
layout: post
date: 2000-01-31
permalink: front-end-afternoon-projects
---

This afternoon, you'll have the opportunity to work on building your very own application that works in the browser.

Choose your own adventure or from the following:

- Guess the Number
- Rock Paper Scissors
- Cup Game
- [Sushi Jiggler][]
- Hangman
- [Random Color Background][]

[Sushi Jiggler]: https://jenniferdewalt.com/sushi_jiggler.html
[Random Color Background]: https://jenniferdewalt.com/random_background.html

## A Helpful Collection of Tips and Tricks

### Doing Things Later

If you look closely at [Sushi Jiggler][], you'll notice that that the animation triggers on a click and then going back to normal. This effect is achieved by adding the class, waiting an amount of time, and then removing it.

Assuming we had an element with a `.sushi` class on it and another class on hand called `.wiggle` we could implement this functionality as follows:

- Listen for events on elements with a `.sushi` class.
- When the user clicks on a `.sushi` element, add the `.wiggle` class using `addClass()`
- Use set `setTimeout` and set a timer for 2000 milliseconds in the future that uses `removeClass()` to remove the class.
- Bingo!

### Generating Random Numbers

JavaScript has a fun function called `Math.random()`. It will generate some crazy decimal between 0 and 1. That's cool, but what if we want to get a number between 1 and 3?

Elementary! Multiply it by three!

Hmm… That's still not getting us all the way there. Here are a few numbers that I generated.

- 0.983854177263559
- 1.2686074516508812
- 2.8046332459732235
- 2.249551404129546
- 2.573826382472637
- 2.224357980788116
- 1.2507436439851465
- 1.9703391399107906
- 2.48614382491825

Thay're between 0 and just under 3. We need to add one and then round down. `Math.floor()` will round the number down.

```js
Math.floor(2.48614382491825) === 2; // true!
```

So, what happens if we do `Math.floor(Math.random() * 3 + 1)`?

- 2
- 3
- 1
- 2
- 3
- 1
- 3
- 2

We did it! 🎉

