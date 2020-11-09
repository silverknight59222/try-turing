---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Exploring Lite-Brite Functionality

Quick overview/reminder on what JS is

## Understand the Existing Functionality

Click around your Lite-Brite; see if you can "color in" any of the dots. What happens?

### Explore to Learn:

On line 2, change `black` to `red`. Re-run the program and click a dot.

### Breakdown:

Now, let's walk through each line of the existing JavaScript to understand what's happening:
- Line 2: A variable called `activeColor` is set to "black". This doesn't mean much _yet_.
- Line 5: We accessed the `dot-container` element from the HTML file, and stored a reference to it in our JavaScipt code. This helps for line 7...
- Line 7: We told the program to be on the lookout for our user to click anywhere inside the `dot-container`. If/when that does happen, a function called `changeDotColor` will run.
- Line 10: We declare the `changeDotColor` function
- Line 12: We ask the program if it was a _dot_ that was actually clicked on (as opposed to the black background in between the dots)
- Line 14: We change the color of the dot that was clicked on, to the color stored in the `activeColor` variable.

Here is a marked-up screenshot that illustrated what-is-cononected-to-what.

<img src="./assets/breakdown.png" alt="JS Code from Lite-Brite starter kit" />

### Explore to Learn, Part 2:

That was a LOT of info! Sometimes it soaks in better when we have a chance to poke at the code.
- On line 5, change `dotContainer` to `container`. Run the program (it should no longer work). Now, on line 7, change `dotContainer` to `container` and then run the program. It should be back to working!
- On line 7, change `changeDotColor` to `changeDot`. Run the program (it should no longer work). Now, on line 10, change `changeDotColor` to `changeDot` and then run the program. It should be back to working!
- Finally, on line 2, change `activeColor` to `active`. Run the program (you guessed it, it should no longer work). Why did things break? What else could you modify at this point to get the functionality back?

## Exploring Functionality Summary

- Like HTML and CSS, JavaScript needs very specific directions
- Each piece of the puzzle has to be connected to the other (this is why spelling and capitalization can be really important!)

<a href="../js-2">Next Section: Planning & Implementing JavaScript</a>
