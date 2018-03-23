---
title: JavaScript HTML Interaction
layout: post
date: 2015-01-05
permalink: javascript-html-interaction
program: teachers
tags: teachers
---

Now that we know what Strings are, let's use JavaScript to modify the HTML on the page. Before we do this, save your old work and create a new CodePen so that you have artifacts along the way. 

### Setting Up the HTML

In order for JavaScript to interact with HTML, we need some HTML on the page! Go ahead and paste the following code into your HTML editor tab:


```html
<h1>Welcome, guests!</h1>
```

### Changing the Text of an HTML Element

In the JavaScript editor tab, type out the following line of code:

```js
document.querySelector('h1').innerText = 'Welcome, teachers!'
```

Let's take a second to talk about what is happening.

<div class="try-it">
<h2>Try It: User Input on the Page</h2>

<p>Add JavaScript code that prompts the user to enter their name. Then, modify your "document.querySelector..." line to make it so that the page says "Welcome, [insert user name]."</p>
</div>

### Changing the Inner HTML Code

We can also use JavaScript to add or change HTML code. This means that we could add any of the elements to the page that we've already talked about: links, headers, paragraphs, lists, buttons, etc.

First, add an empty `div` to your HTML. It should now look like this:

```html
<h1>Welcome, guests!</h1>

<div>
  
</div>
```

Now, using JavaScript, we can append HTML elements inside of that div:

```js
document.querySelector('div').innerHTML = '<li>This is the first list item!</li>'
```

Now, copy that line a few times and change the text of the `li`. The code will look something like this:

```js
document.querySelector('div').innerHTML = '<li>This is the first list item!</li>'
document.querySelector('div').innerHTML = '<li>This is the second list item!</li>'
document.querySelector('div').innerHTML = '<li>This is the third list item!</li>'
```

What happens? Can you figure out why? 

<div class="try-it">
<h2>Try It: Changing the HTML</h2>

<p>First, erase everything you have in your HTML and JavaScript tabs. We're starting fresh.</p>
<p>Next, add an empty div to the HTML.</p>
<p>Finally, add JavaScript code that inserts an h1 heading into the div. You can choose the text of your heading.</p>
</div>

### Appending HTML elements

In the last example, we saw that if we tried to add multiple `li` elements, only the last one was added. That's because we were replacing the entire HTML each time. 

We can change this behavior by using the `+=` operator. Paste the following code into the JavaScript text editor:

```js
document.querySelector('div').innerHTML += '<li>This is the first list item!</li>'
document.querySelector('div').innerHTML += '<li>This is the second list item!</li>'
document.querySelector('div').innerHTML += '<li>This is the third list item!</li>'
```

What happened, and why? Let's take a minute to discuss how this works.


<div class="try-it">
<h2>Try It: Changing the HTML</h2>

<p>First, erase everything you have in your HTML and JavaScript tabs. We're starting fresh (again!)</p>
<p>Next, add an empty div to the HTML.</p>
<p>Finally, add JavaScript code that inserts three new paragraphs into the div. The content of the paragraphs is your choice.</p>
</div>

