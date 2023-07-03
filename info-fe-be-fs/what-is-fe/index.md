---
title: What is Front End Engineering? 
layout: lesson
---

<a href="../">Back to Lesson Home Page</a>

## How Does the Internet Even Work?

When you visit a URL like <code>https://www.vcahospitals.com/</code>, what happens?

Let's draw a slightly more involved diagram of the client-server model that is displayed:

!["Simple client server model, client/computer is on left side , with an arrow labeled 'request' pointing to a server on the right right. The server has an arrow labeled 'response' pointing back to the client. The set of arrows is labeled with 'HTTP(S)'."](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data/client-server.png)
<br>
<small>Source: Mozilla.org</small>
<br>

## What is the Front End?

The **Front End** is the part of the application that users see, touch, and interact with.

When we're talking about web development, the Front End is the part of the code base that takes care of rendering the user interface in the web browser.

The Front End will prompt users in various ways to collect information which can be used to customize the user's experience within an application. 

## Let's look at an example from Turbo Tax.

![Turbo Tax screenshot](../assets/turbo-tax.jpg)

This is a great example of creating an intuitive, easy user experience:
- The Front End Developer is tasked with providing the user with a tailored experience of doing their taxes. 
- They ask the user how they feel about doing their taxes.
- Once the user clicks on their answer, the Front End Developer takes that information and decides which branches of logic the program will take the user through and what subsequent data it needs to retrieve from the server.


A FE developer might work closely with a UI/UX designer to come up with how the layout of the pages will look and then will use tools to achieve their desired results.

## What technologies are used on the Front End?

The Front End of the web is based on three major technologies:

<section class="data-type-cards language-cards">
  <div>
    <h3>HTML</h3>
    <p>HTML holds the content we see on a page (text, images, etc.) and defines the structure and order in which the content appears.</p>
    <img src="../assets/html.png" alt="Drawing of human skeleton" />
  </div>

  <div>
    <h3>CSS</h3>
    <p>CSS defines the look and feel of a webpage - it can change the layout of items on a page, colors, fonts, and even animate elements!</p>
    <img src="../assets/css.png" alt="Drawing of clothes and accessories" />
  </div>

  <div>
    <h3>JavaScript</h3>
    <p>JavaScript is what lets the user interact with a page. For example, clicking a button and getting some sort of response.</p>
    <img src="../assets/js.png" alt="Drawing of human skeleton" />
  </div>
</section>

Many libraries and frameworks have been built _on top_ of JavaScript that make Front End development even more robust and powerful! If you hear terms like React, Vue, Ember, Angular... those are all JavaScript frameworks used to build professional level applications.

## Next Up:
- [What is Back End Development?](./what-is-be)