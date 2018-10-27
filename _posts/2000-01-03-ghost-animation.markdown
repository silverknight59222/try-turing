---
title: Ghost Animation
layout: post
date: 2000-01-03
permalink: ghost-animation
program: front-end
tags: front-end
lessontype: fe-new
---

#### Animation with Keyframes

Keyframes allow us to define a specific set of styles over the course of a time period. For example, if you said you wanted an animation to last 10 seconds, you could then define what you want the element to do at specific percents through the time period. 

There are two parts to this process: First, you must define the keyframes. [Mozilla Keyframes Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

Then, you need to define the animation property for a specific element. [Mozilla Animation Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

This is what they look like when used in conjunction: 

```css
.ghost-body {
  animation: camoflauge 5s linear infinite;
}

@keyframes camoflauge {
  50% {
    background-color: orange;
  }
}
```


### Using Keyframes to Add Horizontal Movement

Can you use what you know about keyframes and the animation property to make your ghost move across the page? 

Hint: You'll need to use the `transform: translate()` property. Be sure to add two values for pixels inside of the parentheses. 

<img src="/images/ghost-simple-move.gif" alt="simple move ghost" width="200">

### Multi-directional Moving Ghost

Now, let's get more complicated. Right now, we have one keyframe at 50%. Can you make several keyframe points so that the ghost looks like it is floating across the screen while also moving slightly up and down? 

<img src="/images/ghost-complex-move.gif" alt="multi-directional moving ghost" width="200">

### Ghost with Wiggling Flaps

Define another keyframe called `wiggle` and make it so that the `border-radius` on the ghost flaps change in some way at 25% and 75%. Be sure to add `animation: wiggle 3s linear infinite` to your `.flap` styles. 

<img src="/images/ghost-wiggle-flaps.gif" alt="wiggle flaps ghost" width="200">

### Ghost with Eyes

Add two `div`s within the ghost-body div and give them a class of `.eyeball`. Then style the eyeballs to have a height, width, border-radius, margin, and display inline-block. Then add `text-align: center` to your `.ghost-body` styles in order to center the eyeballs. Note: Centering is beyond what we're doing in today's class, so text-align is a way we'll cheat to get the eyeballs to appear in the middle of the ghost body. 

<img src="/images/ghost-eyes.gif" alt="ghost with eyes" width="200">

### Blinking Ghost

Create another keyframe, `blink`, that changes the height of the eyeballs. 

<img src="/images/ghost-blinking.gif" alt="ghost with eyes" width="200">

### Ghost Shadow

Add a div below the ghost-body div and give it height, width, background-color, and a border-radius. It should automatically float if it's inside of the ghost-container div. 

<img src="/images/ghost-shadow.gif" alt="ghost with shadow" width="200">


### Finished Product

Take a look at our example below if you're stuck! 

<p data-height="378" data-theme-id="0" data-slug-hash="yRRXjx" data-default-tab="css,result" data-user="rwarbelow" data-pen-title="Rachel's Ghost Playground - Finished" class="codepen">See the Pen <a href="https://codepen.io/rwarbelow/pen/yRRXjx/">Rachel's Ghost Playground - Finished</a> by Rachel Warbelow (<a href="https://codepen.io/rwarbelow">@rwarbelow</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
