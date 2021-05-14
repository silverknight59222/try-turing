---
layout: lesson
---

# Ruby Review

<a href="../">Back to Curriculum Index</a>

## Goals

- Be comfortable using the _repl.it_ interface
- Re-assign variables
- Identify different between `puts` and `print`
- Explore String methods

## Re-assinging Variables, puts vs. print

In the spirit of exploring to learn, we aren't gong to tell what what exactly the code below does.

```ruby
first_name = "Oscar"
puts "Welcome to Try Coding, #{first_name}!"

first_name = "Sodie"
puts "Welcome to Try Coding, #{first_name}!"
```

<div class="try-it-new">
  <h2>Try It: Exploring Re-assignment</h2>
  <p>Read the code above and predict what will happen when it is run. Try to explain why.</p>
  <p>Now, type the code into your repl.it and run it - does that verify or falsify your prediction?</p>
  <p>Last, change both instances of <code>puts</code> to <code>print</code>. Observe the change in output. What does that tell you about the job that each command has?</p>
</div>

## String Methods

In the spirit of exploring to learn, we aren't gong to tell what what exactly the code below does.

```ruby
friend = "osCAr"
puts "Hello, #{first_name}!"
puts "Hello, #{first_name.capitalize}!"
```

<div class="try-it-new">
  <h2>Try It: Exploring Methods</h2>
  <p>Read the code above and predict what will happen when it is run. Try to explain why.</p>
  <p>Now, type the code into your repl.it and run it - does that verify or falsify your prediction?</p>
  <p>Then, change <code>capitalize</code> to <code>upcase</code>, then <code>downcase</code>, then <code>reverse</code>. Re-run the code each time to change it, and observe the output.</p>
</div>

<a href="../user-input">Next: User Input</a>
