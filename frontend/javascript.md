---
title: Intro to JavaScript
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 3
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Create variables that represent HTML elements</li>
        <li>Add HTML elements to the page using JavaScript</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/braces.png" alt="HTML icon">
      <h2 class="section-header">Programming is Challenging (and fun!)</h2>
      <p>In this next section, we'll dive into the fundamentals of JavaScript. <b>It will be hard.</b></p>
      <p>That said, it's entirely possible to learn and get better at! It's also 100% ok to not know everything.</p>
      <div class="try-it">
        <h2>Try It: Experienced Developer Tweets</h2>
        <p>Take a moment to look through some <a target="blank "href="https://twitter.com/i/events/835969005668220930?lang=en">tweets from experienced developers</a>.</p>
        <ol>
          <li>With the person next to you, discuss: what themes do you notice?</li>
          <li>When was the last time you failed at something? How did you react? What did you do?</li>
          <li>What is something you used to struggle with but now feel comfortable with?</li>
        </ol>
      </div>
      <h4>Traits of Successful Developers</h4>
      <ul>
        <li>Curiosity</li>
        <li>Questioning</li>
        <li>Resourcefulness</li>
        <li>Teamwork</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/braces.png" alt="HTML icon">
      <h2 class="section-header">What is JavaScript?</h2>
      <p>JavaScript is a language that allows us to interact with a webpage. With JavaScript, we can create logic, just as we can in Ruby. JavaScript lets us declare variables, functions, and more.</p>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/box.png" alt="Computer mouse icon">
      <h2 class="section-header">JavaScript Variables</h2>
      <p>In JavaScript, we declare variables using the <span class="vocab">var</span> keyword. This tells JavaScript that we're about to make a variable.</p>
      <p>A variable is like a box with a label on it. You can put something in the box, label it, and be able to reference that thing later by its label.</p>
      <p>Variables can be strings (text in between quotation marks), numbers, HTML elements, among many other things. Here are a few examples of JavaScript variables:</p>
      <pre><code>var age = 12;
var school = 'Turing School of Software and Design';
var firstName = 'Rachel';</code></pre>
      <h3>Why variables?</h3>
      <p>Why would we use variables? Well, since JavaScript is in charge of user interactions, we may want to hold a onto a piece of information for later use. For example, when the user clicks a button, we might want the text of a heading to change whenever the user clicks a button. Where do we keep that new text before the user clicks? In a variable! We'll see this in action a little later.</p>
      <div class="try-it">
        <h2>Try It: Creating Variables</h2>
        <p>In the JavaScript tab of your Compliment Generator codepen, create a variable for <code>greeting</code>. The variable should contain the text "This is the secret text!"</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/html.png" alt="Computer mouse icon">
      <h2 class="section-header">Interacting with HTML</h2>
      <p>Variables can also represent parts of the HTML that we've written. For example, if we wanted a variable to represent the h1 heading at the top of our page, we'd need to do two things:</p>
      <ol>
        <li>Add a class to the h1 heading in the HTML.</li>
        <li>Use the JavaScript method <code>querySelector</code> to go look for that element using the <code>.</code> symbol to indicate we're looking for an class.</li>
      </ol>
      <p>Here's how that looks in practice:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="LYYvYVE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LYYvYVE">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/LYYvYVE">
  LYYvYVE</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>This isn't <b>that</b> cool, but it gets cooler when we use JavaScript to interact with those HTML elements that we've saved to variables. Let's look at this example:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="mddgdOW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/mddgdOW">
  JavaScript Variable Interaction</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Changing Text</h2>
        <ol>
          <li>Add a class of <b>heading</b> to the &lt;h1&gt; in your HTML.</li>
          <li>In your JavaScript tab, use <b>querySelector</b> to find that class.</li>
          <li>Use <b>innerText</b> to change the text of that heading.</li>
        </ol>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/XWWQWML?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/button.png" alt="Button icon">
      <h2 class="section-header">Event Listeners</h2>
      <p>Imagine that you've just ordered food from Grubhub and are waiting for it to arrive. When the doorbell rings, you'll stand up from the couch, walk over to the door, open it, and take your food. Guess what? You programmed yourself with an <span class="vocab">event listener</span>.</p>
      <p>In JavaScript, an event listener is a way to set up code to run <b>only</b> when a very specific thing happens. You want to change the color of something when the mouse is in a specific place? Great! That's an event listener -- you'll tell the code to <b>listen</b> for the mouse to be on a specific element on the page, then run the code that changes the color.</p>
      <p>Let's look at this example of an event listener and talk through the pieces:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="OJJGJGw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 2">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/OJJGJGw">
  JavaScript Variable Interaction, Part 2</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>In this case, we've used JavaScript to grab ahold of the heading in the HTML, then added a <b>mouseover</b> event listener to that heading. Now, the text will only change when the mouse goes over the heading since it's wrapped up inside the event listener.</p>
      <div class="try-it">
        <h2>Try It: Let's Break Things!</h2>
        <p>One of the best ways to figure out what exactly is happening in code is by changing things to see what happens. What parts of the Javascript and HTML are connected? What things are arbitrary?</p>
        <p>Together, let's make a fork of the example above and try changing a few things. Your instructor will guide you in testing out some changes, but we'll start with this one in your JavaScript: <i>What would break if you change <code>#banner-text</code> to <code>#pageHeader</code>?</i></p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Event Listeners</h2>
        <p>Go back to your Compliment Generator. Add a <b>mouseover</b> event listener to make it so that the text of the heading only changes if the user's mouse passes over the heading.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/ZEEZYKW?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/rabbit.png" alt="Rabbit in hat icon">
      <h2 class="section-header">Dynamically Adding HTML with JavaScript</h2>
      <p>JavaScript is also used to add brand new HTML elements to the page. On some social media sites, once you finish scrolling to the bottom of the page, you'll see a button that says <b>See More</b>. When you click it, new things magically show up! How does this happen?</p>
      <p>Let's look at the example below in pairs. <b>Click on "Edit on Codepen" to open it in a new window. Seeing the full code will help you start to recognize JS patterns.</b> With your neighbor, walk through the code and see how much you can understand on your own. Then, we'll come back together and discuss.</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="NWPWXNb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 3 (simplified)">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/NWPWXNb">
  JavaScript Variable Interaction, Part 3 (simplified)</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Adding HTML Dynamically</h2>
        <p>Go back to your Compliment Generator and follow the steps below in your HTML.</p>
        <ol>
          <li>Remove the compliment paragraph.</li>
          <li>Add a class to your button.</li>
          <li>Add a class to your section.</li>
        </ol>
        <p>In your JavaScript, complete these steps <b>under</b> your already written code:</p>
        <ol>
          <li>Create a variable for the button using querySelector and the class you chose.</li>
          <li>Create a variable for the section using querySelector and the class you chose.</li>
          <li>Create a click event listener for the button.</li>
          <li>Inside of the event listener, create an empty paragraph.</li>
          <li>Add compliment text to that empty paragraph.</li>
          <li>Use appendChild to insert the paragraph to your compliment section.</li>
        </ol>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/KKwKZqy?editors=1010">this example</a>.</p>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <p>Right now, you're only adding a paragraph when the user clicks. Can you add a <b>heading</b> that says "Here is your compliment!" and an <b>image</b> (your choice) as well?</p>
            <p>Look at the example below for help.</p>
            <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="RwwONZY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 3">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/RwwONZY">
  JavaScript Variable Interaction, Part 3</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
          </div>
        </div>
      </div>
    </section>
    <hr>
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
