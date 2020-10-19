---
layout: lesson
---

# Back-End Try Coding: Pre-work

<a href="../">Back to Curriculum Index</a>

## Introduction

We are excited you will be joining us for an upcoming Try Coding Workshop. If you've found yourself on this page and are not yet signed up for one, you can sign up [here](https://www.eventbrite.com/o/turing-school-of-software-amp-design-9895674202)!

Completing this pre-work will set you up for success in our virtual classroom - making sure that everyone feels comfortable with the tools we will use and a bit of foundational knowledge. Most participants share that this work took them between XX-XX minutes to complete. Complete the submission form at the bottom of this page in order to get the zoom link for your scheduled workshop!

## repl.it

[repl.it](https://repl.it/~) provides an online platform that allows us to write code and see the results almost immediately - all inside of one browser tab! There are many other similar (and awesome) tools available; we feel this is the best choice for the Try Coding workshops.

Please watch this short video for an introduction on how to navigate repl.it:

- TODO: video of how to use repl

Since we'll be using repl.it during the workshop, please create a free account with them at this time. You will create one project while working through this pre-work!

## Intro to Ruby

Ruby is a Back-End programming language. It was written with a focus on simplicity and productivity, so is a great language for beginners!

Programming languages need a way to classify the various types of data they work with. Ruby works with the 3 data types defined below:

<section class="data-type-cards">
  <div class="try-it-new">
    <h3>String</h3>
    <p>A String is a series of characters (alpha, numeric, or symbol) between quotation marks.</p>
    <pre>"Hello, World!"
"12345"</pre>
  </div>

  <div class="try-it-new">
    <h3>Integer</h3>
    <p>An Integer is a number without decimals. Basic math operations can be performed on them.</p>
    <pre>137
3 + 7</pre>
  </div>

  <div class="try-it-new">
    <h3>Boolean</h3>
    <p>A Boolean refers to a value that is either true or false. You can think of it as an on/off switch.</p>
    <pre>true
false</pre>
  </div>
</section>

Ruby provides a command that allows us to print out the data we are working with the the console. It's a tool for learning and troubleshooting, but isn't usually included in the final code of an app. Click the "Run" button in the following example to see the outcome of the three lines of Ruby:

<iframe height="400px" width="100%" src="https://repl.it/@turingschool/puts-example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

>This may not feel very exciting now, but it will be a useful tool as we move forward!

<div class="try-it-new">
  <h3>You Try</h3>
  <p>Create a file in your repl account, and "puts" several values out to the console. Run the file and observe the output.</p>
  <p>Now, instead of using the <code class="try-it-code">puts</code> command, use <code class="try-it-code">print</code>. Observe the difference in the output.</p>
  <div class="help-container">
    <button class="help-click">FAQ: Is puts or print preferred?</button>
    <div class="help-toggle">
      <p>Since puts and print are both for learning and troubleshooting, you should use the one <strong>you</strong> prefer! You may choose one over the other in different situations. There is no "best practice", but it's good to know that both exist.</p>
    </div>
  </div>
</div>

## Variables

We can use variables to store and reference information within a Ruby program. We can think about it as a storage bin in the garage - the contents inside of the bin are what we care about storing, and the label on the outside is how we can quickly identify it.

The syntax for declaring variables and assigning a value to them is as follows:

```ruby
first_name = "Maya"
age = 34
is_signed_in = true
```

After declaring a variable, we can reference the variable name as many time as we want/need to:

```ruby
first_name = "Maya"

puts first_name
puts first_name
puts first_name
```

>Note that the variable `first_name` uses an underscore character to separate the two words. This is called [snake case](https://en.wikipedia.org/wiki/Snake_case) and is a Ruby convention.

Many times, information within a program will change, so we will need to re-assign the value of a variable. Run the repl file below to observe how variable re-assignment works:

<iframe height="400px" width="100%" src="https://repl.it/@turingschool/reassign-variable?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## String Interpolation

String Interpolation allows us to create more dynamic and customized information for our users. Instead of telling you exactly what it does and how it works, we're only providing the syntax. You may be able to predict what the code will do just by reading through it. In the next activity, you will use that syntax and be able to see the result for yourself!

```ruby
first_name = "Maya"
age = 34

puts "Hello! My name is #{first_name} and I am #{age} years old."
```

<div class="try-it-new">
  <h3>You Try</h3>
  <p>In the same repl file, declare 2 new variables.</p>
  <p>Then, <code class="try-it-code">puts</code> or <code class="try-it-code">print</code> a sentence that uses those two variables with String Interpolation!</p>
  <div class="help-container">
    <button class="help-click">Help! It's not working.</button>
    <div class="help-toggle">
      <p>If the desired result is not printing to the console, or, if you are seeing an error message, here are some go-to strategies to problem solve:</p>
      <p>If repl is working very slowly, try to refresh the page. It works best in the Chrome browser.</p>
      <p>Check the spelling and capitalization of your variables. The variable names must be exact matches!</p>
    </div>
  </div>
</div>

## Submission

We hope you had some fun learning about the building blocks of Ruby - this is a great foundation!

So we have a sense of where you are with the material so far and can customize the workshop to your needs best, please complete the form below.

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyKttYAR6OiHcCsarBXbFRgZUqMI4ffZal0atN8ArByH68yw/viewform?embedded=true" width="100%" height="1076" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
