---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Build Your Own Class

Now that we have an understanding of OOP and have used some Ruby syntax to write classes and create objects from them, we are ready to write a program that generates many instances of a class!

For this final section, you will choose the pace at which you want to work and the level of support you get. Read through the three options below and select the one you feel most comfortable and excited about:

<section class="data-type-cards language-cards">
  <div>
    <h3>Mild <span role="img" aria-label="one flame emoji">🔥</span></h3>
    <p>You will get starter code and some step-by-step directions that walk you through what to do and why you're doing it.</p>
    <p><a href="https://repl.it/@turingschool/oop-mild-starter#main.rb">This is your starter kit.</a></p>
  </div>
  <div>
    <h3>Medium <span role="img" aria-label="two flame emojis">🔥🔥</span></h3>
    <p>You will get some starter code and some direction on what to add to it, but will be pushed to apply all of today's learning without explicit direction at times.</p>
    <p><a href="https://repl.it/@turingschool/oop-medium-starter#main.rb">This is your starter kit.</a></p>
  </div>
  <div>
    <h3>Spicy <span role="img" aria-label="three flame emojis">🔥🔥🔥</span></h3>
    <p>You will not have any starter code for this option. Choose your own topic to make a class and instances of that class.</p>
    <p>There is no starter kit; create a new repl.it on your own!</p>
  </div>
</section>
<br>

## Extension

In Ruby (and other proramming languages), we have ways to store a collection of data. One way is by using what we call an `array`. We can think of it like a list!

Here's an example of an array of numbers:

```ruby
numbers = [1, 3, 5, 7, 9]
p numbers
```

If you'd like to print out all your sentences with one line of code, one way to do that is by storing them in an array. A couple changes were made from our original code in order to write this solution.

```ruby
class Message
  def initialize(recipient)
    @recipient = recipient
  end

  def create_message
    "To #{@recipient}: Hello!"
  end
end

mom = Message.new("Mom")
bff = Message.new("BFF")

messages = [
  mom.create_message,
  bff.create_message
]

puts messages
```

In OOP, it is common to store instances in a list, or array, like the one above.

<a href="../wrap-up">Wrap Up</a>