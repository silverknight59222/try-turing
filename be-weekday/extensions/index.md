---
layout: lesson
---

# Extensions: Looping

## Goals

- Describe what a loop is and why we would use a loop
- Define "loop condition" and "sentry variable"
- Write a program that uses a loop to execute a set of instructions indefinitely

## Looping

Looping is the idea that something will happen **until** a condition is met. Here are some examples of looping in real life:

- Keep counting **until** you reach 100
- Keep taking bites **until** your dinner is finished
- Keep pressing keys **until** your essay is finished
- (on a page of 20 math problems) Keep solving math problems **until** you have done all 20
- Keep making burritos **until** you have enough to feed all of your friends
- Keep washing dishes **until** until there are no more in the sink

In the examples above, the portion after **until** represents what we call the _loop condition_. This specifies what must be true in order for the loop to keep running.

A _sentry variable_ is the piece of data that is in full control of whether or not the loop condition is true or false. Look at the two examples of sentry variables below:
- Keep counting until you reach 100: sentry variable is `count`
- Keep taking bites until your dinner is finished: sentry variable is `dinner_finished`

<div class="try-it-new">
  <h2>Try It: Looping Examples</h2>
  <p>Brainstorm:</p>
  <ol>
    <li>An example of a loop in real life that happens a set number of times. What is the sentry variable? </li>
    <li>An example of a loop in real life that might happen an indefinite number of times. What is the sentry variable? </li>
  </ol>
</div>

```ruby
# this code snippet is for the Try It: Reading Looping Code section
stomach = 0

until stomach == 10
  puts "keep eating!"
  stomach += 1
end

puts "done eating."
```

<div class="try-it-new">
  <h2>Try It: Reading Looping Code</h2>
  <p>Read through the code above line by line. Focus on the following questions:</p>
  <ol>
    <li>How many times will "keep eating!" print out? Why?</li>
    <li>How many times will "done eating." print out? Why?</li>
    <li>What is the sentry variable?</li>
    <li>What is the looping condition?</li>
    <li>What would happen if you changed <code class="try-it-code">stomach += 1</code> to <code class="try-it-code">stomach += 2</code>?</li>
    <li>What problem would arise if you changed <code class="try-it-code">stomach += 1</code> to <code class="try-it-code">stomach += 3</code>? What could you change about the loop condition to prevent this problem?</li>
    <li>What would happen if you removed line <code class="try-it-code">stomach += 1</code> altogether?</li>
  </ol>
  <p>Once you're done predicting, <a href="https://repl.it/@turingtrycoding/looping">run the code in this repl</a>! Try experimenting with all of the scenarios above by modifying the code and re-running it.</p>
</div>

## Programming a 5 year old

Have you ever been a car with a five-year-old?

<div class="try-it-new">
  <h2>Try It: Are we there yet?</h2>
  <p>Back on repl.it, create a new repl.</p>
  <p>Write a program that asks a user "Are we there yet?" The user can enter anything. If they enter "yes", then the loop should stop and the program should print out "Finally!"</p>
  <p><b>Training Wheels:</b> If you're not sure how to start, you can use <a target="blank" href="https://repl.it/@turingtrycoding/loopingtrainingwheels">this starter code</a>.</p>
  <div class="spicy-container">
    <p class="spicy-click">
      <span role="img" aria-label="spicy pepper">🌶</span>Click here for a Spicy Challenge<span role="img" aria-label="spicy pepper">🌶</span>
    </p>
    <div class="spicy-toggle">
      <p>Can you make your program case-insensitive? This means that the user should be able to enter "YES" or "Yes" or "yes" or "yEs", etc.</p>
    </div>
  </div>
</div>

<a href="../">Back to Curriculum Index</a>
