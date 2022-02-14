---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Modifying the CSS

CSS allows us to "dress up" the content on our page.

## CSS Rules

How do we write CSS code that instructs the browser to make elements appear differently? We write CSS **rules** - a set of instructions for each element to follow.
<br>
<br>
![A CSS rule for a button with a color of #333333 and font-size of 32px. The button is labeled selector, color: #333333 is labeled declaration, font-size: is labeled property and 32px is labeled value.](../assets/css-syntax-breakdown.png)

```css
button {
  font-size: 32px;
}
```

In the previous example, the browser will set the font-size of the font within any button on the page to `32px`. We can provide multiple declarations inside of a rule, such as:

```css
button {
  font-size: 32px;
  font-family: sans-serif;
  border-radius: 3px; /* rounds the corners */
}
```

## Tour the Existing CSS

- CSS allows us to target types of elements (ex: `body`, `img`) and specific elements based on their id (ex: `#question-group`)
- Once we’ve targeted an element, we can write rules for that element to follow. Rules can be things like _“the height of this element should be 200px”_ or _“the background of this element should be this hex color (#c8553d)”_

### Explore to Learn

After you complete each task, click `Run` and observe the changes in the browser. If you like the change, keep it!
- On line 8, change `200px` to `100px`
- On line 14, change `#c8553d` to `midnightblue`
- On line 15, change `#ffd5c2` to `skyblue`
- What is the difference between the background and color properties?

You may be wondering, "how does one know all these special properties to create these rules?". Great question! With time and practice, and the use of documentation like [CSS Tricks](https://css-tricks.com/), developers slowly build their toolkit. Even the most experienced developers need to continually research and use Google to find the tool they need.
<br>

## Update the CSS in Your Project

Modify the `style.css` file for your quiz to fit your personality!

<div class="try-it-new">
  <h2>Modify the CSS</h2>
  <p>We know CSS impacts the visual elements of a webpage. Let's continue in this process of "making it our own".</p>
  <ul>
    <li>Play around with sizes or colors until you are satisfied with your page.</li>
    <li>If you're looking for nice color palettes, <a href="https://coolors.co/" target="blank">coolors.co</a> is a great resource!</li>
    <li><strong>Want a different font?</strong> Take a look at <a href="https://fonts.google.com/" target="blank">Google Fonts</a> and find one you like. Then, modify the <code>link</code> tag in the head of your index.html file and update the value of the font-family property in your CSS.</li>
  </ul>
</div>


## CSS Summary

- CSS allows us to target an element and write specific rules for it to follow.
- Based on the type of rule, CSS will expect different values (ex: `midnightblue` or a hex code for a color and `10px` or `50%` for a measurement).
- There are many types of rules we can write; with practice, we become familiar with more but don't need to memorize them all.

<a href="../wrap-up">Next Section: Wrap-Up</a>
