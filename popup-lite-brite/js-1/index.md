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
- **Line 2:** A variable called `activeColor` is set to "black". This doesn't mean much _yet_.
- **Line 5:** We accessed the `dot-container` element from the HTML file, and stored a reference to it in our JavaScipt code. This helps for line 7...
- **Line 7:** We told the program to be on the lookout for our user to click anywhere inside the `dot-container`. If/when that does happen, a function called `changeDotColor` will run.
- **Line 10:** We declare the `changeDotColor` function
- **Line 12:** We ask the program if it was a _dot_ that was actually clicked on (as opposed to the black background in between the dots)
- **Line 14:** We change the color of the dot that was clicked on, to the color stored in the `activeColor` variable.

Here is a marked-up screenshot that illustrates what-is-connected-to-what.

<img src="./assets/breakdown.png" alt="JS Code from Lite-Brite starter kit" />

<div class="try-it-new">
  <h2>Break Code to Learn</h2>
  <p>That was a LOT of info! Sometimes it soaks in better when we have a chance to poke at the code.</p>
  <ul>
    <li>On <strong>line 5</strong>, change <code class="try-it-code">dotContainer</code> to <code class="try-it-code">container</code>. Run the program (it should no longer work). Now, on line 7, change <code class="try-it-code">dotContainer</code> to <code class="try-it-code">container</code> and then run the program. It should be back to working!</li>
    <li>Finally, on <strong>line 2</strong>, change <code class="try-it-code">activeColor</code> to <code class="try-it-code">active</code>. Run the program (you guessed it, it should no longer work). Why did things break? What else could you modify at this point to get the functionality back?</li>
  </ul>
</div>

## Exploring Functionality Summary

- Like HTML and CSS, JavaScript needs very specific directions
- Each piece of the puzzle has to be connected to the other (this is why spelling and capitalization can be really important!)

<a href="../js-2">Next Section: Planning & Implementing JavaScript</a>
