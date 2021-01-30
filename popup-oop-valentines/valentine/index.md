---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Valentine Generator

Now that we have an understanding of OOP and have used some Ruby syntax to write classes and create objects from them, we are ready to write a program that generates Valentine messages!

<div class="try-it-new">
  <h2>Brainstorm</h2>
  <p>What are some attributes you would have in a valentines message? The one we are starting with is <em>recipient</em>.</p>
</div>

<div class="try-it-new">
  <h2>Customize your Valentine</h2>
  <p>Use <a target="blank" href="https://repl.it/@turingschool/valentines-starter#main.rb">this repl.it</a> as a starter kit. It has the code for a Valentine class, and what we call a <em>method</em>. It currently has only one attribute and is creating one instance.</p>
  <ul>
    <li>Add at least 2 more attributes to your class.</li>
    <li>Create several more objects.</li>
    <li>Run your repl.it file to make sure you can see your Valentine messages!</li>
  </ul>
</div>

## Extension

In Ruby (and other proramming languages), we have ways to store a collection of data. One way is by using what we call an `array`. We can think of it like a list!

Here's an example of an array of numbers:

```ruby
numbers = [1, 3, 5, 7, 9]
p numbers
```

If you'd like to print out all your Valentines with one line of code, one way to do that is by storing them in an array. A couple changes were made from our original code in order to write this solution.

```ruby
class Valentine
  def initialize(recipient)
    @recipient = recipient
  end

  def create_valentine
    "To #{@recipient}: I love you!"
  end
end

mom = Valentine.new("Mom")
bff = Valentine.new("BFF")

valentines = [
  mom.create_valentine,
  bff.create_valentine
]

puts valentines
```

In OOP, it is common to store instances in an list, or array, like that.

<a href="../wrap-up">Wrap Up</a>