---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [Control Flow](./control-flow)

# JavaScript Number Guesser

We've now built a simple number guesser in Ruby.

You're code probably looks something like this:

```ruby
secret_number = 6

puts "Guess the secret number!"

guess = gets.chomp.to_i

if guess > secret_number
    puts "Too high!"
elsif guess < secret_number
    puts "Too low!"
else
    puts "Great job! You got it!"
end
```

This is something you might build if you were in the Back End program at Turing.

Now let's take a look at what this same code would look like if you were implementing JavaScript in our Front End program:

```js
const secret_number = 6

console.log("Guess the secret number!");

guess = parseInt($('.guess-input').val());

if(guess > secretNumber) {
    console.log("Too high!")
} else if(guess < secretNumber) {
    console.log("Too low!")
} else {
    console.log("Great job! You got it!")
}
```

Raise your zoom hand or put in the zoom chat, what are the similarities and differences you see between the Ruby code and the JavaScript code? 

**Note:**
- variable names
- how we print messages to the user
- control flow

