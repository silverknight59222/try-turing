---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# CSS - Styles
CSS allows us to “dress up” the content on our page. Go ahead and switch over to your CSS file in your MASH app and let’s take a tour of the code.

## Tour the Existing Code
- CSS allows us to target types of elements (ex: `body`, `button`) and specific elements based on class name (ex: `.category`) or id (ex: `#future`).
- Once we’ve targeted an element, we can write rules for that element to follow. Rules can be things like “_the text of this element should be black_” or “_the maximum width of this element should be 80% of the width of the page_”.

### Explore to Learn
After you complete each task, click the green `Run` button and observe the changes in the browser!
- On line 2 of the CSS file, change `serif` to `sans-serif`
- On line 3, change `white` to `#81b29a`
- On line 5, change `80%` to `50%`
- On line 7, change `center` to `left`

You may be wondering, "_how does one know all these special keywords and commands to create these rules?_" Great question! With time and practice, and the use of documentation like [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) and [CSS Tricks](https://css-tricks.com/), developers slowly build their toolkit. Even the most experienced developers need to continually research and google to find the tool they need.
<br>

<div class="try-it-new">
  <h2>Update the CSS in Your MASH App</h2>
  <p>Now that we can see how some of the pieces come together with CSS, let's continue in this process of "making it our own".</p>
  <ul>
    <li>Choose a <a target="blank" href="https://coolors.co/palettes/trending">color palette</a> and change the colors of your font and background using the appropriate hex codes. You can find all of the recognized html color names <a target="blank" href="https://htmlcolorcodes.com/color-names/">here</a>.</li>
    <li>Choose another font from <a target="blank" href="https://fonts.google.com/">Google Fonts</a> and implement that font for your application. When you select a font, there are two steps to use the font in your application. First, copy and paste the code block into the <code>head</code> of your HTML file. Second, copy and paste the CSS rule into your CSS file under the body selector.</li>
  </ul>
  <p><strong>Need help?</strong> At this point, your project should look something <a target="blank" href="https://replit.com/@turingschool/mash-checkpoint-6#script.js">like this</a>.</p>
</div>

## CSS Summary

- CSS allows us to target an element and write specific rules for it to follow. We can target an element using its HTML tag, class, or id.
- Based on the type of rule, CSS will expect different values (ex: `teal` or a hex code for a color and `10px` or `50%` for a measurement).
- There are many types of rules we can write; with practice, we become familiar with more, but don't need to memorize them all

<a href="../wrap-up">Next Section: Wrap-Up</a>
