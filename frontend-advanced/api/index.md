---
layout: lesson
---

# Connect Mood Tracker to a Back-End API

## Goals

- Brainstorm and pseudo-code where our API requests would live in the code
- Implement the syntax to make an API request

**Note:** For this extension, you will start with a new Starter Kit. It has the completed Mood Tracker project with some additional pieces that are essential to this working. [Start by remixing this project](). 

## Data APIs

High level explanation

## Making API Requests

Many different ways to accomplish, since we are talking to an API built into the same project, we will use jQuery's `ajax` methods that look like this:

```javascript
$.get('/moods', function(moods) {
  // any code we want to run after we make the request
  // moods will be the variable that holds the array of moods
});
```

```javascript
$.post('/moods', function() {
  // any code we want to run after we make the request
  // because we are asking to add something to the database, not get something
    // we don't have a moods variable
});
```

## Pseudo-Coding

What is it, why we do it.
Let's make our own plan.

- When do we need to ask the database to store an entry?
- When do we need to ask the database to give us all the entries?

How do those two things fit in with the code we currently have? Let's add some notes into our existing code.



Provide a link to a completed Mood Tracker with API calls they can check out
