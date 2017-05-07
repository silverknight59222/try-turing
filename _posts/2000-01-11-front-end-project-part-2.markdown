---
title: Vending Machine Project, Part 2
layout: post
date: 2000-01-11
permalink: vending-machine-project-part-2
program: front-end
tags: front-end
lessontype: fe-new
---

Now that we have a vending machine HTML and CSS set up, let's use JavaScript to make the machine interactive.

## Our Functionality!

At the top of our Vending Machine, we have an input field and a button to buy a snack.

![Where to Input Information](/images/machine-input.png)

Using JavaScript, we want to tell the computer that when the user clicks this button, we want to take the text they wrote in the input and either buy a snack with a matching Id or let them know we don't have a snack with that name.

## Adding an Event Listener

<div class="try-it">
  <h2>Try it: Adding an Event Listener</h2>
  
  <p>Looking back at what we did with in Event Section, go ahead and find the Buy Snacks button and cause an 'alert' to pop up that says 'button clicked!'.</p>
</div>

[Take a Peek at this CodePen if you Get Lost](http://codepen.io/team/turing/pen/xdGKKq)

## Adding an Event Listener

Now that we have an event listener, can we make the alert a little bit more interesting? We can use the input value to make the alert say 'You want to buy twix' or 'You want to buy candy' based on whatever the user typed in!

You can get the value of an input field by finding it on the page and asking it for it's value... How easy is that?

```js
  var inputField = document.getElementById('snack-input');
  inputField.value;
```

<div class="try-it">
  <h2>Try it: Adding an Event Listener</h2>
  
  <p>Change the alert so that it says 'Enjoy your '... and then whatever was entered in the input field!</p>
</div>

[Take a Peek at this CodePen if you Get Lost](http://codepen.io/team/turing/pen/Mmwgjy)

## Making the Vending Machine Talk

Instead of making an annoying alert pop up, can we make the vending machine talk to us instead?

Remember we can replace the text of any html node by using `textContent = 'New Content'`

<div class="try-it">
  <h2>Try it: Vending Machine Talk!</h2>
  
  <p>Replace the 'Buy Snacks!' message on the Vending Machine with 'Enjoy your '... whenever the user clicks Buy My Snack. </p>
</div>

[Take a Peek at this CodePen if you Get Lost](http://codepen.io/team/turing/pen/oWXvZq)

## Control Flow

No matter what the user enters, our vending machine tells them to enjoy it! That's confusing! What if the user enters an empty string? What if the user tries to buy a burrito but we don't have one in stock?

Our vending machine should look for a snack with an id that matches the input. 

In JavaScript, we can use something like `document.getElementById()` to search the page for anything with a matching id.

```js
  var happy = document.getElementById('happy');

  var logo = document.getElementById('logo');
```

If we find a snack that matches the user input, we should tell the user to enjoy it - else we should let the user know we don't have the treat....

Hrm... `if`... `else`...

That sounds familiar...

```
if(){
  
} else {
  
}
```

Remember back in the control flow section where we said things like:

```js
var count = 2

if(count < 2){
  
} else {
  
}
```

The statement `1 < 2` returns true or false... You can also give the if statement query selector. If that query selector 'exists', it is true or truthy. If you don't find anything for the query selector, it's false.

```js

if(document.getElementById('logo')){
  // this code will run if the logo is there
} else {
  // this code will run if the logo isn't there
}

```

<div class="try-it">
  <h2>Try it: Control Flow!</h2>
  
  <p>Using control flow, have the vending machine respond with 'Enjoy your '... if you find a snack with a matching id on the page. If you don't find a snack, respond with 'Sorry! I am out of that!' </p>

  <p>Can you add an `else if` statement to your process that checks to see if input was an empty string and respond differently to that? </p>

  <p>Can you think of other things that value could be that you might want to respond to in funny/interesting ways?</p>
</div>

[Take a Peek at this CodePen if you Get Lost](http://codepen.io/team/turing/pen/vmOBpQ)

## Selling the Treat!

At the bottom of our vending machine, we have an element named 'snack-purchases' where our item should go!

If we want to move an HTML element, we can use a method called `.appendChild`.

For example, if we wanted to move our logo to our navigation bar:

```js

var navBar = document.querySelector('nav');

var logo = document.querySelector('.logo');

navBar.appendChild(logo)

```

<div class="try-it">
  <h2>Try it: Moving Your Purchased Snack</h2>
  
  <p>In your if... else statment, if you found a snack, use appendChild to drop it in the purchases!</p>
</div>

### Conclusion

The experience that a user has on a website is often refered to as UX or User Experience, and the interface that they use is often called a UI.

It takes a surprising amount of thought and code to make a very simple UI or User Interface that is pleasant and easy to use.

Doing things like adding flash messages help the user understand what's going on - but you have to be careful that your messages are accurate or things get confusing quickly.

Does this vending machine behave the way you expect a vending machine to behave?

How easy is the vending machine to use? How could you make it easier?

<p data-height="300" data-theme-id="23788" data-slug-hash="gWpYKJ" data-default-tab="result" data-user="turing" data-embed-version="2" data-pen-title="vending machine - Project 6" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/gWpYKJ/">vending machine - Project 6</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
