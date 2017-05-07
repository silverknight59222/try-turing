---
title: Vending Machine Project Extensions
layout: post
date: 2000-01-12
permalink: vending-machine-project-part-3
program: front-end
tags: front-end
lessontype: fe-new
---

The following extensions are ways to improve the user interface and user experience (UI/UX), pick any of them and give them a try!

## Extension: Allow the User to Click a Snack!

Right now the user has to KNOW what the names of all the snacks are. Wouldn't it be nice if the user could click a snack and buy it?

You could do this by setting an event listener on the 'snack-collection' for any time the user clicks.

```js
var snackCollection = document.getElementById('snack-collection');


snackCollection.addEventListener('click', function(event){

});
```

Notice that there is a word or variable called 'event' here. Within your event listener you can do things with the event.

Try running this code:

```js
var snackCollection = document.getElementById('snack-collection');


snackCollection.addEventListener('click', function(event){
  alert('The Id is: ' + event.target.id)
  alert('The className is: ' + event.target.className)
});
```

<div class="try-it">
  <h2>Try it: Click to Buy</h2>
  
  <p>Using the tricks above and what you did in the last section, can you allow the user to click snacks? If the className of what they clicked is a snack, can you: </p>

  <ul>
    <li>Move the snack to the purchased bin</li>
    <li>Have the vending machine tell the user to 'Enjoy your '...</li>
    <li>Replace the text in the input field with the snack id</li>
  </ul>
</div>

## Extension: Click to Remove Purchased Snacks!

  That purchased bin sure is getting a lot of things in it. Wouldn't it be nice if we could take snacks out of it?
 
 <div class="try-it">
  <h2>Try it: Click to Remove</h2>
  
  <p>Read the extension above. Can you make it so that if you click a snack in the purchased bin, it gets removed from the page entirely?</p>

  <p>Hint: What is event.target? Is it the html element? Can you do things to it?</p>

  <p>Hint: Just like appendChild, there is a `remove` method you might be able to use...</p> 
</div>

## Extension: Shake Snacks Animation

Let's get things jiggling!

Notice that there is a little button that says 'Shake Snacks'. This button SHOULD make the snacks in the machine jiggle.

Remember that we can use `.classList.toggle('class-name')` in our JavaScript to toggle a class. 

Check out the CSS tab. There is a section called 'Animations!' - There is a class called `shake` that we can add to our snack collection div to start an animation.

```js
  document.getElementById('snack-collection').classList.toggle('shake');
```

Below that class - there is an animation.

We can call an animation with a css selector. 

`animation: jiggle 0.2s 2;` - to make it jiggle twice

`animation: jiggle 0.2s infinite;` - to make it jiggle forever

 <div class="try-it">
  <h2>Try it: Jiggling Animation</h2>
  
  <p> Set up an event listener so that clicking the Shake Snacks button toggles the shake class on snack-collection</p>

  <p>Can you make the jiggling really big?</p>

  <p>Can you make it infinite?</p>

  <p>Can you add any other css to make things more interesting?</p>
</div>

## Conclusion

We hope you enjoyed trying out some fun extensions! Take a look at our implementations if you're curious!

<p data-height="300" data-theme-id="23788" data-slug-hash="OmVLqJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="vending machine - Project Extensions" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/OmVLqJ/">vending machine - Project Extensions</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
