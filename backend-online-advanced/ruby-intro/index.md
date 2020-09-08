---
layout: lesson
---

# Ruby Intro

<a href="../">Back to Curriculum Index</a>

## Goals

- Classify data as the Number, String, or Boolean data type
- Store various data types in variables
- Be comfortable using the _repl.it_ interface
- Use String interpolation to write sentences with dynamic data

## Basic Data Types

- A **String** is a series of characters (alpha, numeric, or symbol) between quotation marks. This is true in any programming language, not just Ruby
- An **Integer** is a number without decimals. Basic math operations, including comparison, can be used with them
- A **Boolean** refers to a value that is either true or false. You can think of it as an on/off switch

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
average = 86
class_size = 28
course_description = "7th Grade Math"
teacher = "Ms. Stang"
```

Always use lowercase letters in your variable names. If you need to use a space, put an underscore (`_`) character instead of the space.

## Re-assigning Variables

Variables are named so because the values they hold can change over time. Once a variable is re-assigned, the previous value it stored is no longer in the program's memory.

```ruby
student = "Frankie"
puts "Welcome to class, #{student}!"
# => "Welcome to class, Frankie!"

student = "Taylor"
puts "Welcome to class, #{student}!"
# => "Welcome to class, Taylor!"

student = "Jeremiah"
puts "Welcome to class, #{student}!"
# => "Welcome to class, Jeremiah!"
```

## Methods

A ruby **method** is a piece of code that packages up instructions for the program to follow. Some other languages refer to them as functions. Many methods are built-in to the ruby language to make developers work easier and code cleaner. Developers can also write their own methods. 

Today, we will focus on using built-in ruby methods. Imagine this real-world scenario: a (well-trained) dog can react to the command `sit`, `bark`, `roll_over`, etc. In code, we might write these like this:

```ruby
dog.sit
dog.bark
dog.roll_over
```

We would call these Dog methods since they are specific to a dog - you wouldn't tell a human to "roll over" or "bark"!

Just like we have these (made up) dog methods, we also have (real, ruby) String methods.

<div class="try-it-new">
  <h2>Try It: String Methods</h2>
  <p>In your breakout rooms, look at the code in <a href="https://repl.it/@turingtrycoding/stringmethods?lite=true#main.rb">this repl</a>. Line by line, predict what will print out to the console based on the name of the method called on <code class="try-it-code">message</code>.</p>
  <p>Then, click the green "run" button to run the code. What did you learn? Any surprises?</p>
  <p>Discuss: Does this make you wonder anything like "I wonder if ruby has a method for ____?". Share out, then if time, get wild and google it and see if you can find an answer!</p>
  <p>Now, uncomment (or, delete the `#` character at the start of) lines 12 and 13. Re-run the program. Read the error carefully, and try to make sense of why that line 13 didn't behave the same way line 4 did.</p>
</div>

<a href="../">Back to Curriculum Index</a>
