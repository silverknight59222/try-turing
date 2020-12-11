---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Animations - Overview

In addition to dressing up our page, CSS can also give directions to the browser to animate elements. Animations written in code are preferable over GIFs or videos because they will generally load quicker.

> Note: JavaScript can also animate elements, but we won't cover that today.

Some great examples of CSS animations...
- [Button effects](https://codepen.io/nikhil8krishnan/details/PRZygW/)
- [Add file](https://codepen.io/aaroniker/full/aPJbJz)
- [Store drawing/animation](https://codepen.io/marianab/full/XPOQaR/)
- [Spinning card](https://codepen.io/ivorjetski/full/ExaKmjw)

For this section, we will take a break from our rocket and learn about animations with a slightly less complex setup.

## Animation Properties

To write an animation, we have to give a set of very clear direction to the browser about _how_ to move the element in question.

- `animation-name`: what do we want to call this? Typically we use a verb and noun: (ex: `movePaw`, `rollBall`)
- `animation-duration`: how long should the entire animation take to complete? We can provide seconds or milliseconds (ex: `2s`, `300ms`).
- `animation-timing-function`: should the movement happen at the same rate (linear)? Or, go faster at the start, and slow at the end? CSS provides `linear`, `ease-out`, `ease-in` and `ease-in-out` to control when the change happens during the duration.  You can read more about them [here](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing). _This is not required - will default to linear if we don't specify._
- `animation-delay`: should the animation start right when the page loads, or wait? Similar to `duration`, we can provide seconds or milliseconds. _This is not required - will default to 0 if we don't specify._

The code snippet that follows gives an example of the animation rules for an element with the class of `ball`. We can see this code live, in action, [in this repl.it](https://repl.it/@turingschool/RollBall-Animation-Starter#style.css).

```css
.ball {
    animation-name: rollBall;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-delay: 1s;
}
```

>Note: There is a shorthand that you may see used in examples on the internet. We aren't using it in our examples here so that you can see exactly what value belongs to what property. But if you want to explore the shorthand - go for it!

## Keyframes

Providing all this information to an element alone, isn't enough. We also have to write directions for the specific animation - we've given the constraints of _how_ to change, but _what_ do we want to change about the element?

**Keyframes** help us define the _what_:

```css
.ball {
    animation-name: rollBall;
    /* other code from above... */
}

@keyframes rollBall {
    to { margin-left: 75% }
}
```

<div class="try-it-new">
    <h2>Modify the Existing Code</h2>
    <p>Now that we can see what's required to write an animation, let's tweak the code to gain some comfort with it.</p>
    <ul>
        <li>Change the name of the animation. Make sure to change it in <em>both</em> places so that it still works.</li>
        <li>Change the duration and/or delay to your liking!</li>
        <li>The ball currently "eases out" - try changing that value to <code class="try-it-code">ease-in</code> and <code class="try-it-code">linear</code>. Observe how they behave and select the one you like best.</li>
        <li>Curious about how to get the ball to stay put after it's rolled to the right side of the screen? Add one more line of code to the <code class="try-it-code">.ball</code> rule: <code class="try-it-code">animation-fill-mode: forwards;</code></li>
    </ul>
    <p><em><span aria-role="img" alt="Shiny star enoji">🌟</span> AGAIN: we are still just exploring! It's unlikely you feel comfortable or fluent with these concepts and syntax; that's normal.</em></p>
</div>

## Animations Summary

- CSS allows us to write directions for a browser to animate an element
- We need to write instructions for both the _what_ and the _how_
- Reminder: This stuff gets really complex! We are only scratching the surface with some foundational topics today.

<a href="../an-2">Next Section: Animating our Rocket</a>
