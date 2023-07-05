---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [Control Flow](../control-flow)

# JavaScript Number Guesser

Your Ruby number guesser code probably looks something like this:

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

if (guess > secretNumber) {
    console.log("Too high!")
} else if (guess < secretNumber) {
    console.log("Too low!")
} else {
    console.log("Great job! You got it!")
}
```

Raise your zoom hand or put in the zoom chat, what are the similarities and differences you see between the Ruby code and the JavaScript code? 

**Take a look at**
- variable names
- how we print messages to the user
- control flow

## Front End versus Back End

Whether we're working on the Front End or the Back End of an application, there is a lot of logic and data manipulation involved as illustrated by the number guessing code. The difference in Front End and Back End comes in what you'd work on next. 

If you're in the Front End program your next steps in this number guesser program might be to build the user interface, what the user sees and interacts with. Think about the webpage for this number guessing application. 

- What would the styling of this page be? (colors, fonts, shading)
- How would the user input their guess and what would that *element* look like? 
- Would there be any animations on the page to engage the user? 


If you're in the Back End program, your next steps might be in dealing with how to store this data and what to do with the data.

- How should we store the information in the database? 
- Do we need to manipulate the data before storing it? 
- Is there any additional information we can get from the data such as averages, sums, or counts?

## Questions

What questions do you have about any of the content we've covered so far? 

## Up Next:
- [Wrap Up](../wrap-up)
