---
title: Strings
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 2
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
  	{% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Define and describe use cases for strings</li>
        <li>Create variables to store string data</li>
        <li>Combine static string data with variables using string interpolation</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/string.png" alt="Cat playing with yarn">
      <h2 class="section-header">What is a string?</h2>
      <p>In programming, a <span class="vocab">String</span> is a series of characters (alpha, numeric, or symbol) between quotation marks. This is true in any programming language, not just Ruby.</p> 
    	<p>In the example below, you'll see three separate strings, each surrounded by quotation marks.</p>
      <iframe height="300px" width="100%" src="https://repl.it/@turingtrycoding/stringexamples?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/homework.png" alt="Owl in front of a computer">
      <h2 class="section-header">Our First Program</h2>
      <p>Let's write a program where we we print strings. In the example below, we're using the <code>print</code> method. You can think of a <span class="vocab">method</span> as being synonymous to a command. In this case, we're commanding the computer to print something.</p> 
      <ol>
      	<li>Open the repl below by clicking <b>open in repl.it</b>.</li>
      	<li>Click the <b>Fork</b> button. This will make a copy of the code for your own account.</li>
      	<li>Push the run button to see what happens!</li>
      </ol> 
			<iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/printingstrings?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
			<div class="try-it">
				<h2>Try it: <code>Print</code>-ing and <code>Puts</code>-ing Strings</h2>
				<ol>
					<li>Add three more lines to print, each using the same structure as the example.</li>
					<li>Look at your output. With the person sitting next to you, discuss: does the output match what you expected to see?</li>
					<li>Change everywhere you used the method <code>print</code> to <code>puts</code>. Run your program.</li>
					<li>Look at your output. With the person next to you, discuss: how would you define the difference between the <code>print</code> and <code>puts</code> methods?</li>
				</ol>
				</div>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/box.png" alt="Box icon">
      <h2 class="section-header">Variables and Variable Assignment</h2>
      <p>In middle school math class, you might have learned that variables are single letters that represent numeric values.</p>
      <p>In programming, we can expand that definition: Variables can either be single letters <b>or</b> full words or phrases. In addition, they can represent either numeric data or other types of data (like strings).</p>
      <p>The following screenshot shows four different variables. The numbers at the beginning of the line are <b>not</b> part of the code; they just represent the line number.</p>
      <img src="{{ site.url }}/assets/images/variables.png" alt="Variable definitions">
      <p>Always use lowercase letters in your variable names. If you need to use a space, put an underscore (<code>_</code>) character instead of the space.</p>
      <p>If it helps, you can think of a variable as a labeled box, and inside that box is some piece of data (a number, string, etc.)</p>
      <h3>Sidenote</h3>
      <p>Most text editors have built-in color schemes to help developers recognize different data types and where mistakes might be. For example, if a developer left off a closing quotation mark, the coloring for the rest of the program would be off.</p>
      <h3>Using Variables</h3>
      <p>Once you've defined variables, you can use them like this:</p>
      <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/printingvariables?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      <p>Even better, we can use <span class="vocab">string interpolation</span> to combine static data with dynamic (or variable) data:</p>
      <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/stringinterpolation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      <div class="try-it">
				<h2>Try it: Interpolating Strings</h2>
				<p>Back on repl.it, create a new repl by clicking the <img style="height: 1.5em" src="{{ site.url }}/assets/images/newrepl.png" alt="New Repl button"> button near the top right corner. Choose the Ruby programming language, and name the repl <code>interpolatingstrings</code>. </p>
				<p>Write a program that creates three variables with string values: <code>pet_name</code>, <code>food</code>, and <code>toy</code>. Interpolate those variables into a string to output something like this:</p>
				<pre>Fluffy plays with stuffed mice after eating tuna fish.</pre>
				<p>Need help? The structure of the example above is almost identical to what you'll need for this program!</p>
				<p>Run your program a few times with different values for each variable to make sure it works. When you're done, paste your code in the etherpad.</p>
				<div class="spicy">
					<h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
					<div class="spicy-appear">
						<p>Ignoring the rest of your code, for a minute try puts-ing <code>pet_name[0]</code>. What happens? Can you update your code so that it just prints the <b>first two letters</b> of each string?</p>
					</div>
				</div>
			</div>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/dog.png" alt="Dog image">
      <h2 class="section-header">String Methods</h2>
      <p>Earlier, we said that a <span class="vocab">method</span> is a command that we're giving the computer.</p>
      <p>There are also methods that are specific to one data type. Imagine this real-world scenario: a (well-trained) dog can react to the command <code>sit</code>, <code>bark</code>, <code>roll_over</code>, <code>shake</code>, etc. In code, we might right these like this:</p>
      <pre><code>dog.sit</code>

<code>dog.bark</code>

<code>dog.roll_over</code>

<code>dog.shake</code></pre>
			<p>We would call these <b>Dog methods</b> since they are specific to a dog. You wouldn't tell a human "roll over!" or "bark!"</p>
			<p>Just like we have dog-specific methods, we also have string-specific methods.</p>
			<div class="try-it">
				<h2>Try it: Reading Code and Predicting Method Outputs</h2>
				<ol>
					<li>Look at (<b>but don't run!</b>) the embedded repl below. With the person next to you, predict what the output will be for each line of code, starting at line 4 and ending at line 10.</li>
					<iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/stringmethods?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					<li>Once you've made your predictions, run the code and look at the output. With the person next to you, review your original guesses and correct anything you wrongly predicted.</li>
				</ol>
				<div class="spicy">
					<h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
					<div class="spicy-appear">
						<ol>
							<li>Is the <code>include?</code> method case-sensitive? What could you modify about the code to try it out?</li>
							<li>How could you both upcase and reverse a phrase in the same line of code?</li>
						</ol>
					</div>
				</div>
			</div>
    </section>
    <hr />
    <section>
    	<h2>Applying String Methods</h2>
    	<p>Use what you know about string methods to complete this exercise.</p>
    	<div class="try-it">
				<h2>Try it: Using String Methods</h2>
				<p>Modify your program to upcase the pet_name, reverse the food, and capitalize the toy.</p>
				<pre>Fluffy plays with STUFFED MICE after eating hsif anut.</pre>
				Run your program a few times with different values for each variable to make sure it works.
				<div class="spicy">
					<h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
					<div class="spicy-appear">
						<p>Modify your program so that the number of characters in each variable appears in parentheses after the word, like this:</p>
						<pre>Fluffy (6) plays with STUFFED MICE (12) after eating hsif anut (9).</pre>
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
