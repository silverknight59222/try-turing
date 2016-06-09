---
title: Control Flow
layout: post
date: 1000-01-03
permalink: control-flow
---

Control Flow refers to being able to determine what the program does given certain inputs. Let's make a new file `control_flow.rb` and try this out:

```rb
puts "What is the best type of cookie: "
cookie_type = gets.chomp
if cookie_type == "Chocolate Chip"
  puts "Correct!"
else
  puts "You're wrong."
end
```

```rb
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

## Try It: Control Flow

Write a program that asks a user for a piece of text. It should say "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd. In parentheses,

```
Enter a piece of text:
Turing
Even! (6)
```
