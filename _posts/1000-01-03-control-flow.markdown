---
title: Control Flow
layout: post
date: 1000-01-03
permalink: control-flow
---

Control Flow refers to being able to determine what the program does given certain inputs. Let's make a new file <span class="command">control_flow.rb</span> and try this out:

{% highlight ruby %}
puts "What is the best type of cookie: "
cookie_type = gets.chomp
if cookie_type == "Chocolate Chip"
  puts "Correct!"
else
  puts "You're wrong."
end
{% endhighlight %}

{% highlight ruby %}
puts "What is the best type of cookie: "
cookie_type = gets.chomp
if cookie_type == "Chocolate Chip"
  puts "Correct!"
elsif cookie_type == "Oatmeal Raisin"
  puts "Yuck!"
else
  puts "Hmm. I don't recognize that kind of cookie."
end
{% endhighlight %}

<div class="card cyan">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try it: Control Flow</b></span>
    <p>
      <br>
      <div class="output"> 
        
      </div>
    </p>
  </div>
</div>
