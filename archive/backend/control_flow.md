---
title: Control Flow
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 4
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Describe the purpose of a conditional statement</li>
        <li>Write programs that incorporate if, elsif, and else portions of a conditional statement</li>
        <li>Practice writing programs without being taught 100% of what you need to know 😁</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/tree.jpg" alt="Tree">
      <h2 class="section-header">Control Flow</h2>
      <p>Control Flow refers to being able to determine what the program does given certain inputs. It controls the flow of the program!</p>
      <p><span class="vocab">If statements</span> are a type of control flow. An if statement sets up different paths that the program can take depending on what is true at a given moment.</p>
      <div class="try-it">
        <h2>Try it: Reading If Statements</h2>
        <ol>
          <li>Look at (<b>but don't run!</b>) the embedded repl below. With the person next to you, predict what will happen when we run this code.</li>
          <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/controlflowbasic?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
          <li>Once you've made your predictions, run the code and look at the output. With the person next to you, review your original guesses and correct anything you wrongly predicted.</li>
        </ol>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>How could you modify this code so that it doesn't matter whether or not the user types capital letters or lower case letters?</li>
            </ol>
          </div>
        </div>
      </div>
      <p>Great! Let's make it slightly more complicated:</p>
      <div class="try-it">
        <h2>Try it: Reading If/Elsif/Else Statements</h2>
        <ol>
          <li>Look at (<b>but don't run!</b>) the embedded repl below. With the person next to you, predict what will happen when we run this code.</li>
          <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/controlflowifelsif?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
          <li>Once you've made your predictions, run the code and look at the output. With the person next to you, review your original guesses and correct anything you wrongly predicted.</li>
        </ol>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>What would you need to change about the program in order to print out "Meh" if the user types in "Snickerdoodle"?</li>
              <li>Without adding any new lines of code (just modifying existing lines), could you make it say "Correct!" for <b>either</b> Chocolate Chip <b>or</b> Peanut Butter?</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <h2 class="section-header">Solving Problems Without Knowing Everything</h2>
      <p>As a programmer, you will constantly be solving problems that you don't necessarily know how to solve. This is the fun of coding! Coding involves solving puzzles, guess-and-check, and figuring things out.</p>
      <p>The next Try It section asks you to build something, but we have only taught you about 80% of what you need to know in order to build this! 🙀 This is meant to mimic how projects work at Turing -- we purposefully leave out key pieces of information so that you get practice Googling and reading documentation in order to build a solution.</p>
      <p>Luckily for you, we won't make this <i>too</i> difficult today. The following resources should lead you down the right track:</p>
      <ul>
        <li><a target="blank" href="https://stackoverflow.com/questions/22640570/i-have-a-simple-odd-or-even-test-in-ruby-but-its-not-working">A Stackoverflow post on Ruby even/odd methods</a></li>
        <li><a href="https://riptutorial.com/ruby/example/16995/even-and-odd-numbers" title="">even? and odd? methods in Ruby</a></li>
        <li>Spicy: <a href="https://stackoverflow.com/questions/3517238/what-does-the-operator-do-in-ruby-in-n-2">Modulo operator</a></li>
      </ul>
      <div class="try-it">
        <h2>Try it: Control Flow</h2>
        <p>Back on repl.it, create a new repl by clicking the <img style="height: 1.5em" src="{{ site.url }}/assets/images/newrepl.png" alt="New Repl button"> button near the top right corner. Choose the Ruby programming language, and name the repl <code>evenoddcontrolflow</code>.</p>
        <p>Write a program that asks a user for a piece of text. It should say "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd.</p>
        <p>This is what the program should look like when it runs.</p>
        <pre>Enter a piece of text:
Turing
Even!</pre>
Try running your program a few times with different inputs.
      </div>
      <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>Can you make your program tell the user not only if a word has an even or odd number of characters, but also <b>how many</b> characters they entered? For example, your program would say: <code>Even! (6)</code> or <code>Odd! (3)</code></li>
              <li>🔥This one is extra spicy: Can you make your program only count characters, but ignore spaces? For example, if the user types in <code>chocolate chip cookies are the best</code>, your program should return 30, not 35. It might help to google something like <b>how do you ___________ in Ruby?</b></li>
            </ol>
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
