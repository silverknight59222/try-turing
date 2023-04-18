---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Modifying the CSS
CSS allows us to "dress up" the content on our page.

## Tour the Existing CSS
- CSS allows us to target types of elements (ex: `h2`, `p`) and specific elements based on class name (ex: `card-title`)
- Once we’ve targeted an element, we can write rules for that element to follow. Rules can be things like _“the font-size of this element should be 20px”_ or _“the maximum width of this element should be 70% of the width of the page”_

### Explore to Learn
After you complete each task, click `Run` and observe the changes in the browser. If you like the change, keep it!
- On line 2 of the `style.css` file, change `#023047` to `darkgreen`
- On line 8, change `#023047` to `purple`
- On line 12, change `70%` to `40%`
- On line 18, change `30px` to `50px`
You will notice that we can use both a hex code or a color name as values for color properties. There are only <a target="blank" href="https://htmlcolorcodes.com/color-names/">140 color names</a> supported by modern browsers. Hex codes are 6-symbol codes made up of numbers and letters to represent a very specific color value. You can read more about it hex codes and how they translate to a color value <a target="blank" href="https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple">in this article</a>.

<!-- ### Add a New CSS Rule
When the page loads, we probably don’t want the definitions to be visible yet. To change this, add <code>display: none;</code> to the last line of the <code>.card-text</code> rules. Now, when we run our code, we can no longer see the definitions!

The previous change made the definitions for our terms disappear, but we sometimes want them to show on the screen. To do this, we can create another CSS rule to <em>show</em> the text and <em>rotate</em> the button. We will only add that class to the element when we want it to show! Add this code block at the very bottom of your CSS file. It won’t do anything yet, but after we write some JavaScript, you will see how it works.

```css
.show-text .card-text {
  display: block;
}

.show-text .card-btn {
  transform: rotate(180deg);
}
``` -->

<iframe height="300" style="width: 100%;" scrolling="no" title="Try Coding x Turing School" src="https://codepen.io/brandifg/embed/MWPeOQZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/brandifg/pen/MWPeOQZ">
  Try Coding x Turing School</a> by Brandi Gehrke (<a href="https://codepen.io/brandifg">@brandifg</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br>

<div class="try-it-new">
  <h2>Modify the Existing Code</h2>
  <p>Now that we can see how CSS impacts the visual elements of a webpage, let's continue in this process of "making it our own".</p>
  <ul>
    <li>Play around with sizes or colors until you are satisfied with your page.</li>
    <li>It's a good idea to use <a target="blank" href="https://coolors.co/palettes/trending">popular color palettes</a> until you feel more confident choosing colors that look good together.</li>
    <li>You may be wondering what other properties can be defined in the CSS. Developers use tools like <a target="blank" href="https://css-tricks.com/almanac/properties/">CSS Tricks</a> and <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference">MDN</a> to continue exploring and building their toolkit. If you have extra time, check out these resources and try to implement something new into your project!</li>
  </ul>
</div>


## CSS Summary

- CSS allows us to target an element and write specific rules for it to follow.
- Based on the type of rule, CSS will expect different values (ex: `darkgreen` or a hex code for a color and `10px` or `50%` for a measurement).
- There are many types of rules we can write; with practice, we become familiar with more but don't need to memorize them all.

### Up Next:
- [Wrap-Up](../wrap-up)
- [Closing](../closing)
