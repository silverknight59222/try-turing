---
title: User Input
layout: post
date: 2016-01-01
permalink: remote-user-input
program: remote
tags: remote
---

Our program isn't very exciting so far. Let's make a new program called `user_input.rb` and try this out:

```ruby
puts "Enter your name: "
username = gets.chomp
puts "Nice to meet you, #{username}."
```

<div class="try-it">
<h2>Try it: Getting User Input</h2>

<p>Write a program that asks a user for their name, location, and email address. Output the following:</p>

<pre>Your name is Rachel and your location is Denver, CO. Your email address is rachel@turing.io.</pre>
Try running your program a few times with different inputs.
</div>
