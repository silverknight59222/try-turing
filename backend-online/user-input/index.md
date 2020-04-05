---
layout: lesson
---

# User Input

<a href="../">Back to Curriculum Index</a>

## Goals

- Write a program that gets and uses input from the user

## Getting User Input

Our programs haven't been very exciting so far because we already know what will happen just by looking at the code. What if your program incorporated input from the user?

```ruby
print "Enter your name: "
username = gets.chomp
puts "Hi, #{username}! It's so nice to meet you."
```

Let's run this code in a _repl_ to see what happens!

<div class="try-it-new">
  <h2>Try It: Getting User Input</h2>
  <p>Write a small program that asks a user for their favorite snack, then responds with a sentence of your choice! <em>Consider: what variable name will you use to label that user input?</em></p>
  <p><em>Finished Early?</em> How could you modify this code so that the user's name is capitalized correctly, no matter how they entered it?</p>
</div>

## Multiple User Inputs

We know how to get one input from a user. How do we go about getting multiple inputs?

<div class="try-it-new">
  <h2>Try It: Getting Multiple User Inputs</h2>
  <p>Write a program that asks a user for their <code>name</code>, <code>location</code>, and <code>email_address</code>. Output the following:</p>
  <pre>Your name is Amy and you live in Denver, CO. Your email address is amy@turing.io.</pre>
  <p>Try running your program a few times with different values stored in the variables.</p>

  <div class="spicy-container">
    <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
    <div class="spicy-toggle">
      <ul>
        <li>Try adding a string method to your program to lowercase the user's email address</li>
        <li>Now, split up your city and state so that you can upcase the state and capitalize the city</li>
      </ul>
    </div>
  </div>
  
</div>

<a href="../">Back to Curriculum Index</a>
