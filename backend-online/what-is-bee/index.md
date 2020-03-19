---
layout: lesson
---

# What is Back-End-Engineering?

## Goals

- Identify the key differences between frontend and backend engineering
- Categorize various technologies used in backend engineering

## What is Back-End?

In a broad sense, back-end programming is concerned with managing ​data​ (aka information).

If we think about our favorite web applications, what generally makes them special and useful to us is their ability to **do dynamic things**. In most cases, we'd like our website to be able to ​do things -- to record data we tell it to record, store information for us, and be able to retrieve that data later.

Consider a popular website like Amazon. When we view an Amazon page, what are the parts we actually care about? Why did we come here in the first place?

In the screenshot below, the pink boxes represent examples of **dynamic data** that had to be stored somewhere. That "somewhere" is what backend programming is concerned with.

<img src="{{ site.url }}/assets/images/amazon.png" alt="Amazon.com screenshot">

All of the stylistic pieces (including the layout, colors, sizes, and user interactions) are considered **front-end** concerns.

Modern software, and web software especially, is driven by this data -- without the content, most of it wouldn't be worth bothering with. And all of that content has to live somewhere. It needs to be stored, retrieved, manipulated, formatted, etc.

When we talk about back-end programming, we're often thinking of the programming tasks involved in making this possible:

- Storing data and accessing it later
- Verifying that data is accurate
- Manipulating, analyzing, and/or calculating data
- Making sure data can be retrieved quickly and easily

##So, to sum up:

The **front-end** is the part of the application that users see, touch, and interact with. This is the code that produces the experience in front of the user.

The **back-end** typically handles stuff like storing information in databases, manipulating that data, authenticating users, etc.; it's what happens behind the scenes.

## What technologies are used on the back-end?

There are numerous technologies that can be used for back-end programming. Here are a few of them:

- **Languages and frameworks**: Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, PHP/Laravel, etc. A framework is kind of like a set of Lincoln Logs. You can think of a framework as providing "pre-cut" pieces of code that you'll need in order to build an application, just like Lincoln Logs provide "pre-cut" pieces wood that you can use to build a tiny house.
- **Databases**: PostgreSQL, MySQL, Oracle Database, MongoDB, DynamoDB, etc.
Hosting: AWS (Amazon Web Services), Digital Ocean, GoDaddy, Heroku, etc.

We won't be talking about anything except for a teeny tiny part of Ruby. However, we hope that these terms give you a lay of the land so that next time you hear one of these words, you can say "Aha! That's a database."

## What are we doing today?

1. Write programs that print and combine pieces of text using the String data types
2. Take in and manipulate user input using control flow structures
3. Build a number guessing game using the Integer data type
4. Write a Ruby script that posts to Twitter, reads timelines, and saves search results to files (start in class, finish at home)