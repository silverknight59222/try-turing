---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [Ruby Methods](../ruby-methods)

# Control Flow

The control flow is the order in which the computer executes the statements in our text editor. Code normally runs from the first line in the file to the last line, top to bottom, unless something changes that. Enter Control Flow.


## What is Control Flow?

You probably noticed the program we wrote before isn’t very flexible. We can ask the user a question and store their input, but we pretty much always say the same thing in response. What if we wanted the flexibility to change the behavior in reaction to the data?

Control flow gives us the flexibility we’re looking for. We can change the response depending on the information the user types. Take a look at the code below and see if you can guess what the output might look like. Be prepared to share.

```ruby
puts "How old are you?"
age = gets.chomp.to_i

if age >= 21
  puts "Welcome to Sierra Nevada Brewing Company!"
else
  puts "Sorry, you’re not old enough to access our site. Come back later!"
end
```

## if Statements

Ruby’s <code>if</code> statement is always followed by an expression, which is a fancy way of saying something that evaluates to true or false. If the expression evaluates to true, anything inside that code block is executed. However, if the expression is false, Ruby skips over that block of code. Here’s an example of what that might look like:

```ruby
if 5 > 4
  puts "You will see this statement in the console, because five is greater than four!"
end
```

The way our code is written now, if the expression evaluates to false, we don’t see any output in the console. In order to have another statement that runs if the expression is false, we need an <code>else</code> statement. Here’s an example:

```ruby
if 5 < 4
  puts "This statement won’t print, because five is NOT less than 4."
else
  puts "This statement will print instead!"
end
```

We can also check a second condition if we want using an <code>elsif</code> statement.

```ruby
if 5 < 4
  puts "This statement won’t print, because five is NOT less than 4."
elsif 5 > 4
  puts "This statement will print, because five is greater than 4."
else
  puts "This statement won’t print, because a true expression was already found!"
end
```

<div class="try-it-new">
  <h3>Try It: Control Flow with if Statements</h3>
  <p>Back in your sandbox replit, write a program that will check the user’s age and determine whether or not they can rent a car using the following guidelines:</p>
  <ul>
    <li>If the driver is below 20 years old, they cannot rent a car.</li>
    <li>If the driver is between 20 and 24 years old, they can rent the car, but they need to pay an underage driver fee.</li>
    <li>If the driver is over the age of 25, they can rent the car.</li>
  </ul>

  <p><strong>Ready for another challenge? </strong>Write a program that asks the user for the product of 5 and 10 and collects their response. Give the user some feedback based on their response. You decide what feedback makes sense!</p>

</div>

<div class="module-card fe-project-card">
  <h3>Building a "Guess the Number" Game</h3>
  <p>Use <a href="https://replit.com/@turingschool/ruby-number-guesser-starter#main.rb" target="blank">this replit</a> as a starting point. We are going to build a “Guess the Number” game for a user in the console. In the starter kit, you already have a <code>secret_number</code> variable assigned to 6 and a <code>puts</code> statement that shows the user the title of game. Follow the steps below to keep going!</p>
  <ol>
    <li>Next, prompt the user to enter a number from 1 to 10.</li>
    <li>If the guess is less than the secret number, tell the user, "Not quite. Too low."</li>
    <li>If the guess is greater than the secret number, tell the user, "Oops. Too high."</li>
    <li>Otherwise, tell the user they guessed the number with the statement, "You did it!"</li>
    <li>Test your code a few times to make sure you can generate all 3 responses.</li>
    <li>Finally, update the value assigned to <code>secret_number</code> to a random number from 1 to 10.</li>
  </ol>
</div>


### Up Next
- [JavaScript Number Guesser](./js-number-guesser)