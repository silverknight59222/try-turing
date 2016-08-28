

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
@keyframes name-of-animation {

  /* Our code will go here. */

}
```

Let's write our first animation. I'm going to call it "big-twist" in an attempt to convey to you that the name isn't significant.

```html
<div></div>
```

```css
div {
  height: 50px;
  width: 50px;
  background-color: green;
  animation: big-twist 2s infinite;
}

@keyframes big-twist {
  0% {
    border: 5px solid orange;
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    width: 200px;
    height: 200px;
    background-color: purple;
  }
}
```

Once we've defined our animation, we can use it in our selectors. There are a number of animation properties, but let's just keep it simple and look at the ones we used: `animation: name duration times`

<div class="try-it">
<h2>Try It: Animations</h2>

<p>Modify the code above with additional properties. Here is that list of transformations form before. I thought it might be helpful:</p>

<li>Rotation: `transform: rotate(180deg);` will flip the element upside down.</li>
<li>Scaling: `transform: scale(5);` will make the element bigger by a factor of 5.</li>
<li>Translating (moving): `transform: translate(25px, 10px);` will move the element 25 pixels to the right and 10 pixels down.</li>
</div>

**Fun Fact**: You can combine more than one transformation in the same statement. Here is an example:

<p data-height="300" data-theme-id="23788" data-slug-hash="mEPdpN" data-default-tab="css,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/mEPdpN/">Multiple Transform Statements</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
