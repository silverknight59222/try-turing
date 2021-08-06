---
layout: lesson
---

# What is Back-End Engineering?

<a href="../">Back to Curriculum Index</a>
<br>

## Goals

- Diagram how the internet works
- Identify the key differences between Front-End and Back-End engineering
- Categorize various technologies used in Back-End engineering
<br>

## How Does the Internet Even Work?

When you visit a URL like <code>https://www.vcahospitals.com/</code>, what happens?

Let's draw a slightly more involved diagram of the client-server model that is displayed:

!["Simple client server model, client/computer is on left side , with an arrow labeled 'request' pointing to a server on the right right. The server has an arrow labeled 'response' pointing back to the client. The set of arrows is labeled with 'HTTP(S)'."](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data/client-server.png)
<br>
<small>Source: Mozilla.org</small>
<br>

## What is Back-End Engineering?

In a broad sense, Back-End engineering is concerned with managing and manipulating ​data​ (aka information).

Consider a website like VCA Hospitals. When we view the landing page, what are the parts we actually care about? Why did we come here in the first place? In the screenshot below, the light blue box outlines the opportunity for the user to get **dynamic data** that will have to come from _somewhere_. That _somewhere_ is what Back-End engineering is concerned with.

!["VCA screenshot"](../assets/vca.png)

When we talk about Back-End engineering, we're often thinking of the programming tasks involved in making this possible:

- Storing data and accessing it later
- Verifying that data is accurate
- Manipulating, analyzing, and/or calculating data
- Making sure data can be retrieved quickly and easily
<br>

## Back-End & Front-End

The **Front-End** is the part of the application that users see, touch, and interact with. This is the code that produces the experience in front of the user. All of the stylistic pieces of a website (layout, colors, sizes), in addition to logic around user interactions, are considered **Front-End** concerns.

The **Back-End** typically handles stuff like storing information in databases, manipulating that data, authenticating users, etc.; it's what happens behind the scenes.
<br>

## What technologies are used on the Back-End?

There are numerous technologies that can be used for Back-End programming. Here are a few of them:

- **Languages and frameworks**: Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, and more.
- **Databases**: PostgreSQL, MySQL, Oracle Database, MongoDB, etc.

>At Turing, our full-time students learn to program via Ruby and Ruby on Rails. We believe the fundamental concepts are more important that the language itself; students can easily pick up a new language once they have those fundamentals!

Today, we won't be talking about anything except for a teeny tiny part of Ruby. However, we hope that these terms give you a lay of the land so that next time you hear one of these words, you can say "Aha! That's a database."

<a href="../ruby-review">Next: Ruby Review</a>
