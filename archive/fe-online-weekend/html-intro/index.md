---
layout: lesson
---

# Intro to HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Identify what HTML is used for in Front-End development
- Create headings, paragraphs, images, buttons and inputs on a webpage
- Use attributes to provide the browser with more information about a given element

## What is HTML?

Of all of the major technologies used on the web, on either the Front-End or the Back-End, HTML, or Hyper Text Markup Language, is the oldest. [In the beginning](http://info.cern.ch/), the web was just a bunch of HTML documents that you wrote by hand. They had these _cool_ things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.

HTML is still an essential part of modern web applications. It holds the content and creates the structure of a webpage.

## Tags, Content, Elements

HTML is made up of a series of **elements**. Each element is made up of at least one **tag**, and most have **content** between an opening and closing tag.

Let's assume we are starting with some text. We'll call this **content**.

<img src="./assets/content.png" alt="the text of 'Hello, World!' in an orange color." />


To tell the browser that this is a paragraph, we'll _**mark up**_ the content with HTML **tags**:

<img src="./assets/element.png" alt="The code for an HTML paragraph element. The opening <p> is labeled opening tag, the text 'Hello, World!' is labeled content, and the closing </p> is labeled closing tag. All three pieces are enclosed in a brace and labeled element." />

We use the `<p>` (the opening tag) to signal to the browser that everything that's about to follow is part of a paragraph and `</p>` (the closing tag) to let the browser know that this paragraph is done. The entire line - opening tag, closing tag and any content in between - is referred to as an **element**. When a user visits our application, the browser loads up the HTML and parses it into the elements that will eventually make up our user interface.

## Headings

If we wanted this content to be a heading instead, we'd use different opening and closing HTML tags:

```html
<h1>My App Name</h1>
```

There are six heading elements, representing six levels of importance. `h1` is the highest/most important, and `h6` is the lowest.

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

Even though the browser will display these headers as different sizes, don't use the elements simply to change the size. Screen readers will use the headings to construct tables of contents, so it's important that you use the elements in order. It's also best practice to only have one `h1` on the page.

<div class="try-it-new">
  <h3>Try It: Text Based Elements</h3>
  <p><em>Before you think about the code, we recommend that you jot down your plan. What is the title of your page? Subheadings? What content will live below each subheading?</em></p>
  <p>Open the <code>index.html</code> file of your repl project. Inside of the <code>body</code> tags, type out the HTML elements and content you'd like to have on your site. Include at least 3 headings and at least 3 paragraphs.</p>
  <p>If you'd like some filler text to save time/put your focus on the code, check out <a href="https://meettheipsums.com/">Meet the Ipsums</a>.</p>
  <p>Check in on the view of your live app to make sure things are showing up as expected.</p>
</div>

> <span role="img" aria-label="cross fingers">🤞</span>Check in on code comments!

## Forms

After text content, the next thing we engage with most regularly is probably forms - providing information and/or requesting information within a web application by interacting with input fields and buttons.

The `button` element behaves very similar to what we saw with headings and paragraphs.

```html
<button>Click Me!</button>
```

The `input` element is a bit different, though. An input itself doesn't require content, so it is a **self-closing element**, meaning it only has an opening tag.

```html
<input />
```

<div class="try-it-new">
  <h3>Try It: A Small Form</h3>
  <p>Go back to the tab with your repl project. Again, somewhere inside of the <code>body</code> tags, write at least one input element and one button element to make a small form.</p>
  <p>Check in on the view of your live app to make sure things are showing up as expected.</p>
</div>

## Attributes

HTML attributes give us the ability to provide more information about a given element. There are many different reasons we would use attributes; we'll discuss just a couple of them today.

HTML provides us with some attributes just for `input` elements. Check out the examples below:

```html
<input type="text" placeholder="username" />
<input type="password" placeholder="password" />
<button>Log In</button>
```

<div class="try-it-new">
  <h3>Try It: Improving Our Form</h3>
  <p><em>Before taking this step in your code, you may want to take a moment to think/write some notes on what info you want from your user.</em></p>
  <p>Go back to the tab with your repl project. Update any <code>input</code> elements with a <code>type</code> attribute, and consider if you want to use the <code>placeholder</code> attribute. You can find a list of other form types <a href="https://www.w3schools.com/html/html_form_input_types.asp">here</a>.</p>
  <p>Check in on the view of your live app to make sure things are showing up as expected.</p>
</div>

## Images

The `img` element is what allows us to display images on a webpage. Like `input`, `img` is a self-closing tag because it doesn't have any text content to show. We must use an attribute and value to instruct the browser which image to display to the user.
- The `src` attribute is short for source. The browser looks for that - and whatever value is provided, the browser will look to that location for an image.
- The `alt` attribute is short for alternative, referring to alternative text. The value provided to that attribute should hold a text description of the image, which is incredibly useful for accessibility. A user who is blind or has low vision can read the description, as well as a user who has a poor internet connection and can't download the image.

```html
<img src="https://bit.ly/hedgie-pic" alt="Hedgehog lounging on the patio" />
```

<div class="try-it-new">
  <h3>Try It: Images</h3>
  <p>Add at least one image to your HTML, using the <code>src</code> and <code>alt</code> attributes.</p>
  <p><em>To include images in a repl project:</em> Google search an image, right click it, and select "Copy image address". Paste that in as the value of your <code>src</code> attribute.</p>
  <p>Don't forget to check in on the view of your live app!</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
