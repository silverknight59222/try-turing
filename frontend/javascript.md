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
        <li>Use an if statement to check for user input</li>
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
      <p>Variables can be strings (text in between quotation marks), numbers, HTML elements, among many other things. Here are a few examples of JavaScript variables:</p>
      <pre><code>var age = 12;
var school = 'Turing School of Software and Design;
var firstName = 'Rachel';</code></pre>
      <div class="try-it">
        <h2>Try It: Creating Variables</h2>
        <p>In your JavaScript tab, create a variable for <code>greeting</code>. The variable should contain the text "Do you need a compliment?"</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/html.png" alt="Computer mouse icon">
      <h2 class="section-header">Interacting with HTML</h2>
      <p>Variables can also represent parts of the HTML that we've written. For example, if we wanted a variable to represent the h1 heading at the top of our page, we'd need to do two things:</p>
      <ol>
        <li>Add an ID to the h1 heading in the HTML.</li>
        <li>Use the JavaScript method <code>querySelector</code> to go look for that element using the <code>#</code> symbol to indicate we're looking for an ID.</li>
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
        <p>Use an ID in your HTML and querySelector in your JavaScript to change the text of your heading for your compliment page.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/XWWQWML?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/button.png" alt="Button icon">
      <h2 class="section-header">Event Listeners</h2>
      <p>Imagine that you've just ordered food from Grubhub and are waiting for it to arrive. When the doorbell rings, you'll stand up from the couch, walk over to the door, open it, and take your food. Guess what? You programmed yourself with an <span class="vocab">event listener</span>.</p>
      <p>In JavaScript, an event listener is a way to set up code to run <b>only</b> when a very specific thing happens. You want to change the color of something when a button is clicked? Great! That's an event listener -- you'll tell the code to <b>listen</b> for the mouse to click on a button, then run the code that changes the color.</p>
      <p>Let's look at this example of an event listener and talk through the pieces:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="OJJGJGw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 2">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/OJJGJGw">
  JavaScript Variable Interaction, Part 2</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>In this case, we've used JavaScript to grab ahold of the button in the HTML, then added a <b>click</b> event listener to that button. Now, the text will only change when the button is clicked since it's wrapped up inside the event listener.</p>
      <div class="try-it">
        <h2>Try It: Event Listeners</h2>
        <p>Go back to your Compliment Generator and add a button with an ID near the top of your page. Write JavaScript to make it so that the greeting changes when you click that button.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/ZEEZYKW?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/rabbit.png" alt="Rabbit in hat icon">
      <h2 class="section-header">Dynamically Adding HTML with JavaScript</h2>
      <p>JavaScript is also used to add brand new HTML elements to the page. On some social media sites, once you finish scrolling to the bottom of the page, you'll see a button that says <b>See More</b>. When you click it, new things magically show up! How does this happen?</p>
      <p>Let's look at the example below in pairs. <b>Click on "Edit on Codepen" to open it in a new window. Seeing the full code will help you start to recognize JS patterns.</b>With your neighbor, walk through the code and see how much you can understand on your own. Then, we'll come back together and discuss.</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="RwwONZY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 3">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/RwwONZY">
  JavaScript Variable Interaction, Part 3</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Adding HTML Dynamically</h2>
        <p>Go back to your Compliment Generator. Find the section that shows the user their compliment. Instead of having the content in your HTML, generate it dynamically from JavaScript! The header, paragraph, and image should all appear when the user clicks the button that says "Compliment Me".</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/MWWRYBb">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/keyboard.png" alt="Keyboard icon">
      <h2 class="section-header">Getting User Input</h2>
      <p>We have an input box on our page, but right now it's not functional. Let's look at the example code below and see if we can figure out what's going on. We'll use the same structure that we did for the last example -- discuss in pairs first, then we'll review whole group.</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="jOOREdq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 4">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/jOOREdq">
  JavaScript Variable Interaction, Part 4</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Incorporating User Input</h2>
        <p>Go back to your Compliment Generator. Right now, your user's name is hardcoded into the compliment. Modify your code so that the user can type their name into the text box, and when they click "Compliment Me", the compliment includes their name at the beginning.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/QWWPwoy?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/keyboard.png" alt="Keyboard icon">
      <h2 class="section-header">If Statements</h2>
      <p>What happens if your user doesn't enter a name, but still presses the button? Uh oh! Doesn't look great. Let's take care of this with an <span class="vocab">if statement</span>.</p>
      <p>In this case, we have two paths that we want to go down:</p>
      <ol>
        <li>The user enters their name: Great! Our program should function like we intended. We've already built this out.</li>
        <li>The user does not enter their name: Our program shoudl use something generic like "buddy" or "pal" to address the user in the compliment.</li>
      </ol>
      <p>Like always, let's start by exploring the code below in pairs, then we'll discuss it as a group:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="QWWPwRN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Variable Interaction, Part 5">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/QWWPwRN">
  JavaScript Variable Interaction, Part 5</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: If Statements</h2>
        <p>Go back to your Compliment Generator. Add an if statement so that if the user does not enter their name, a generic term of endearment is used instead.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/yLLrydg?editors=1010">this example</a>.</p>
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
