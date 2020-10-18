---
title: User Input
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 3
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Read code and predict what it does</li>
        <li>Write a program that gets and uses input from the user</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/input.png" alt="Keyboard">
      <h2 class="section-header">Getting User Input</h2>
      <p>Our programs haven't been very exciting so far because we already know what will happen just by looking at the code. What if your program incorporated input from the user?</p>
      <div class="try-it">
        <h2>Try it: Reading Code and Getting User Input</h2>
        <ol>
          <li>Look at (<b>but don't run!</b>) the embedded repl below. With the person next to you, predict what will happen when we run this code.</li>
          <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/userinput?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
          <li>Once you've made your predictions, run the code and look at the output. With the person next to you, review your original guesses and correct anything you wrongly predicted.</li>
        </ol>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>How could you modify this code so that the user's name is capitalized correctly, no matter how they entered it?</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/notebook.png" alt="Notebook">
      <h2 class="section-header">Multiple User Inputs</h2>
      <p>We know how to get one input from a user. How do we go about getting multiple inputs? </p>
      <div class="try-it">
        <h2>Try it: Getting Multiple User Inputs</h2>
        <p>Write a program that asks a user for their <code>name</code>, <code>location</code>, and <code>email_address</code>. Output the following:</p>
        <pre>Your name is Rachel and you live in Denver, CO. Your email address is rachel@turing.io.</pre>
        <p>Try running your program a few times with different inputs.</p>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>Try adding a string method to your program to lowercase the user's email address.</li>
              <li>Try splitting up your city and state so that you can upcase the state and capitalize the city.</li>
            </ol>
          </div>
        </div>
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
