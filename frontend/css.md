---
title: CSS
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 5
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Style HTML elements using CSS properties and values</li>
        <li>Add classes to specific HTML elements</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/css.png" alt="CSS icon">
      <h2 class="section-header">What is CSS?</h2>
      <p>CSS is a way to add style to HTML documents on the web. It's incredibly powerful!</p>
      <p>Let's take a look at some examples of CSS in action: <a target="blank" href="http://www.csszengarden.com">CSS Zen Garden</a>.</p>
      <p>You'll notice that every single one of these web pages has the exact same HTML - all the differences in layout and look are achieved through CSS!</p>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/colors.png" alt="Color wheel icon">
      <h2 class="section-header">CSS Rules</h2>
      <p>In CSS, we write a bunch of rules for how our document should look. The browser evaluates those rules and styles the page accordingly. A CSS rule is defined as follows:</p>
      <pre><code>h1 {
  color: red;
}</code></pre>
      <p>In the example above, the browser will set the color of any &lt;h1&gt; text elements to red. We can define multiple sets of properties and values in a given rule. Here's how we do that:</p>
      <pre><code>h1 {
  color: red;
  background: yellow;
  border: 2px solid black;
}</code></pre>
      <p>In order to style the entire background, you can use the body selector, like this:</p>
      <pre><code>body {
  background: yellow;
}</code></pre>
      <p>There are a lot of colors out there! Find a color that makes you happy <a target="_blank" href="http://colours.neilorangepeel.com">here</a>.</p>
      <div class="try-it">
        <h2>Try It: CSS Properties</h2>
        <p>Go back to your Compliment Generator. First, style the body of your page to have a background.</p>
        <p>Then, give your title heading a new color and new font-size.</p>
        <p>Next, look into any of the following attributes and choose a few to play around with on your images.</p>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/border">border</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">box-shadow</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity">opacity</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">height</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">margin</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">padding</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a></li>
        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a></li>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/dyPGeQK?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/labels.png" alt="Labels icon">
      <h2 class="section-header">CSS Classes</h2>
      <p>Right now, all of our elements are unique. We have one h1, one image, and one button.</p>
      <p>What would happen if we had multiple paragraphs that we wanted to style differently? Let's try this out.</p>
      <div class="try-it">
        <h2>Try It: Add Instruction Paragraph</h2>
        <p>Before we apply different styles to the same types of elements, we need to add a paragraph to our HTML.</p>
        <p>Underneath your h1, add a paragraph element that explains how to work your compliment generator.</p>
      </div>
      <p>We can use a <span class="vocab">class</span> to style this paragraph differently from our compliment paragraphs. Think of a class as a label. When we put a label on one thing but not another, it indicates that it's different in some way.</p>
      <p>Let's look at this example to see how we can differentiate between two different elements in code: </p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="css,result" data-user="turingtrycoding" data-slug-hash="mddgPxJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Class Example">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/mddgPxJ">
  CSS Class Example</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: CSS Classes</h2>
        <p>Go back to your Compliment Generator. Add a class to your instructions paragraph, and style it differently from the compliment paragraphs.</p>
        <p>Want more practice? Add a class to every one of your HTML elements and style them using the class instead of the element name.</p>
      </div>
    </section>
  </div>
</div>
<script>
  $( ".spicy-click" ).click(function(e) {
    $( e.target ).next( ".spicy-appear" ).slideToggle( "slow" );
  });
</script>
<script
src="https://code.jquery.com/jquery-3.2.1.min.js"
integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>
