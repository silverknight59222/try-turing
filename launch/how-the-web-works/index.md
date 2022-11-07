---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [What is Programming](../what-is-programming/)
- [Ruby Introduction](../ruby-intro)
- [Ruby Methods](../ruby-methods)
- [Control Flow](../control-flow)
- [Loops](../loops/)

## The Iternet and Programming

More and more, the technologies we rely on use the internet as part of their function.  So, it makes sense for a programmer to start their journey by learning about the internet - how it works, and how programmers can create applications that work on the web.  You have probably used one or more internet-based applications today: checking your email, scrolling TikTok, gaming, etc...

## How Does the Web Even Work?

The web is a service built on the internet that allows computers to easily share data. This is usually referred to as client-server communication. Below, you can see a model of this communication process. We have some devices connected to the web that **request** information, which are called clients. Then, we have a device that **serves** the data, referred to as a server. The server is constantly listening for requests and when it receives one, it always responds with a message. This is often called the response-request cycle.

When you go to any webpage, [target.com](https://www.target.com/) for example, you are sending a request to the server by typing in a specific web address in the address bar. Now, if the web address is recognized, you usually don’t even see the response message, but it’s there. What happens if you go to a web page that doesn’t exist like [try.turing.edu/help](https://try.turing.edu/help)? You can see the response code on that web page! But again, if the request is successful, the page loads as you would expect.

!["Simple client server model, client/computer is on left side , with an arrow labeled 'request' pointing to a server on the right right. The server has an arrow labeled 'response' pointing back to the client. The set of arrows is labeled with 'HTTP(S)'."](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data/client-server.png)
<br>
<small>Source: Mozilla.org</small>
<br>

## Programming for the Web

Most websites and internet-based applications are composed of two components:
1. Backend Engineering, and
2. Frontend Engineering.

Let's use our Number Guessing game as an example to highlight the different components.

What we have built so far is the data, and logic for a game, with a very rudimentary user interaction.  We have essentially built the **back end** of a game - the funtionality is there, but it's maybe not very appealing for a user to play.

If we were to build a more interactive, engaging interface (maybe a mobile app, or website!) that would be the **front end** of the program.

## What is Back End Engineering?

In a broad sense, Back End Engineering is all about managing and manipulating ​data​ (information). Backend engineers build the systems that store, manipulate, secure, and serve data.  Backend engineering is what makes it possible to share photos on instagram with other people, save the likes that photos get, and suggest content based on what similar users have liked.

## What is Front End Engineering?

The **Front End** is the part of the application that users see, touch, and interact with. This is the code that produces the experience in front of the user. All of the stylistic components of a web page (layout, colors, sizes), in addition to logic around user interactions, are part of Front End engineering.  Frontend engineering is what makes it possible to 'like' and instagram post in an instant, apply photo filters, and save personal preferences (like a dark color scheme). Without front end engineering, apps like Instagram and Amazon would be much more difficult, and much less fun to use.

## What Technologies are used?

Programmers that develop applications for the web use many of the same languages that we introduced at the beginning of our session: C#, Javascript, Ruby, Python, and many others.  In addition to programming languages, web developers also use language-specific frameworks to help organize their code.  A framework is a bit of pre-written code that is common to a specific type of project, so each language will have frameworks to help developers get started on a project.

**Language / Framework**: C#/.NET, JavaScript/Node, Ruby/Rails, Python/Django, Elixir/Phoenix and more.

We are not going to go into detail on these, but its nice to be able to make a connection between language and frameworks as you move forward in your learning!