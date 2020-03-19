---
layout: lesson
---

# User Input

<a href="../">Back to Curriculum Index</a>

## Goals

- Read code and predict what it does
- Write a program that gets and uses input from the user

## Reading Unknown Code

Our programs haven't been very exciting so far because we already know what will happen just by looking at the code. What if your program incorporated input from the user?

```ruby
print "Enter your name: "
username = gets.chomp
puts "Hi, #{username}! It's so nice to meet you."
```

<div class="try-it-new">
  <h2>Try It: Reading Unknown Code</h2>
  <ol>
    <li>Look at the code snippet above. Predict what will happen when we run this code.</li>
    <li>Once you've made your predictions, run the code and look at the output. Review your original guesses and correct anything you wrongly predicted. Be ready to share out!</li>
  </ol>
  <p><em>Finished Early?</em> How could you modify this code so that the user's name is capitalized correctly, no matter how they entered it?</p>
</div>

## Multiple User Inputs

We know how to get one input from a user. How do we go about getting multiple inputs?

<div class="try-it-new">
  <h2>Try It: Getting Multiple User Inputs</h2>
  <p>Write a program that asks a user for their <code>name</code>, <code>location</code>, and <code>email_address</code>. Output the following:</p>
  <pre>Your name is Amy and you live in Denver, CO. Your email address is amy@turing.io.</pre>
  <p>Try running your program a few times with different values stored in the variables.</p>
  <p><em>Finished Early?</em> 1. Try adding a string method to your program to lowercase the user's email address. 2. Try splitting up your city and state so that you can upcase the state and capitalize the city.</p>
</div>
