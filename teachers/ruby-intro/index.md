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

> Most text editors have built-in color schemes to help developers recognize different data types and where mistakes might be. For example, if a developer left off a closing quotation mark, the coloring for the rest of the program would be off.

Once you've defined variables, you can use them like this:

```ruby
student_name = "Frankie"

puts student_name
```

<div class="try-it-new">
  <h2>Review: Ruby Data Types & Variables</h2>
</div>

## Re-assigning Variables, puts vs. print

In the spirit of exploring to learn, we aren't gong to tell what what exactly the code below does.

```ruby
student = "Frankie"
puts "Welcome to class, #{student}!"

student = "Taylor"
puts "Welcome to class, #{student}!"
puts "Welcome to class, #{student}!"

student = "Jeremiah"
puts "Welcome to class, #{student}!"
```

<div class="try-it-new">
  <h2>Try It: Exploring Re-assignment</h2>
  <p>Read the code above and predict what will happen when it is run. Try to explain why.</p>
  <p>Now, type the code into your repl and run it - does that verify or falsify your prediction?</p>
  <p>Last, change all instances of <code>puts</code> to <code>print</code>. Observe the change in output. What does that tell you about the job that each command (puts and print) has?</p>
</div>

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
  <p>Look at the code in <a href="https://repl.it/@turingtrycoding/stringmethods?lite=true#main.rb">this repl. Line by line, predict what will print out to the console based on the name of the method called on <code class="try-it-code">message</code>.</a></p>
  <p>Then, click the green "run" button to run the code. What did you learn? Any surprises?</p>
  <p>Discuss: Does this make you wonder anything like "I wonder if ruby has a method for ____?". Share out, then if time, get wild and google it and see if you can find an answer!</p>
</div>

<a href="../">Back to Curriculum Index</a>
