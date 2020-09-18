---
layout: lesson
---

# HTML Review

<a href="../">Back to Curriculum Index</a>

## Purpose of HTML

Of all of the major technologies used on the web, on either the front- or the Back-End, HTML, or _Hyper Text Markup Language_, is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.

HTML is still an essential part of modern web applications. It **holds the content and creates the structure** of a webpage.

## HTML in Action

Let's look at the [small sample site](https://codepen.io/turing-school/pen/ZEGRGde) that was linked in your pre-work to review some of the concepts you've probably seen, but may have some questions about,

## Where are you? 

Share in the chat:
1. What HTML elements do you feel comfortable using?
2. What elements do you have questions about?

<br>

## Material to Reference

### Attributes

HTML attributes give us the ability to provide more information about a specific element. The attribute name and value live inside of the opening tag.

The following code snippet shows a parapraph, `p`, element with a `class` attribute. The value provided to the attribute is `"introduction"`.

```html
<p class="introduction">This is the introduction ...</p>
```

A `class` attribute let's us provide information to the browser about specific elements so we can taget them with CSS and JavaScript. If I wanted my introduction paragraph to be a different color than my other paragraphs, I could use classes:

```html
<p class="introduction">This is the introduction ...</p>
<p class="main-para">This is the first main paragraph</p>
<p class="main-para">This is the second main paragraph</p>
```

An `id` attribute helps us accomplish a similar thing, but it can only be used once in an HTML file. 

```html
<p id="introduction">This is the introduction ...</p>
<p class="main-para">This is the first main paragraph</p>
<p class="main-para">This is the second main paragraph</p>
```

### Images

The `img` element allows us to display an image on a site. Here's an example of the syntax the browser expects:

```html
<img src="./turing-school-logo" alt="Turing School logo" />
```

The self-closing `<img />` tag above has two attributes - `src` and `alt`. These are intended to be used in conjunction with the `<img />` tag. `src` needs to tell the browser which image to display, and `alt` should provide text describing the image in the event the user isn't able to access the image.

### Links

The `<a>` element creates a hyperlink. Here's an example of the syntax the browser expects:

```html
<a href="https://try.turing.io/">Try Coding Curriculum</a>
```

Any text inside of the opening and closing `a` tags will appear, by default, in a bright blue color with an underline and, when clicked, will take the user to the location indicated in the `href` attribute (which is short for hyper-reference). 
<br>
<br>

## Lighthouse Audits

We will touch on Web Accessibility throughout the day. While there are many tools and methodologies that could be used to assess how accessible a site is, we will learn about and use one today called Lighthouse.

Lighthouse is built into the Chrome browser. Here's how to use it:
- Open the Developer Tools (right click, select inspect)
- Select the Lighthouse tab
- Click the `Accessibility` checkbox and uncheck any others
- Click `Generate Report`

<div class="try-it-new">
  <h3>Try It: Lighthouse Audit</h3>
  <p>Run a Lighthouse Audit on your favorite/most used site. Share the score in the chat!</p>
</div>

## Moving Forward

As we move forward throughout the day, you will be working off the CodePen you started in your pre-work. If you don't have access to it, you can use [this]() as a starting point!

<a href="../">Back to Curriculum Index</a>