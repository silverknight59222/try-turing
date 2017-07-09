---
title: Vending Machine Project, Part 1
layout: post
date: 2000-01-10
permalink: vending-machine-project-part-1
program: front-end
tags: front-end
lessontype: fe-new
---

Congratulations! You know know a bit more about front-end engineering, including HTML, CSS, and JavaScript. Now it's time to put everything together in this paired project.

Both partners will fork the base code for the vending machine project and you'll work together to bounce ideas of of each other and be an extra pair of eyes when you are stuck.

Let's put everything we've learned together to create a little browser based vending machine!

### Fork the Project & Look Around

In your team, fork this codepen. You can do that by clicking "Edit on Codepen", then clicking "Fork". 

<p data-height="378" data-theme-id="0" data-slug-hash="NgBWML" data-default-tab="html,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Coding: Vending Machine Project - Base" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/NgBWML/">Try Coding: Vending Machine Project - Base</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Take a quick tour of the code that is already available to you.

<div class="try-it">
  <h2>Try It: CSS Experiments</h2>

  <p>Open the CSS tab and look at some of the CSS that already exists. You'll see some properties that we haven't discussed yet being used: like padding, margin, etc. These properties control positioning elements on the page.</p>

  <p>Try commenting out a line of CSS at random, and see what it does.</p>

  <p>To comment a line out in CSS, wrap the line like this: <br> <br>

  <code>/* background: red */</code> <br><br>

  If you are using a Mac, you can hit <code>cmd ?</code> on a line to auto comment it.</p>
</div>

### Put Snacks in the Machine

Now it's time to load up the machine with snacks!

You'll notice that there are 9 placeholder images where snacks would go.

```html
  <li>
    <img src="http://placehold.it/75x75" class="snack" />
  </li>
```

In order for our machine to work, we will need to do two things: replace the image src attribute string, and add an ID to that element. Follow the instructions below. 

#### Finding an Image

Let's go out and find an image of the same size to replace our placeholder! 

```html
  <li>
    <img src="http://try.turing.io/images/snacks/twix.jpg" class="snack" />
  </li>
```

You can use any of these images:

- [http://try.turing.io/images/snacks/twix.jpg](http://try.turing.io/images/snacks/twix.jpg)
- [http://try.turing.io/images/snacks/chex.JPG](http://try.turing.io/images/snacks/chex.JPG)
- [http://try.turing.io/images/snacks/cookies.jpg](http://try.turing.io/images/snacks/cookies.jpg)
- [http://try.turing.io/images/snacks/dorito.JPG](http://try.turing.io/images/snacks/dorito.JPG)
- [http://try.turing.io/images/snacks/jiff.JPG](http://try.turing.io/images/snacks/jiff.JPG)
- [http://try.turing.io/images/snacks/mac.JPG](http://try.turing.io/images/snacks/mac.JPG)
- [http://try.turing.io/images/snacks/oreos.jpeg](http://try.turing.io/images/snacks/oreos.jpeg)
- [http://try.turing.io/images/snacks/pretzel.JPG](http://try.turing.io/images/snacks/pretzel.JPG)
- [http://try.turing.io/images/snacks/bbq.jpg](http://try.turing.io/images/snacks/bbq.jpg)

Or go out and find images that are 75px by 75px!

Note: You can actually use Google's Image Search and give it a specific image size! Make sure you click on "Tools" in order to see all of these search options. 

![How to use google image search](/images/google-image-search.png)


#### Adding an ID

Once you have all nine of your images, add a unique ID to each `img` tag. For example, if you have twix in your vending machine, add `id="twix"` to that `img` element.

```html
  <li>
    <img id="twix" src="http://try.turing.io/images/snacks/twix.jpg" class="snack" />
  </li>
```

Some rules to keep in mind with ids:

- The `id` must be unique
- `ids` should be lowercase
- `ids` must be one word but can be seperated by `-` dashes
- `ids` must begin with a letter

### Optional: Customize Your Colors

Spend a few minutes with your partner to change some of the colors. Any hex value (for example: #1ab58f) represents a color that can be changed. Hex values can be comprised any number 0-9 and any letter a-f. 

Did you know you can set a background image? And set it to tile?

Check out [this tutorial](https://css-tricks.com/almanac/properties/b/background-image/) and see if you can add a background image to your machine!

### Conclusion

Feel free to check out the vending machine below to see an implementation if you're stuck!

<p data-height="363" data-theme-id="0" data-slug-hash="eRjxNR" data-default-tab="html,result" data-user="rachelwarbelow" data-embed-version="2" data-pen-title="Try Coding: Vending Machine Project - Snacks Loaded" class="codepen">See the Pen <a href="https://codepen.io/rachelwarbelow/pen/eRjxNR/">Try Coding: Vending Machine Project - Snacks Loaded</a> by Rachel Warbelow (<a href="https://codepen.io/rachelwarbelow">@rachelwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
