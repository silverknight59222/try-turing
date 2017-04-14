---
title: Vending Machine Project, Part 1
layout: post
date: 2000-01-10
permalink: vending-machine-project-part-1
program: front-end
tags: front-end
---

Congratulations! You know know a bit more about front-end engineering, including HTML, CSS, and JavaScript. Now it's time to put everything together in this paired project.

Both partners will [open this starting codepen](http://codepen.io/team/turing/pen/pPvEEB), and you'll work together to bounce ideas of of each other and be an extra pair of eyes when you are stuck.

Let's put everything we've learned together to create a little browser based vending machine!

### Fork the Project & Look Around

In your team, fork this codepen.

<p data-height="300" data-theme-id="23788" data-slug-hash="pPvEEB" data-default-tab="result" data-user="turing" data-embed-version="2" data-pen-title="vending machine - base" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/pPvEEB/">vending machine - base</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Take a quick tour of the code that is already available to you.

<div class="try-it">
  <h2>Try It: CSS Experiments</h2>

  <p>Open the CSS tab and look at some of the CSS that already exists. You'll see some properties that we haven't discussed yet being used: like padding, margin, position, etc. These properties control positioning elements on the page.</p>


  <p>Try commenting out a line of CSS at random, and see what it does.</p>

  <p>To comment a line out in CSS, wrap the line in <code>/* background: red */</code> If you are using a Mac, you can hit <code>cmd ?</code> on a line to auto comment it.</p>
</div>

### Put Snacks in the Machine

Now it's time to load up the machine with snacks!

You'll notice that there are 9 placeholder images where snacks would go.

```html
  <li>
    <img src="http://placehold.it/75x75" class="snack" />
  </li>
```

In order for our machine to work, we will need to do two things:

- Add a unique id to each `img` tag
- Replace the image link to another image that is 75px by 75px

#### Adding an Id

```html
  <li>
    <img id="twix" src="http://placehold.it/75x75" class="snack" />
  </li>
```

Some rules to keep in mind with ids:

- The `id` must be unique
- `ids` should be lowercase
- `ids` must be one word but can be seperated by `-` dashes
- `ids` must begin with a letter

#### Finding an Image

```html
  <li>
    <img id="twix" src="http://placehold.it/75x75" class="snack" />
  </li>
```

Now that we have a twix bar image, let's go out and find an image of the same size to replace our placeholder!

```html
  <li>
    <img id="twix" src="http://try.turing.io/images/snacks/twix.jpg" class="snack" />
  </li>
```

You can use any of our images:

Or go out and find images that are 75px by 75px!

Note: You can actually use Google's Image Search and give it a specific image size!

![turbo tax guides a user](/images/google-image-search.png)


Putting snacks in the machine

id = name of snack

rules on ids - dash separated, can't start with a number

Directions on getting images links that are 75 X 75

### Extension: Customize Your Colors

The top section of the CSS in the project has all of the colors for the vending machine. Spend a few minutes with your partner to change some of the colors.

Background Image?

### Conclusion

Feel free to check out the vending machine below to see another implementation!

<p data-height="600" data-theme-id="23788" data-slug-hash="jmEpqw" data-default-tab="result" data-user="turing" data-embed-version="2" data-pen-title="vending machine - Project 1" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/jmEpqw/">vending machine - Project 1</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>