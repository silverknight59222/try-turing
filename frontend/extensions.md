---
title: Extensions
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 6
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/extensions.png" alt="Extension cord icon">
      <h2 class="section-header">Get Creative!</h2>
      <p>Congratulations! You have a working frontend application. Now it's time to get creative. Pick a challenge below and try it out.</p>
      <div class="try-it">
        <h2>Try It: Counter</h2>
        <p>Add a counter to your application so that you can display how many times the user has clicked the compliment button.</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/BaaEKOQ?editors=1010">this example</a> for inspiration to get started on a counter.</p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Greedy Counter</h2>
        <p>Take your counter to the next level! Add an if statement that tells the user they are being greedy if they ask for more than 10 compliments.</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/GRgRdbr?editors=1010">this example</a> to see how you can change the display depending on the count variable.</p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Fun Fonts</h2>
        <p><a href="https://fonts.google.com/">Google Fonts</a> hosts a bunch of fun fonts that you can use on your website. It's not as easy as just typing the name of the font, but it's also not that bad.</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/qBBwZLz">this example</a> to see how you can add a Google Font.</p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Images, Part I</h2>
        <p>Can you make an image appear when you generate a compliment?</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/xxbxzxK">this example</a> to see how to append not only a paragraph, but also an image.</p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Functions</h2>
        <p>Note: This challenge requires the previous challenge (Images, Part I) to be implemented.</p>
        <p>The code inside of our click event handler is getting a bit long! Let's extract it out into functions.</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/rNaNKab">this example</a> to see how we can create packages of code (functions) that we reference inside of the event handler.</p>
      </div>
      <br>
      <div class="try-it">
        <h2>Try It: Images, Part II</h2>
        <p>Note: This challenge requires the previous two challenges (Images, Part I; and Functions) to be implemented.</p>
        <p>Right now, the same image shows up every time you get a compliment. Make a randomly selected image show up instead!</p>
        <p>Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/OJJGNab?editors=1010">this example</a> for inspiration to get started on random images.</p>
      </div>
      <br>
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
