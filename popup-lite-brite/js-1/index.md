---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Exploring Lite-Brite Functionality

Back to our human metaphor: the JavaScript code is the brain and muscle of our webpage! Similar to how the neural and muscular systems are much more complex than the skeleton, the JavaScript work we do will be more complex that our work with HTML and CSS. Please remember: the goal is not for you to be a pro at the end of this, but to get a little bit of exposure!

## Understand the Existing Functionality

Click around your Lite-Brite; see if you can "color in" any of the dots. What happens?

### Explore to Learn:

On line 2, change `black` to `red`. Re-run the program and click a dot.

### Breakdown:

Now, let's walk through each line of the existing JavaScript to understand what's happening:
- **Line 1:** A variable called `activeColor` is set to "red". This doesn't mean much _yet_.
- **Line 2:** A new variable is declared called `dotContainer`, which stores a reference to the `dot-container` element from the HTML file and then only the `div` elements within that element. This helps for line 4...
- **Line 4:** We told the program to be on the lookout for our user to click on the `dotContainer`. If/when that does happen, a function called `changeDotColor` will run.
- **Line 6:** We declare the `changeDotColor` function and pass in the event as a parameter, which in this case will be a click.
- **Line 7:** We change the background color of the dot that was clicked on, to the color stored in the `activeColor` variable.


<div class="try-it-new">
  <h2>Break Code to Learn</h2>
  <p>That was a LOT of info! Sometimes it soaks in better when we have a chance to poke at the code.</p>
  <ul>
    <li>On <strong>line 1</strong>, change <code class="try-it-code">activeColor</code> to <code class="try-it-code">active</code>. Run the program and click on a dot (it should no longer work). Now, on <strong>line 7</strong>, change <code class="try-it-code">activeColor</code> to <code class="try-it-code">active</code> and then run the program. It should be back to working!</li>
    <li>Finally, on <strong>line 2</strong>, change <code class="try-it-code">dotContainer</code> to <code class="try-it-code">dots</code>. Run the program (you guessed it, it should no longer work). Why did things break? What else could you modify at this point to get the functionality back? Try reading the error message in the console to help you out!</li>
  </ul>
</div>

## Exploring Functionality Summary

- Like HTML and CSS, JavaScript needs very specific directions.
- Each piece of the puzzle has to be connected to the other. This is why spelling and capitalization can be really important!

<a href="../js-2">Next Section: Planning & Implementing JavaScript</a>
