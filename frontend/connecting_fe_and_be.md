---
title: Connecting Frontend and Backend
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 4
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Use JavaScript to ask a backend API for data</li>
        <li>Programatically add that data to your HTML</li>
        <li>Extract "packages" of code into functions</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/interface.png" alt="Interface icon">
      <h2 class="section-header">What's an API?</h2>
      <p><span class="vocab">API</span> stands for Application Programming Interface. It can refer to a lot of different things, but in our case today, we're going to think of it as a service we can ask for data.</p>
      <p>We're going to use an API that stores compliment data. We'll ask it to give us a compliment back, then we (as front end developers) will decide how that data gets displayed to the page.</p>
      <p>The API that we're going to be using today has an endpoint (or URL) that gives us back a random string of a compliment. Before we integrate the API into our code, let's check out the endpoint (or URL) to see the raw data that it gives us: <a target="blank" href="https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments">Compliment API Endpoint</a>. <b>Refresh the page a few times,</b> as this endpoint is set up to generate a random string for each request.</p>
      <p>Now, let's look at how we can use that endpoint in our JavaScript code. </p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="LYYvNVg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Compliment API Example">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/LYYvNVg">
  Compliment API Example</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Integrating the API</h2>
        <p>Go back to your Compliment Generator. Right now, we've hardcoded a compliment. Where can you integrate the call to the compliment API so that you can get back a compliment and show that to the user?</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/NWWmNNr?editors=1010">this example</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/boxes.png" alt="Boxes icon">
      <h2 class="section-header">Functions</h2>
      <p>Our code is pretty hard to read right now; particularly the code that's inside of the click event listener. Let's fix that by packaging our code up into <span class="vocab">functions</span>.</p>
      <p>You can think of a function as a list of instructions that's inside of an envelope. The instructions can't be completed until we open that envelope. With code, we can't run the code (instructions) until the function is called (open the envelope).</p>
      <p>One of the benefits of packaging multiple steps up into a function is that we can give those steps a logical name. I could say "Grind coffee beans, put beans in coffee maker, turn on machine, etc.", or I could just say "Make coffee". Let's look at the following example together:</p>
      <p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="turingtrycoding" data-slug-hash="pooByEP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Compliment API Example, Step 2">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/pooByEP">
  Compliment API Example, Step 2</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>This method of extracting code into logical containers makes the inside of our event listener read more like an English story. This is good!</p>
      <p>Another benefit of extracting code into functions is that we can then use those functions anywhere in our program. We won't be able to see this benefit in our small project, but this is a very common practice in larger projects.</p>
      <div class="try-it">
        <h2>Try It: Extracting Code into Functions</h2>
        <p>Go back to your Compliment Generator. Right now, we're generating a heading, generating an image, and generating a compliment. <b>Together</b>, we'll extract one of those pieces into a function. Then, you'll try to extract the other two on your own.</p>
        <p>Need help? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/yLLrOgo?editors=1010">this example</a>.</p>
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
