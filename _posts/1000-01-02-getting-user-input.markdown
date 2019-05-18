---
title: Getting User Input
layout: post
date: 1000-01-02
permalink: getting-user-input
program: back-end
tags: back-end
---

Our program isn't very exciting so far. Let's make a new repl called `user_input` and try this out:

```ruby
puts "Enter your name: "
username = gets.chomp
puts "Nice to meet you, #{username}."
```

<div class="try-it">
<h2>Try it: Getting User Input</h2>

<p>Write a program that asks a user for their name, location, and email address. Output the following:</p>

<pre>Your name is Rachel and you live in Denver, CO. Your email address is rachel@turing.io.</pre>
Try running your program a few times with different inputs.
<p><b>Done?</b> Try adding string methods to your program to properly capitalize the user's name. You could also try splitting up your city and state so that you can upcase the state code.</p>
</div>
