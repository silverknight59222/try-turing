---
title: Some More jQuery
layout: post
date: 2000-01-07
permalink: more-jquery
---

## Bringing It Together: jQuery and CSS Transitions Together

We're getting there, right? We know how add and remove classes to elements on the page based on user input. We also know how to smoothly move things between two states using CSS. In the example below, the class of `clicked` is either added or removed whenever the box is clicked.

Change some of the properties of the `.box` and `.clicked` selectors and observe the changes. 

<p data-height="300" data-theme-id="23788" data-slug-hash="xOVxxp" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/xOVxxp/">Flying Box</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

<div class="try-it">
<h2>Try It: Adding a Transition</h2>

<p>Add a transition property so that your color-changing heading takes two seconds.</p>
</div>

## Knowing Which Element We Clicked

Consider a situation where we have three boxes. When that particular box is clicked, we want to toggle a class. How do we know which box was clicked?

It turns out that when we add an event listener using jQuery, we get a special little variable called `this`. Lucky for us, `$(this)` is set to the box we clicked on.

We want each box to have a button inside of it. When the user clicks the button, it should rotate the entire box. (We're rotating the box with a CSS class called `.click` because we're super original.) Let's look at some code.

<p data-height="300" data-theme-id="23788" data-slug-hash="vKGYzo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/vKGYzo/">Rotating Buttons</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

This code _does not_ work the way we'd like. What we need to do is when the user clicks on a button. Go up and find the box that it lives in and add the class to _that_ element. We can try it like this:

<p data-height="300" data-theme-id="23788" data-slug-hash="YWqzJo" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/YWqzJo/">Rotating Boxes</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

You can see all of ways we can move around the DOM tree in [jQuery documentation](https://api.jquery.com/category/traversing/tree-traversal/).

<div class="try-it">
<h2>Try It: jQuery and Animations</h2>

<p>Right now, all of your headings change background color. Can you modify your jQuery so that only the specific heading that was clicked gets a background color?</p>
</div>