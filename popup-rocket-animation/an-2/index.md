---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Animating our Rocket

To animate your rocket, we will give you some code to start with, and some room for creativity! 

>You may want to keep the rolling ball repl.it open in another tab as a reference.

<div class="try-it-new">
  <h2>Animate!</h2>
  <p>Steps 1 and 2 do not have to be taken in order - you choose where you'd like to start!</p>
  <ol>
    <li>Inside of your <code class="try-it-code">.rocket</code> rule, declare an animation name, duration, timing function and delay.</li>
    <li>Outside of your <code class="try-it-code">.rocket</code> rule, write a keyframe. Use this code:<code class="try-it-code">to { transform: translate(0px, -450px) }</code> inside of the keyframe.</li>
  </ol>
  <p>After completing Steps 1 and 2, run the code. Is the animation running? If not - let's troubleshoot for typos or small errors; feel free to ask for help! If so - what is it doing, and what do you want to change about it?</p>
  <p>Want to check your solution against ours? <a href="https://repl.it/@turingschool/rocket-animation-solution#style.css">Check this one out.</a></p>
</div>

## Level Up

Below are a few options and some guidance on how you can take your animation to the next level!

>Disclaimer: These may not all scientifically represent exactly how rockets work...

### Change Directions
In addition to moving the rocket up with `translate()`, we can rotate the direction it's facing with `rotate()`. That code could look like:

```css
transform: translate(450px, -700px) rotate(55deg);
```

### Burn
Could you instruct the browser to change the color of individual pieces of the rocket as it flies through the sky, to make it look like it's burning?

_Hint: You'll need to write animations for the specific pieces of the rocket, and will need a new keyframe._

## Boosters
Could you get the wings (pretend they are boosters) to break off as the rocket leaves the page?
<br>

## Animations Summary

- The possibilities are endless!
- To create life-like animations, we'd need a lot more than we learned today - both CSS knowledge and application of some physics

<a href="../ext">Next Section: Extensions</a>
<br>
<a href="../wrap-up">Wrap Up</a>
