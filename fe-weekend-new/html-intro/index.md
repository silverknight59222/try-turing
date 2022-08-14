---
layout: lesson
---

### Go Back

- [Welcome & Setup](../)
- [What is Front End Engineering?](../what-is-fee)

# HTML Fundamentals

HTML (Hypertext Markup Language) is the code that gives a web page both its structure and content. Any images, text, or buttons that appear on the page can also be found in the HTML.

## Goals

- Explain the purpose of HTML
- Read through an HTML file and anticipate what the browser will render

## HTML Elements

HTML consists of a series of elements, which wrap the content in both an opening and closing tag. There are four main parts to any element.
1. **The opening tag**, which consists of the name of the element wrapped in angle brackets.
2. **The closing tag**, which also has the name of the element, but also includes a _forward_ slash before the element name.
3. **The content**, which in the example below, this is the text.
4. **The element**, which is the opening tag, the content, and the closing tag altogether.

```html
<h3>New Vocabulary Words</h3>

<ul>
  <li>Element</li>
  <li>Tag</li>
  <li>Angle bracket</li>
</ul>
```

<div class="try-it-new">
  <h3>Try It: Exploring to Learn</h3>
  <p>Fork <a href="https://replit.com/@turingschool/html-fundamentals#index.html" target="blank">this replit</a> to begin.</p>
  <ol>
    <li>Make one observation about the code.  (The `h1` element has the content of "Kittens")</li>
    <li>Ask one question about the code. (What is happening on line X?)</li>
  </ol>
</div>


<div class="module-card fe-project-card">
  <h3>Modify the Content</h3>
  <p>At this point, your web page is still about baby kittens. Modify the **content** of your HTML elements, so that your web page is about a topic of your choice!</p>
</div>
<br>

## HTML Summary

- Elements that live inside of the `body` tags will be displayed on the page.
- We can nest elements inside of other elements to create structure within the HTML.
- Classes allow us to give each element a specific label so that we can reference that element later.
- The number of elements and the content inside of the elements in the HTML file usually have a 1-to-1 correlation with what we see in the browser.


<br>

### Up Next

- [Introduction to CSS](../intro-to-css)
- [JavaScript Fundamentals](../js-1)
- [Connecting HTML & JavaScript](../js-2)
- [Building Dynamic User Experiences](../js-3)
- [Extensions](../extensions)
- [Wrap-Up](../wrap-up)
