---
title: Control Flow
layout: post
date: 2016-01-01
permalink: remote-control-flow
program: remote
tags: remote
---

Control Flow refers to being able to determine what the program does given certain inputs. Let's make a new file `control_flow.rb` and try this out:

```ruby
puts "What is the best type of cookie: "
cookie_type = gets.chomp
if cookie_type == "chocolate chip"
  puts "Correct!"
else
  puts "You're wrong."
end
```

```ruby
puts "What is the best type of cookie: "
cookie_type = gets.chomp

if cookie_type == "chocolate chip"
  puts "Correct!"
elsif cookie_type == "oatmeal raisin"
  puts "Yuck!"
else
  puts "Hmm. I don't recognize that kind of cookie."
end
```

These if-statements work using the idea of boolean values. A boolean can be two things: true or false. Therefore, anything in the same line after the `if` or the `elsif` should evaluate to either true or false. 

The double equals sign (==) will look at both sides and figure out whether they are the same. If they are the same, it will return true. If they are not the same, it will return false. 

Only the branch of the if/elsif that returns true will actually be run. 

<div class="try-it">
<h2>Try It: Choose Your Own Adventure</h2>

<p>A vicious dragon is chasing you!</p> 

<p>Write a program that gives the user some options for what they could do. The user should choose an option based on a number. For example, if they want the first option, they would type 1. Then, based on what the user types in, print out a statement to tell the user what happened based on their choice.</p>
</div>

<br>

<div class="try-it">
<h2>Try It (Spicy Version): Even vs. Odd</h2>

<p>Write a program that asks a user for a piece of text. It should say "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd.</p>

<p>Need help? Check out <a href="https://riptutorial.com/ruby/example/16995/even-and-odd-numbers" title="">this article</a>.</p>
<p></p>

<pre>Enter a piece of text:
Coding
Even!</pre>

<pre>Enter a piece of text:
Coding
Even! 6</pre>
Try running your program a few times with different inputs.
</div>



## Looping

Looping is the idea that something will happen until a condition is met. For example: while you are hungry, keep eating. Once you are full, stop eating.

In code, that might look like this. Make a new file called `looping.rb` and paste the following code: 

```ruby
stomach = 0

until stomach == 10
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

until input == "yes"
  # write your code here
end
```
