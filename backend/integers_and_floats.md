---
title: Integers and Floats
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 6
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Define "integer" and "float"</li>
        <li>Explore comparison operators and methods specific to numbers</li>
        <li>Combine all skills learned today to program a number guessing game</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/numbers.png" alt="Numbers">
      <h2 class="section-header">Integers and Floats</h2>
      <p>In Ruby, there are two main types of numbers:</p>
      <ul>
        <li><b>Integer</b>: positive or negative whole number</li>
        <li><b>Float</b>: positive or negative number with decimal places</li>
      </ul>
      <div class="try-it">
        <h2>Try It: Integers and Floats</h2>
        <p>In repl.it, we can test out code using the interactive console (the dark part of the screen).</p>
        <p>In the console of any of your old programs, try out the following lines of code.</p>
        <pre>x = 5
x.to_f
y = 5.6
y.to_i
z = 10
z.to_s</pre>
        <p>With the person next to you, discuss:</p>
        <ol>
          <li>What do you notice about the outputs?</li>
          <li>What do you think these <code>to_f</code>, <code>to_i</code>, and <code>to_s</code> methods do?</li>
        </ol>
        <p>Now, try these:</p>
        <pre>5 == 5
3 > 3
3 >= 3
2 < 1
3 != 6</pre>
        <p>With the person next to you, discuss:</p>
        <ol>
          <li>What kind of output do all of these comparisons produce?</li>
          <li>What do you think <code>!=</code> is checking for?</li>
        </ol>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/world.png" alt="World in hand">
      <h2>Everything, Together!</h2>
      <p>Now that we've learned about until loops, if/else statements, integers, strings, and variables, we're ready to write our first program that brings it all together! (And let's be honest, probably the only thing your friends will think is somewhat cool from today).</p>
      <p>We'll do this challenge <b>all together</b>, and we'll start by writing <span class="vocab">pseudocode</span> to fully understand all of the discrete pieces.</p>
      <p>Pseudocode is an English-like version of code that will help us define all of the individual steps that need to happen in order to play the number guessing game. We'll act it out as humans, pausing to jot down everything that needs to happen.</p>
      <p>Here are the specifications:</p>
      <div class="try-it">
        <h2>Try It: Guess the Number</h2>
        <p>Use what you know about while loops and if/else statements to write a program that sets a secret number, then allows a user to guess. If the number is too high, print "Too high!" and prompt the user to guess again. If the number is too low, print "Too low!" and prompt the user to guess again. If the number guessed is the secret number, then print "Correct!" and exit the game.</p>
        <p>Important: gets stands for "get string". This means that even if the user enters a number, like 9, the computer reads it as "9" (which is not the same as 9). </p>
        <pre>Guess a number.
5
Too low!
10
Too high!
9
Correct!</pre>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>Make your game generate a random number so that you don't have to pretend to be surprised every time you guess the correct number. Try Googling <code>ruby generate random number</code>.</li>
              <li>Add a feature to the beginning of the game that asks the user to input a lower and upper bound for the guess. For example, the user could input 13 for the lower bound and 19 for the upper bound.</li>
              <li>Modify your feedback so that in addition to saying <code>Too high</code> or <code>Too low</code>, it also tells how close they were. For example, if the secret number is 8 and they guessed 1, say <code>Too low! Way far off.</code> If the secret number is 8 and they guessed 6, say <code>Too low! But super close!</code> You can determine what you want "super close" or "way far off" to mean in your program.</li>
              <li>Add an outer loop that asks the user if they want to play, then make it so that once the user guesses the number, they are prompted again with "Do you want to play?" If they type "y", the game should start over with a new secret number.</li>
            </ol>
          </div>
        </div>
        <div class="spicy">
          <h4 class="spicy-click">🤯 Challenge: FizzBuzz <small>(click!)</small></h4>
          <div class="spicy-appear">
            <p>Make a program that goes through numbers 1 through 100 and says "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both. If the number is not divisible by either 3 or 5, then just print the number.</p>
<pre>1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...etc</pre>
<p>Not sure where to start? Run the starter code below and see if you can modify it to make the FizzBuzz program:</p>
<pre>
(1..100).each do |num|
  puts num
end
</pre>
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
