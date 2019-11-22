---
title: Looping
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 5
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Describe what a loop is and why we would use a loop</li>
        <li>Define "loop condition" and "sentry variable"</li>
        <li>Write a program that uses a loop to execute a set of instructions indefinitely</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/tree.jpg" alt="Tree">
      <h2 class="section-header">Looping</h2>
      <p>Looping is the idea that something will happen until a condition is met. Here are some examples of looping in real life:</p>
      <ul>
        <li>Keep counting <b>until</b> you reach 100</li>
        <li>Keep taking bites <b>until</b> your dinner is finished</li>
        <li>Keep pressing keys <b>until</b> your essay is finished</li>
        <li>(on a page of 20 math problems) Keep solving math problems <b>until</b> you have done all 20</li>
        <li>Keep making burritos <b>until</b> you have enough to feed all of your friends</li>
        <li>Keep washing dishes <b>until</b> until there are no more in the sink</li>
      </ul>
      <p>In the examples above, the portion after <b>until</b> represents what we call the <span class="vocab">loop condition</span>. This specifies what must be true in order for the loop to keep running.</p>
      <p>A <span class="vocab">sentry variable</span> is the piece of data that is in full control of whether or not the loop condition is true or false. Look at the two examples of sentry variables below:</p>
      <ul>
        <li>Keep counting <b>until</b> you reach 100: sentry variable is <code>count</code></li>
        <li>Keep taking bites <b>until</b> your dinner is finished: sentry variable is <code>dinner_finished</code></li>
      </ul>
      <div class="try-it">
        <h2>Try it: Identifying Sentry Variables and Looping Examples</h2>
        <p>Look at the scenarios below. With the person next to you, identify the sentry variable in each case.</p>
        <ul>
          <li>Keep pressing keys <b>until</b> your essay is finished: sentry variable is <code>________</code></li>
          <li>(on a page of 20 math problems) Keep solving math problems <b>until</b> you have done all 20: sentry variable is <code>_________</code></li>
          <li>Keep making burritos <b>until</b> you have enough to feed all of your friends: sentry variable is <code>________</code></li>
          <li>Keep washing dishes <b>until</b> until there are no more in the sink: sentry variable is <code>________</code></li>
        </ul>
        <p>Next, brainstorm:</p>
        <ol>
          <li>An example of a loop in real life that happens a set number of times. What is the sentry variable? </li>
          <li>An example of a loop in real life that might happen an indefinite number of times. What is the sentry variable? </li>
        </ol>
      </div>
      <p>Now let's look at what loops look like in code.</p>
      <div class="try-it">
        <h2>Try it: Reading Looping Code</h2>
        <p>With the person next to you, read through the code below line by line (but don't run it yet!). Focus on the following questions:</p> 
        <ol>
          <li>How many times will "keep eating!" print out? Why?</li>
          <li>How many times will "done eating." print out? Why?</li>
          <li>What is the sentry variable?</li>
          <li>What is the looping condition?</li>
          <li>What would happen if you changed <code>stomach += 1</code> to <code>stomach += 2</code>?</li>
          <li>What problem would arise if you changed <code>stomach += 1</code> to <code>stomach += 3</code>? What could you change about the loop condition to prevent this problem?</li>
          <li>What would happen if you removed line <code>stomach += 1</code> altogether?</li>
        </ol>
        <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/looping?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        <p>Once you're done predicting, run the code! Try experimenting with all of the scenarios above by modifying the code and re-running it.</p>
      </div>
    </section>
    <hr>
    <section>
      <h2>Programming a Five Year Old</h2>
      <p>Have you ever been a car with a five-year-old?</p>
      <div class="try-it">
        <h2>Try it: Are we there yet?</h2>
        <p>Back on repl.it, create a new repl by clicking the <img style="height: 1.5em" src="{{ site.url }}/assets/images/newrepl.png" alt="New Repl button"> button near the top right corner. Choose the Ruby programming language, and name the repl <code>looping</code>.</p>
        <p>Write a program that asks a user "Are we there yet?" The user can enter anything, but if they enter "yes", then the loop should stop and the program should print out "Finally!"</p>
        <p><b>Training Wheels:</b> If you're not sure how to start, you can use <a target="blank" href="https://repl.it/@turingtrycoding/loopingtrainingwheels">this starter code</a>.</p>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>Can you make your program case-insensitive? This means that the user should be able to enter "YES" or "Yes" or "yes" or "yEs", etc.</li>
              <li>Does your program have any repetitive code? Can you get rid of it in some way?</li>
              <li>Ruby has another keyword <code>while</code> that can also be used to define a loop. Can you use <code>while</code> in conjunction with the <code>!=</code> operator (which means "not equal to") instead of <code>until</code> and <code>==</code>?</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/wrench.png" alt="Wrench icon">
      <h2 class="section-header">Refactoring Code</h2>
      <p>If you used the starter code above, did you notice anything funny about the program? <span class="vocab">Refactoring</span> is the process of editing your code for clarity, performance, or funtionality.</p>
      <p>Together, let's refactor our code so that there is no duplication.</p>
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
