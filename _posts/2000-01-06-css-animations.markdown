

<blockquote>
  <p>CSS animations? What? I thought we already made stuff move with transitions just a few moments ago.</p>
  <footer>
     <cite>You, just now</cite>
  </footer>
</blockquote>

You're right. We did. Transitions are powerful because they're simple. The browser takes care of all of the hard work involved in getting from _A_ to _B_. We just tell it what properties we want to transition between and how long it should take. Optionally, we can give it a timing function as well.

The downside to CSS animations is that they don't give us any fine grain control. That's where animations come in. CSS animations allow us to give the browser a series of steps it should take.

Consider this incredibly mature example:

<p data-height="300" data-theme-id="23788" data-slug-hash="QwXBmr" data-default-tab="css,result" data-user="stevekinney" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/stevekinney/pen/QwXBmr/">QwXBmr</a> by Steve Kinney (<a href="http://codepen.io/stevekinney">@stevekinney</a>) on <a href="http://codepen.io">CodePen</a>.</p>

This animation doesn't just transition between to states. Those colorful shadows go through a series of steps and they go on forever.

## @keyframes

All of our fun transitons from earlier came built-in to the browser. When we're making animations, we have to do it by hand.

```css
@keyframes the-name-of-your-wonderful-animation {

  /* Our code will go here. */

}
```

Let's write our first animation. I'm going to call it "pizza" in an attempt to convey to you that the name isn't significant.

```css
@keyframes pizza {
  0% {
    background-color: red;
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    width: 200px;
    height: 200px;
  }
}
```

Once we've defined our animation, we can use it in our selectors. There are a number of animation properties, but we're only going to concern ourselves with a subset.

- `animation-name`: Which animation do we want to run?
- `animation-duration`: How long should it take the animation to complete?
- `animation-iteration-count`: How many times should it run. "infinite" is a valid option here.

<p data-height="300" data-theme-id="23788" data-slug-hash="MeyWOo" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/MeyWOo/">MeyWOo</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Stop and Think

Let's watch the animation for a bit. Then lets take good hard look about the CSS we wrote. What do you notice? Can we come up with a list of rules?

### Experiment Time

Modify the code above with additional properties. Here is that list of transformations form before. I thought it might be helpful:

- Rotation: `transform: rotate(180deg);` will flip the element upside down.
- Scaling: `transform: scale(110%);` will make the element bigger by 10%.
- Translating (moving): `translate: rotate(25px, 10px);` will move the element 25 pixels to the right and 10 pixels down.

**Fun Fact**: You can combine more than one transformation in the same statement. Here is an example:

<p data-height="300" data-theme-id="23788" data-slug-hash="mEPdpN" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/mEPdpN/">Multiple Transform Statements</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
