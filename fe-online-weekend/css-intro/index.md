---
layout: lesson
---

# Intro to CSS

<a href="../">Back to Curriculum Index</a>

## Goals

- Style HTML element using CSS rules
- Use class and ID attributes on HTML elements to more specifically target them in CSS

## What is CSS?

CSS is a way to add style to HTML documents on the web. It's incredibly powerful!

Let's take a look at some examples of CSS in action: [CSS Zen Garden](http://www.csszengarden.com/). You'll notice that every single one of these web pages has the exact same HTML - all the differences in layout and look are achieved through CSS!

While CSS is typically used to control the layout and details of the way a site looks, artists have also used it to create some pretty incredible pieces - check out [these portraits](https://twistedsifter.com/2019/11/painting-with-css-and-html-by-diana-smith/) and [this card](https://codepen.io/ivorjetski/full/ExaKmjw).

## CSS Rules

How do we write CSS code that instructs the browser to make elements appear differently? We write CSS rules - a set of instructions for each element to follow.

<img src="./assets/css-syntax-breakdown.png" alt="A CSS rule for a button with a color of #333333 and font-size of 32px. The button is labeled selector, color: #333333 is labeled declaration, font-size: is labeled property and 32px is labeled value." />

### Commonly Used Properties

There are [520 properties](https://css-tricks.com/how-many-css-properties-are-there/) available in the CSS language. It is unlikely that any developer knows every single one. But, there are many commonly used properties that folks who write CSS with some regularity will come to memorize.

Here are a few great places to start:
- [**background-color**](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) and [**color**](https://developer.mozilla.org/en-US/docs/Web/CSS/color): each need a value of either a [built-in color name](https://htmlcolorcodes.com/color-names/), or a [hex code](https://htmlcolorcodes.com/). There are other ways we can provide color values that we won't go into today. Example declaration: `color: #401AA5;`
- [**font-size**](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size): this property expects a value with a unit; today we'll introduce `px` (pixels) and `%` (percent). Example declaration: `font-size: 150%;`
- [**border**](https://developer.mozilla.org/en-US/docs/Web/CSS/border): accepts 3 pieces of information: the width of the line, the style of the line, and the color. Example declaration: `border: 2px solid #401AA5;`

<div class="try-it-new">
  <h3>Try It: Exploring CSS</h3>
  <p>Open the <code>styles.css</code> file in your Glitch project.</p>
  <p>Write a rule that targets the paragraphs, then change their background-color and font-size.</p>
  <p>Next, write a rule that targets the main heading - change the color of the text and add a border.</p>
  <p>Check in on the "View" of your app to make sure things are showing up as expected.</p>
  <p>Finished Early? Play around! Add drop down.</p>
</div>

## Classes and IDs

There will be times when we want to target _one_ paragraph element, but not the 37 others on the site. There will also be times when we want to write a CSS rule for some paragraphs, but not all. This is a great opportunity to use a class or ID attribute!
- **Classes** can be used to identify one or more than one elements
- **IDs** can be used to uniquely identify one element

Below is the syntax to apply classes and IDs to HTML elements:
```html
<h2 class="sub-heading">Welcome!</h2>
<button id="log-in-btn">Enter Site</button>

<h2 class="sub-heading">More Info Below</h2>
```

To target them in CSS, we need to use a specific syntax:

```css
/* classes start with . */
.sub-heading {
  color: teal;
}

/* IDs start with # */
#log-in-btn {
  background-color: grey;
  border: 3px solid teal;
}
```

<div class="try-it-new">
  <h3>Try It: Classes & IDs</h3>
  <p>In the <code>styles.css</code> file, use a class attribute to give the same styles to 2 of your paragraphs, but not to the other(s).</p>
  <p>Based on how you'd like to style your page, if you see the need for other classes or IDs, go ahead and implement them!</p>
  <p>Check in on the "View" of your app to make sure things are showing up as expected.</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
