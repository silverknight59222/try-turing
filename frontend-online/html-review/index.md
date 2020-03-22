---
layout: lesson
---

# HTML Review

<a href="../">Back to Curriculum Index</a>

## Goals

- Understand the purpose of HTML
- Be able to read through an HTML file and anticipate what the browser will render
- Apply IDs to HTML elements
- Create buttons in HTML

## HTML

Of all of the major technologies used on the web, on either the front- or the back-end, HTML, or _Hyper Text Markup Language_, is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.

HTML is still an essential part of modern web applications. It holds the content and creates the structure of a webpage.

<img src="{{ site.url}}/assets/images/header-buckets.png" alt="Marked up nav bar showing how elements are nested"/>

## Tags, Content, Elements

HTML is made up of a series of **elements**. Each element is made up of at least one **tag**, and most have **content** between an opening and closing tag.

The header/nav bar at the top of this page is written with code that looks something like this:

```html
<nav>
  <img src="./turing-school-logo" alt="Turing School logo" />
  <ul>
    <li>Workshops</li>
    <li>Turing School</li>
  </ul>
</nav>
```

<div class="try-it-new">
  <h2>Try It: Tags, Content, Elements</h2>
  <p>Looking at the code snippet above, work to answer each of the following questions:</p>
  <ul>
    <li>How many HTML elements are there in total?</li>
    <li>What elements are nested inside of the <code>nav</code> element?</li>
    <li>What is the content inside the first <code>li</code> element?</li>
    <li>What do you know about <code>ul</code> and <code>li</code>? (If you don't know much or aren't sure, you can absolutely Google it!)</li>
  </ul>
</div>

## Attributes

HTML attributes give us the ability to provide more information about a specific element. The code snippet we looked at in the previous section had one element with two attributes:

```html
<img src="./turing-school-logo" alt="Turing School logo" />
```

The self-closing `<img />` tag above has two attributes - `src` and `alt`. These are intended to be used in conjunction with the `<img />` tag. `src` needs to tell the browser which image to display, and `alt` should provide text describing the image in the event the user isn't able to access the image.

Other attributes are available to us as well. The one will we focus on today can be used with **any** HTML element:
- `id` - an id attribute allows us to access specific elements in CSS and JavaScript. Each id can only be used once in each HTML document.

<div class="try-it-new">
  <h2>Try It: Attributes</h2>
  <p>Fork <a target="blank" href="https://codepen.io/turing-school/pen/jOPKpzB?editors=1010">this CodePen</a>. Add unique IDs to each of the <code>li</code> elements. Nothing in the browser should change, but this work will lay the foundation for the JavaScript we will write later!</p>
  <p>Keep this CodePen open; we will add to it in the next section.</p>
</div>

## NEW: Buttons

As we wrap up our review of HTML (although it may still feel _very_ new - that's ok!), we'll add one more element to your toolbox: `<button>`.

The `<button>` element has an opening and closing tag, and should have content.

```html
<button>Click Here!</button>
```

<div class="try-it-new">
  <h2>Try It: Buttons</h2>
  <p>Add two buttons to the HTML in your CodePen. The content can be whatever you choose!</p>
  <p><em>Finish Early?</em> Add a different ID to each button.</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
