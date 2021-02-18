---
layout: lesson
---

# Workshop 3: Front-End Engineering

<a href="../">Back to Series Page</a>

## What is Front-End Engineering?

The **Front-End** is the part of the application that users see, touch, and interact with.

When we're talking about web development, the Front-End is the part of the code base that takes care of rendering the user interface in the web browser.

Over the last decade, the web has evolved from a platform that served static web pages with content to a platform that provides rich, interactive experiences to users.

## What Makes Front-End Engineering Interesting + Challenging?

### It Allows us to Bring Objects into the Virtual World

<p data-height="500" data-theme-id="light" data-slug-hash="WNGWmBp" data-default-tab="result" data-user="flaviohblima" data-embed-version="2" data-pen-title="Not a fan" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/flaviohblima/pen/WNGWmBp">Not a Fan</a> by flaviobhlima (<a href="http://codepen.io/flaviohblima">@flaviohblima</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### It Presents Logical Challenges

<p data-height="500" data-theme-id="light" data-slug-hash="JjRGQPY" data-default-tab="result" data-user="jakealbaugh" data-embed-version="2" data-pen-title="Cheap AI Chess!" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/jakealbaugh/pen/JjRGQPY">Cheap AI Chess!</a> by jakealbaugh (<a href="http://codepen.io/jakealbaugh">@jakealbaugh</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### It Can Give an Interface to Collaborate and Communicate

<img src="{{ site.url }}/assets/images/fe-example.png" alt="Project Management Dashboard screenshot">

[See the Project Management Dashboard project here](https://codepen.io/aybukeceylan/full/OJRNbZp)
<br><br>

## You Don't Have to Be a Designer

Front-End developers often work with designers, who provide detailed comps like the one that follows. These comps allow a Front-End developer to focus on managing the complicated interactions of the site.

<img class="small-img" src="{{ site.url }}/assets/images/comp.jpg" alt="To Do list application">
<img class="small-img" src="{{ site.url }}/assets/images/comp-details.png" alt="One section of To Do List application, arrows pointing to each section to notate size and colors.">

There's a common misconception that the Front-End is only about colors, fonts, and having a good eye. However, this type of development is more focused on making data useful, accessible, and interactive. The code we write in JavaScript and other frameworks does a lot of heavy logical lifting.
<br><br>

## What languages are used on the Front-End?

The Front-End of the web is based on three major programming languages:

1. **HTML**: HyperText Markup Language (HTML) defines the structure and semantics of web pages on the web.
2. **CSS**: Cascading Style Sheets (CSS) sets the look and style of a web page. CSS provides style to the structure provided by HTML.
3. **JavaScript**: JavaScript allows us to define interaction in our pages. When a user clicks a button, something _happens_ because JavaScript code instructed the browser to do something when that button was clicked. 

>Fun Fact: Java is the name of a Back-End programming language, but it has nothing to do with JavaScript! We like to say that Java is to JavaScript as ham is to hamster.

It is common to write the code for each language it its own file, then "link" together all three files so the communicate and work together to create the final product.

Below are code examples of what each language looks like. We won't go into too much detail, but it gives you a feel for both the range of syntax and what each language can do.

### HTML Only

<p class="codepen" data-height="285" data-theme-id="light" data-default-tab="html,result" data-user="turing-trycoding" data-slug-hash="zYoYzax" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML only example">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/zYoYzax">
  HTML only example</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### HTML and CSS

<p class="codepen" data-height="285" data-theme-id="light" data-default-tab="css,result" data-user="turing-trycoding" data-slug-hash="bGBGRjx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML + CSS example">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/bGBGRjx">
  HTML + CSS example</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### HTML, CSS and JavaScript

<p class="codepen" data-height="285" data-theme-id="light" data-default-tab="js,result" data-user="turing-trycoding" data-slug-hash="RwowZoJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML + CSS + JS example">
  <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/RwowZoJ">
  HTML + CSS + JS example</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br><br>

## Frameworks

Front-End **frameworks** can be defined just as Back-End frameworks are - they are built to work in conjuction with a specific language. They provide building blocks and organizational structures that make it easier for developers to start an app, and maintain an app as it gets very large in size.

Some of the popular frameworks that are currently powering widely used apps are: React, Vue, Svelte and Angular. **React** had been the leading framework in the industry for the last several years. It was created by Facebook, and is used on Facebook's Front-End, in addition to being used for Airbnb, Netflix and Reddit.

Because of it's ongoing popularity and demand in the industry, our Front-End students spend several months of their time with us learning React, and building apps with it.
<br>

## Talking to the Back-End

A static site - one that won't store any information about you - is only useful up to a point. Most sites that are useful to us (we typically refer to these as _appliactions_) present information to the user on the Front-End, and also talk to the Back-End for the user. This communication allows users to log in to accounts, post status updates, upload photos, send messages, etc.

### Making a Request

We won't practice making requests to a server today, but let's look at an example and talk through it together:

```js
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(response => response.json())
  .then(data => console.log(data));
```

The three lines of code above each have a specific job:
1. Go _get_ whatever is available at the URL provided
2. Convert the response that is sent into a form that the Front-End code can read
3. Print out the data

Let's run the code in the browser a few times and see what the responses are!

### Receiving a Response

In the previous example, you may have noticed that the response we got was different to read - various colors, some `{}` and `[]`. Those are things you'll get used to as you see more responses. However, the responses do look slightly different in the "Dev Tools" of the browser than they would in code. 

Below is an image of the JSON, or data, that is sent back in a similar response. We will see some special characters, color coding, etc. but it looks more like _code_. We see the use of indentation to show that some pieces of info belong _inside_ of other pieces. 

<img class="med-img" src="{{ site.url }}/assets/images/json.png" alt="Screenshot of JSON">

Front-End developers regularly get pieces of JSON like the one above (usually they are much larger though!). They write code that goes through all the data and instructs the browser which pieces of data to display.
<br>

## Front-End and Series Wrap Up

You have heard a LOT of information about what Front-End code is responsible for and may have learned some new buzzwords. Hopefully this workshop gave you an idea of what is possible and maybe even inspired you to build something! 

If you are interested in coding, join us for a [full day workshop](https://www.eventbrite.com/o/turing-school-of-software-amp-design-9895674202) where we'll get our hands on the keyboard and write some code in Ruby! 

If you already know you are interested in coding and now want to learn more about Turing, we recommend reading about about (the FAQ page has a lot of info!) at [turing.io](https://turing.io/). Have more specific questions? Reach out to Chelsea at chelsea@turing.io.



