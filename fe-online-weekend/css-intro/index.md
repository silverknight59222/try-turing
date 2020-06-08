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

## CSS Rules

How do we write CSS code that instructs the browser to make elements appear differently? We write CSS rules - a set of instructions for each element to follow.

```css
element {
  color: magenta;
  font-size: 32px;
}
```

### Commonly Used Properties

There are [520 properties](https://css-tricks.com/how-many-css-properties-are-there/) available in the CSS language. It is unlikely that any developer knows every single one. But, there are many commonly used properties that folks who write CSS with some regularity will come to memorize.

This is a great place to start:
- background-color
- color
- font-size
- border

TRY IT:

## Classes and IDs

There will be times when we want to identify one paragraph tag, but not the 37 others on the site. This is a great opportunity to use the ID attribute! You can think of the ID as you would a license plate for a car - no other car should have the exact plate info, otherwise we wouldn't be able to uniquely identify it.

```html
<button id="log-in-btn">Log In</button>
```

This ability to identify individual elements will come in handy when we start CSS.

- why we need them
- syntax, in HTML and CSS

TRY IT: give the same styles to 2 of your paragraphs, and different styles to another paragraph.

## Extension? Hover states?

<br>
<a href="../">Back to Curriculum Index</a>
