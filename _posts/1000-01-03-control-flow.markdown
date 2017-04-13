---
title: Control Flow
layout: post
date: 1000-01-03
permalink: control-flow
program: back-end
tags: back-end
---

Control Flow refers to being able to determine what the program does given certain inputs. Let's make a new file `control_flow.rb` and try this out:

```ruby
puts "What is the best type of cookie: "
cookie_type = gets.chomp
if cookie_type == "Chocolate Chip"
  puts "Correct!"
else
  puts "You're wrong."
end
```

```ruby
puts "What is the best type of cookie: "
cookie_type = gets.chomp

if cookie_type == "Chocolate Chip"
  puts "Correct!"
elsif cookie_type == "Oatmeal Raisin"
  puts "Yuck!"
else
  puts "Hmm. I don't recognize that kind of cookie."
end
```

<div class="try-it">
<h2>Try it: Control Flow</h2>

<p>Write a program that asks a user for a piece of text. It should say "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd. In parentheses, put the number of letters for that word.</p>

<p>Hint: there is a method .even? that returns a true/false value for integers.</p>

<pre>Enter a piece of text:
Turing
Even! (6)</pre>
Try running your program a few times with different inputs.
</div>


## Looping

Looping is the idea that something will happen until a condition is met. For example: while you are hungry, keep eating. Once you are full, stop eating.

In code, that might look like this:

```ruby
stomach = 0

while stomach < 10
  puts "keep eating!"
  stomach += 1
end

puts "done eating."
```

<div class="try-it">
<h2>Try it: Looping</h2>

<p>Write a program that asks a user if they are done. The user can enter anything, but if they enter "yes", then the loop should stop and the program should print out "Goodbye!"</p>

<pre>Are you done?
No
Are you done?
Pizza
Are you done?
igdfhsij
Are you done?
yes
Goodbye!</pre>
If you're having trouble getting started, check out the code snippet below.
</div>

```ruby
input = ""

while input != "yes"
  # write your code here
end
```
