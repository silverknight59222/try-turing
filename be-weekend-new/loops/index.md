---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [What is Back End Engineering?](../what-is-bee)
- [Ruby Introduction](../ruby-intro)
- [Ruby Methods](../ruby-methods)
- [Control Flow](../control-flow)


# Loops

In computer programming, usually our code only executes one time. A loop allows us to execute a line of code continuously until a certain condition is met.

## Goals

- Explain when we need to use a loop and how it works
- Write loops to execute code repeatedly

## Doing the Same Thing Many Times

At this point, you might have noticed that our program only allows our user to guess once! Unless our user is psychic, they probably won’t be able to guess the number on the first try. This is where we need a loop! Loops allow us to repeat something many times in our code. There are many different ways we can write loops in Ruby and each one works in a slightly different way. Let’s start with the times method. Take a look at this code. What do you think it will do?

```ruby
10.times { puts "hello" }
```

How might we modify the code to print "goodbye" only three times? Or what about printing “howdy” one hundred times? This method is super powerful when we want to repeat code many times over in our program without actually writing that code many times over.

But the times method won’t really work for our “Guess the Number” game. We don’t want to give our user only a certain number of guesses. Instead, we want to keep asking them to guess until a condition is met, **until** they guess the secret number. Lucky for us, Ruby has a tool that can help us – the <code>until</code> loop! The code below demonstrates how we might ask a user a question repeatedly until they guess the correct answer.

```ruby
name = "Kaitlyn"

begin
  print "What’s my name? "
  guess = gets.chomp

  if guess != "Kaitlyn"
    puts "Nope. Try Again."
  end
end until guess == "Kaitlyn"

puts "And don't you forget it!"
```

<div class="try-it-new">
  <h3>Try It: Practice Until Loops</h3>
  <p>Follow the directions below to complete each exercise in your sandbox replit.</p>
  <ol>
    <li>Write a short program that repeatedly asks the user, "What is 3 + 3?" until they enter the correct answer! Hint: You may need another ruby method for this one that converts a String data type into an Integer data type.</li>
    <li>Write a program that asks the user to guess your age. If their guess is too low, respond with, "Too low. Guess again!" If they guess a number that is too high, respond with, "I’m offended." Continue responding until their guess is your correct age and respond with, "It’s such a fun age."</li>
  </ol>

  <p><strong>Implement this learning in your "Guess the Number" game!</strong> Use an <code>until</code> loop in your “Guess the Number” game to give your user unlimited guesses. If you'd like to check your work when you're finished, it should look something <a href="https://replit.com/@turingschool/ruby-number-guesser-final#main.rb" target="blank">like this!</a></p>

</div>

### Up Next

- [Extension Challenge](../extension)
- [Wrap-Up](../wrap-up)
