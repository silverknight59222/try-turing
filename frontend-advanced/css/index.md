---
layout: lesson
---

# Style To Do List with CSS
<a href="../extensions">Back to All Extensions</a>

## Goals

- Style HTML elements using CSS properties and values
- Research and implement some common CSS properties
- Implement hover states and transition for a great user experience

<br>
## What is CSS?

CSS is a way to add style to HTML documents on the web. It's incredibly powerful! Let's take a look at some examples of CSS in action: [CSS Zen Garden](http://www.csszengarden.com/). You'll notice that every single one of these web pages has the exact same HTML - all the differences in layout and look are achieved through CSS!

<br>
## CSS Rules and Syntax

In CSS, we write a bunch of rules for how our document should look. The browser evaluates those rules and styles the page accordingly. A CSS rule is defined as follows:

```css
h1 {
  color: red;
  background: yellow;
  border: 2px solid black;
}
```

In the example above, the browser will set the color of any <h1> text elements to red. We can define multiple sets of properties and values in a given rule. Here's how we do that:

```css
h1 {
  color: red;
  background: yellow;
  border: 2px solid black;
}
```

In order to style the entire background, you can use the body selector, like this:

```css
body {
  background: yellow;
}
```

Sometimes you don't want to target the element because you don't want every single element of the same type to share that styling. That's where IDs come in. To target an element by ID, use this syntax:

```html
<section id="idea-container">Here is an idea!</section>
```

```css
#idea-container {
  border: 5px dotted magenta;
}
```
There are a lot of colors out there! Find a color that makes you happy [here](https://colours.neilorangepeel.com/).


<div class="try-it-new">
  <h2>Try It: CSS Styles</h2>
  <p>In your To Do List project, open the <code>styles.css</code> file. Write at least 2 rules that target elements in from HTML file. Use any of the properties listed below (or any others you know of or research)!</p>

  <p>Not sure where to start? Could you add some styles to the paragraph elements so that when each "mood" that is logged stands out? Maybe a background color and border? Next up, could you make the button really look like a button that you'd want to click?!</p>

  <ul>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity">opacity</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">height</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">padding</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a></li>
    <li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a></li>
  </ul>
</div>

<br>
## What are Hover States?

CSS has many _pseudo-classes_ that give us even more control. This definition is from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes):

>A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it.

<div class="try-it-new">
  <h2>Check It Out: Hover States</h2>
  <p>Hover states can provide an important element to the users experience and a products success. Go to your favorite or most used apps and observe:</p>
  <ul>
    <li>How are you, as the user, able to easily identify buttons?</li>
    <li>What happens when you hover over a button?</li>
  </ul>
  <p>Want to learn more? <a target="blank" href="https://uxplanet.org/button-ux-design-best-practices-types-and-states-647cf4ae0fc6">Read this blog post</a> for some suggestions on best practices.</p>
</div>

<br>
## Hover State Syntax

If we want to give instructions to the browser to show a purple button, but change that button the have a yellow background when the user hovers over it, we might write these two rules:

```css
button {
  background-color: purple;
}

button:hover {
  background-color: yellow;
  cursor: pointer;
}
```

Additionally, we can ask the browser to give a smooth transition from purple to yellow.

```css
button {
  transition: 1s ease;
  background-color: purple;
}
```

<div class="try-it-new">
  <h2>Try It: Hover States</h2>
  <p>When the button in your To Do List project is hovered over, change at least two things about it.</p>
</div>

[Here is a To Do List with styles]() in place, including everything covered in the Try It sections.

<br>
<a href="../extensions">Back to All Extensions</a>
