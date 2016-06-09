---
title: What is the Back End?
layout: post
date: 1000-01-01
permalink: back-end-intro
---

In a broad sense, back-end programming is concerned with managing ​*data*​. If we think about our favorite software products, what generally makes them special and useful to us is their ability to do **dynamic** things. Many of us may have had our first interaction with programming by making a simple HTML document -- perhaps an `index.html` file that we put on a personal website we were hosting. This is fun as far as it goes, but the capability of a plain HTML document is fairly limited. Sure it can display the stuff we write into it, but we'd like it to be able to ​*do*​ things -- to record things we tell it, store them for us, maybe play them back in different and interesting formats.

Consider a popular website like Twitter. When we view a Twitter profile, what are the parts we actually care about? Why did we come here in the first place?

![INSERT IMAGE LINK HERE]({{ site.baseurl }}/images/taylor_swift.png)

Modern software, and web software especially, is driven by content -- without the content, most of it wouldn't be worth bothering with. And all of that content has to live somewhere. It needs to be stored, retrieved, manipulated, formatted, etc etc. When we talk about "back-end" programming, we're often thinking of the programming tasks involved in making this possible:

* Storing data and accessing it later
* Verifying that data is accurate
* Manipulating and analyzing data
* Making sure data can be retrieved quickly and easily

- The "front-end" is the part of the application that users see, touch, and interact with. The "back-end" typically handles stuff like storing information in databases, manipulating that data, authenticating users, etc.; it's what happens behind the scenes.

## What are the technologies used on the back-end?

* Database: PostgreSQL, MySQL, MongoDB, etc.
* Languages and frameworks: Ruby/Rails, Python/Django, Elixir/Phoenix, etc.
* Hosting: Digital Ocean, Heroku

## What are we doing today?

- We'll start by looking at the basic data types in Ruby: strings, integers, floats, arrays
- We'll also figure out how to take in and manipulate user input using control flow structures
- We'll end the day working on a pair project to write a Ruby script that posts to Twitter, reads timelines, and saves search results to files.
