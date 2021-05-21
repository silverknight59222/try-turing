---
layout: lesson
---

# Ruby Intro

<a href="../">Back to Curriculum Index</a>

## Goals

- Classify data as the Number, String, or Boolean data type
- Store various data types in variables
- Use String interpolation
- Understand the purpose and syntax of methods

## Pre-work Review

Look at the contrived program below. Using what you learned from the pre-work:
1. Make one or more statements about the code. Feel free to use vocabulary such as variable, string, integer, reassigned, underscore, method, snake case, etc.
2. Ask one or more questions about the code.
Be ready to share in the chat!

Example: 
1. Statement: The variable `favorite_season` contains a string.
2. Question: Why is line 4 empty?

<iframe height="400px" width="100%" src="https://repl.it/@turingschool/Ruby-Review?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div class="try-it-new">
  <h2>Try It: MadLibs!</h2>
  <p>Choose a MadLib starter program below and fork (copy) it to your own account. Use what you know about <code>strings</code>, <code>integers</code>, <code>puts</code>, <code>print</code>, <code>variables</code>, and <code>string interpolation</code> to make it run!</p>
  <p>While working through this challenge, pay attention to these programmer skills: <b>1)</b> attention to detail, and <b>2)</b> reading error messages.</p>
  <ul>
    <li><a href="https://repl.it/@turingschool/All-About-Giraffes" target="blank">All About Giraffes</a></li>
    <li><a href="https://repl.it/@turingschool/Our-Solar-System" target="blank">Our Solar System</a></li>
  </ul>
  <small><i>All MadLibs adapted from https://www.pinterest.com/francescacorna/madlibs/</i></small>
</div>

## Methods

A ruby **method** is a piece of code that packages up instructions for the program to follow. Some other languages refer to them as functions. Many methods are built-in to the ruby language to make developers work easier and code cleaner. Developers can also write their own methods. 

Today, we will focus on using built-in ruby methods. Imagine this real-world scenario: a (well-trained) dog can react to the command `sit`, `bark`, `roll_over`, etc. In code, we might write these like this:

```ruby
dog.sit
dog.bark
dog.roll_over
```

We would call these Dog methods since they are specific to a dog - you wouldn't tell a human to "roll over" or "bark"!

Just like we have these (made up) dog methods, we also have (real, ruby) String methods.

<div class="try-it-new">
  <h2>Try It: String Methods</h2>
  <p>In your breakout rooms, look at the code in <a href="https://repl.it/@turingtrycoding/stringmethods?lite=true#main.rb">this repl</a>. Line by line, predict what will print out to the console based on the name of the method called on <code class="try-it-code">message</code>.</p>
  <p>Then, click the green "run" button to run the code. What did you learn? Any surprises?</p>
  <p>Discuss: Does this make you wonder anything like "I wonder if ruby has a method for ____?". Share out, then if time, get wild and google it and see if you can find an answer!</p>
</div>

<a href="../arrays">Next: Arrays</a>
