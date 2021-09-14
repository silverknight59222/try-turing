---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Modifying the Lite-Brite CSS

CSS allows us to "dress up" the content on our page.

## Tour the Existing Code

- CSS allows us to target types of elements (ex: `body`, `p`) and specific elements based on class name (ex: `question-title`)
- Once we’ve targeted an element, we can write rules for that element to follow. Rules can be things like _“the text of this element should be white”_ or, _“the maximum width of this element should be 70% of the width of the page”_

### Explore to Learn

After you complete each task, click “Run” and observe the changes in the browser!
- On line 3 of the CSS file, change `snow` to `gold`
- On line 4, change `teal` to `#FF6347`
- What is the difference between the color and background properties?
- On line 12, change `70%` to `40%`
- On line 18, change `30px` to `50px`

You may be wondering, "how does one know all these special keywords and commands to create these rules?". Great question! With time and practice, and the use of documentation like [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) and [CSS Tricks](https://css-tricks.com/), developers slowly build their toolkit. Even the most experienced developers need to continually research and google to find the tool they need.
<br>
<br>

<div class="try-it-new">
  <h2>Modify the Existing Code</h2>
  <p>Now that we can see how CSS impacts the visual elements of a webpage, let's continue in this process of "making it our own".</p>
  <ul>
  <li>When the page loads, we probably don’t want the answers to be visible yet. To change this, add <code>display: none;</code> to the <code>.question-text</code> rules.</li>
  <li>Optional: tinker with the colors used throughout your app! Play around with sizes or colors until you are satisfied with your page.</li>
  </ul>
</div>

### Add a New CSS Rule

The previous change of adding <code>display: none;</code> to the <code>.question-text</code> rules made the answers to our questions disappear, but we sometimes want them to show on the screen. To do this, we can create another CSS selector to <em>show</em> the text. We will only add that class to the element when we want it to show! Add this code block at the very bottom of your CSS file. It won’t do anything yet, but after we write some JavaScript, you will see how it works.

```css
.show-text .question-text {
  display: block;
}
```
<br>

## CSS Summary

- CSS allows us to target an element and write specific rules for it to follow
- Based on the type of rule, CSS will expect different values (ex: `teal` or a hex code for a color and `10px` or `50%` for a measurement)
- There are many types of rules we can write; with practice, we become familiar with more but don't need to memorize them all

<a href="../js-1">Next Section: JavaScript Overview</a>
