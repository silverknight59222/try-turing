---
layout: lesson
---

# Connect Mood Tracker to a Back-End API

## Goals

- Brainstorm and pseudo-code where our API requests would live in the code
- Implement the syntax to make an API request

**Note:** For this extension, you will start with a new Starter Kit. It has the completed Mood Tracker project with some additional pieces that are essential to this working. [Start by remixing this project](https://glitch.com/edit/#!/tc-api-mood-starter).

<br>
## Data APIs

API is an acronym for Application Programming Interface. An API is the predefined instructions we have to interact with a data set, or application. Yelp has all sorts of interesting data about restaurants, their API has different ways that we can interact with (read) that data. The Google Maps API lets us look at different maps in different ways, using their API we can be detailed about what we want the map to look like.

Today, we will be working with an API that holds data. Here are some of the APIs our students enjoy working with while building projects at Turing:
- **PandaScore:** An API for esports data
- **New York Times:** Multiple APIs - from archives to movie reviews to top stories
- **COVID-19:** An API for data on the Coronavirus, data sourced from Johns Hopkins CSSE
- **IQ Air:** An API with historical, real-time and forecast air quality data

<br>
## Making API Requests

There are many different ways we can write code to make requests to an API. Today, we will use jQuery's `ajax` methods. Some syntax examples are provided below.

### GET

The `get` method is used to read or retrieve data from an API.

```javascript
$.get('/moods', function(moods) {
  // any code we want to run after we make the request
  // moods will be the variable that holds the array of moods
});
```

### POST

The `post` method is used to create a new entry in the database. Many APIs are read-only, but since we built the one we are using today, we will be able to post to it!

```javascript
$.post('/moods', function() {
  // any code we want to run after we make the request
  // because we are asking to add something to the database, not get something
    // we don't have a moods variable
});
```

<br>
## Pseudo-Coding

One of the greatest tools in a developers tool belt is **pseudo-coding**. Pseudo-coding is the secretly-complex skill of writing down what you want your code to do, without writing any code. It helps to think about your code as a series of instructions for a well-meaning but _very literal_ and kind of foolish robot.

🥜🍓[This fun video](https://www.youtube.com/watch?time_continue=9&v=FN2RM-CHkuI&feature=emb_logo) gives you an idea of the level of detail we have to get into our pseudo-code.

Let's write some pseudo-code for our app while we consider these questions:
- When do we need to ask the database to store an entry?
- When do we need to ask the database to give us all the entries?

<br>
## Implementation

<div class="try-it-new">
  <h2>Implement GET and POST</h2>
  <p>Let's hop over to the new starter kit and add some pseudo-code notes into our existing code.</p>
  <p>Then, let's work to implement those pieces!</p>
</div>

Here is a [completed Mood Tracker with API requests](https://glitch.com/edit/#!/tc-api-mood-complete) you can check out!
