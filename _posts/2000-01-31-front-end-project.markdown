---
title: Front End Project
layout: post
date: 2000-01-31
permalink: front-end-projects
---

Congratulations! You know know a bit more about front-end engineering, including HTML, CSS, and JavaScript. Now it's time to put everything together in this paired project. 

Have one partner start a new codepen and change to "Collab Mode". See the [collab mode instructions](https://blog.codepen.io/documentation/pro-features/collab-mode/) for more info. This will allow you to work on the same project simultaneously. 

Take a look at [Sushi Jiggler](https://jenniferdewalt.com/sushi_jiggler.html). 

Can you and your pair create something similar? Be creative, and don't be afraid to use Google to search jQuery, CSS, and JavaScript tricks and documentation. This is all about learning and experimenting. 

## A Helpful Hint

If you look closely at [Sushi Jiggler](https://jenniferdewalt.com/sushi_jiggler.html), you'll notice that that the animation triggers on a click and then going back to normal. This effect is achieved by adding the class, waiting an amount of time, and then removing it.

Assuming we had an element with a `.sushi` class on it and another class on hand called `.wiggle` we could implement this functionality as follows:

- Listen for events on elements with a `.sushi` class.
- When the user clicks on a `.sushi` element, add the `.wiggle` class using `addClass()`
- Use set `setTimeout` and set a timer for 2000 milliseconds in the future that uses `removeClass()` to remove the class. It will look something like this:

<pre>
setTimeout(function () {
  $(this).removeClass("your-class-name");
}, 2000);
</pre>
