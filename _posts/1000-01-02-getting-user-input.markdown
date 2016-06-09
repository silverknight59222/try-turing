---
title: Getting User Input
layout: post
date: 1000-01-02
permalink: getting-user-input
---

Our program isn't very exciting so far. Let's make a new program called <span class="command">user_input.rb</span> and try this out:

```ruby
puts "Enter your name: "
username = gets.chomp
puts "Nice to meet you, #{username}."
```

<div class="card cyan">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try it: Getting User Input</b></span>
    <p>
      Write a program that asks a user for their name, location, and email address. Output the following:
      <br>
      <div class="output">
        Your name is Rachel and you live in Denver, CO. Your email address is rachel@turing.io.
      </div>
      Try running your program a few times with different inputs.
    </p>
  </div>
</div>
