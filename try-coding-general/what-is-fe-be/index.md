---
layout: lesson
---

<a href="../">Back to Lesson Home Page</a>

# What is Front End and Back End Engineering? 

## How Does the Internet Even Work?

When you visit a URL like <code>https://www.vcahospitals.com/</code>, what happens?

Here is a simplified diagram of the client-server model:

!["Simple client server model, client/computer is on left side , with an arrow labeled 'request' pointing to a server on the right right. The server has an arrow labeled 'response' pointing back to the client. The set of arrows is labeled with 'HTTP(S)'."](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data/client-server.png)
<br>
<small>Source: Mozilla.org</small>
<br>

When a User enters in a website name (web address), a request is made to the Server for that company. That server stores all the data for that company and will return the data which was requested. The Client (browser), will then display that data and allow the user to view and interact with the requested data. 

## What is the Front End?

The **Front End** is the part of the application that users see, touch, and interact with.

When we're talking about web development, the Front End is the part of the code base that takes care of rendering the user interface in the web browser.

The Front End will prompt users in various ways to collect information which can be used to customize the user's experience within an application. 

## What technologies are used on the Front End?

The three main technologies used on the Front End are:
- CSS (styling of the webpage)
- HTML
- JavaScript

Other frameworks are build on top of JavaScript such as React, Vue, or Angular.


## What is the Back End?

Back End engineering is concerned with managing and manipulating ​data​ (aka information).

When we talk about Back End engineering, we're often thinking of the programming tasks involved in making this possible:

- Storing data and accessing it later
- Verifying that data is accurate
- Manipulating, analyzing, and/or calculating data
- Making sure data can be retrieved quickly and easily


## What technologies are used on the Back End?

There are numerous technologies that can be used for Back End programming. Here are a few of them:

- **Languages and frameworks**: Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, and more.
- **Databases**: PostgreSQL, MySQL, Oracle Database, MongoDB, etc.

## Both Front End and Back End work with a lot of data and logic.

Most of the work you will do as a developer is data manipulation. 

- How will you get the data?
- What parts of it will you use? 
- Do you need to reformat any of the data?
- How will you display the data to the user?
- What does this data mean?

Both Front End and Back End deal with taking in data (input), and then giving back or *returning* new data based on that input. Today we're going to look at how we might work with some of this data in both Ruby, our Back End language, and JavaScript, our Front End language. 

## Up Next
- [Ruby Introduction](./ruby-intro)