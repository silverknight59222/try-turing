---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)

# What is Programming?

Computer programmers create the systems that we use for interacting with lots of different technologies: the computer you are using right now, your cellphone, even the electronic systems in many vehicles.  A programmer's job is to translate what a user wants to accomplish into instructions that the computer can understand and execute.

More and more, the technologies we rely on use the internet as part of their function.  So, it makes sense for a programmer to start their journey by learning about the internet - how it works, and how programmers can create applications that work on the web.  You have probably used one or more internet-based applications today: checking your email, scrolling TikTok, gaming, etc...

## Goals

- Understand how the internet works
- Identify the key differences between Front End and Back End engineering
- Categorize various technologies used in Back End engineering

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

## What is Back End Engineering?

In a broad sense, Back End Engineering is all about managing and manipulating ​data​ (information). Let’s go back to our [target.com](https://www.target.com/) example. Let’s try to find a store near us. This time, the user has an opportunity to receive unique data that has to come from somewhere. That somewhere is what Back End Engineering is concerned with. Back End Engineering is what makes a unique user experience possible. All of the data a user receives back from the server is unique to their specific location.

When we talk about Back End engineering, we’re often thinking of the programming tasks involved in making these things possible:
- Manipulating, analyzing, and/or calculating data
- Storing data and accessing it later
- Verifying that data is accurate
- Making sure data can be retrieved quickly and easily

## What is Front End Engineering?

The **Front End** is the part of the application that users see, touch, and interact with. This is the code that produces the experience in front of the user. All of the stylistic components of a web page (layout, colors, sizes), in addition to logic around user interactions, are part of Front End engineering.  Without front end engineering, apps like Instagram and Amazon would be much more difficult, and much less fun to use.

## What Technologies are used?

There are numerous technologies that can be used for web development. Here are a few of them:

- **Languages and frameworks**: C#/.NET, JavaScript/Node, Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, and more.
- **Databases**: PostgreSQL, MySQL, Oracle Database, MongoDB, etc.

Today, we will be focusing on just a small part of Ruby to get you introduced to the basics of programming. However, we hope that these terms give you some context, so that next time you hear one of these words, you can say “Aha! That’s a database.”

### Up Next

- [Ruby Introduction](./ruby-intro)
- [Ruby Methods](./ruby-methods)
- [Control Flow](./control-flow)
- [Loops](./loops)
