---
title: What is Back End Development? 
layout: lesson
---

<a href="../">Back to Lesson Home Page</a>

[Back to What is Front End Development?](../what-is-fe)

# What is Back End Development?

In a broad sense, Back End engineering is concerned with managing and manipulating ​data​ (aka information).

Consider a website like VCA Hospitals. When we view the landing page, what are the parts we actually care about? Why did we come here in the first place? In the screenshot below, the light blue box outlines the opportunity for the user to get **dynamic data** that will have to come from _somewhere_. That _somewhere_ is what Back End engineering is concerned with.

!["VCA screenshot"](../assets/vca.png)

When we talk about Back End engineering, we're often thinking of the programming tasks involved in making this possible:

- Storing data and accessing it later
- Verifying that data is accurate
- Manipulating, analyzing, and/or calculating data
- Making sure data can be retrieved quickly and easily

## Information Management

In the above example, the User is looking for a Vet Hospital. As the User, we don't want all the VCAs that exist, we only want the ones near us or in a specific location.

Once we enter our zip code and hit *Enter*, another request is sent to the Back End, the server. The Back End Developer will take that zip code and compare it to the locations in the database, returning only the VCA offices within a certain radius of the given zip code.

How to gather the matching data and how to send that data back are a few of the problems Back End Developers work on. 


## What technologies are used on the Back End?

There are numerous technologies that can be used for Back End programming. Here are a few of them:

- **Languages and frameworks**: Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, and more.
- **Databases**: PostgreSQL, MySQL, Oracle Database, MongoDB, etc.

## Next Up:
- [What is Full Stack Development?](../what-is-fs)