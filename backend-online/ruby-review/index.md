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
# this is a String:
"Hello, world!"

# this is a an Integer
43

# this is a Boolean (notice: no quotes)
true
```

## Variables

In middle school math class, you might have learned that variables are single letters that represent numeric values. In programming, we can expand that definition: **Variables** can either be single letters or full words or phrases. In addition, they can represent any data types.

The code below shows four different variables. The numbers at the beginning of the line are not part of the code; they just represent the line number.


```ruby
width = 50
year_founded = 2014
dinner_description = "Impossible burger with no onions"
greeting = "Welcome to Try Coding!"
```

Always use lowercase letters in your variable names. If you need to use a space, put an underscore (`_`) character instead of the space.

If it helps, you can think of a variable as a labeled box, and inside that box is some piece of data (a number, string, etc.)

> Most text editors have built-in color schemes to help developers recognize different data types and where mistakes might be. For example, if a developer left off a closing quotation mark, the coloring for the rest of the program would be off.

Once you've defined variables, you can use them like this:

<iframe height="400px" width="100%" src="https://repl.it/@ameseee/variables?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div class="try-it-new">
  <h2>Try It: Variables</h2>
  <p>In a new repl, declare 4 variables named <code>first_name</code>, <code>loves_snacking</code>, <code>number_pets</code>, and <code>location</code>. Assign appropriate values to each variable.</p>
  <p>Make sure to use <code>puts</code> or <code>print</code>, then run your code to verify it's running as expected!</p>
</div>

## NEW: String Interpolation

String Interpolation allows us to do something really powerful - but in the spirit of exploring to learn, we aren't gong to tell what what exactly it does. Here's an example of the syntax:

```ruby
first_name = "Oscar"

print "Welcome to Try Coding, #{first_name}!"
```

<div class="try-it-new">
  <h2>Try It: Exploring String Interpolation</h2>
  <p>Read the code above and try to predict what will happen when it is run. Try to explain why.</p>
  <p>Next, predict what will happen if you change the string that the <code>first_name</code> variable is storing. What will print?</p>
  <p>Finally, type the code into your repl and run it - does that verify or falsify your prediction?</p>
</div>
