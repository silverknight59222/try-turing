---
layout: lesson
---

# Ruby Review

<a href="../">Back to Curriculum Index</a>

## Goals

- Classify data as the Number, String, or Boolean data type
- Store various data types in variables
- Be comfortable using the _repl.it_ interface
- Use String interpolation to write sentences with dynamic data

## Basic Data Types

- A **String** is a series of characters (alpha, numeric, or symbol) between quotation marks. This is true in any programming language, not just Ruby.
- An **Integer** is a number without decimals. Basic math operations, including comparison, can be used with them.
- A **Boolean** refers to a value that is either true or false. You can think of it as an on/off switch.

```ruby
# this is a String
"Hello, world!"

# this is a an Integer
43

# this is a Boolean (notice: no quotes)
true
```

## Variables

 **Variables** can either be single letters or full words or phrases. In addition, they can represent any data types. The code below shows four different variables. The numbers at the beginning of the line are not part of the code; they just represent the line number.

```ruby
width = 50
year_founded = 2014
dinner_description = "Impossible burger with no onions"
greeting = "Welcome to Try Coding!"
```

Always use lowercase letters in your variable names. If you need to use a space, put an underscore (`_`) character instead of the space.

> Most text editors have built-in color schemes to help developers recognize different data types and where mistakes might be. For example, if a developer left off a closing quotation mark, the coloring for the rest of the program would be off.

Once you've defined variables, you can use them like this:

```ruby
first_name = "Oscar"

puts first_name
```

<div class="try-it-new">
  <h2>Review: Ruby Data Types & Variables</h2>
</div>

## Re-assigning Variables, puts vs. print

In the spirit of exploring to learn, we aren't gong to tell what what exactly the code below does.

```ruby
first_name = "Oscar"
puts "Welcome to Try Coding, #{first_name}!"

first_name = "Sodie"
puts "Welcome to Try Coding, #{first_name}!"
```

<div class="try-it-new">
  <h2>Try It: Exploring Re-assignment</h2>
  <p>Read the code above and try to predict what will happen when it is run. Try to explain why.</p>
  <p>Now, type the code into your repl and run it - does that verify or falsify your prediction?</p>
  <p>Last, change both instances of <code>puts</code> to <code>print</code>. Observe the change in output. What does that tell you about the job that each command has?</p>
</div>

<a href="../">Back to Curriculum Index</a>
