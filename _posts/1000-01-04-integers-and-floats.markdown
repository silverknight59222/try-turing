---
title: Integers and Floats
layout: post
date: 1000-01-04
permalink: integers-and-floats
---

In Ruby, there are two main types of numbers:

* Integer: positive or negative whole number
* Float: positive or negative number with decimal places

Ruby gives us an interactive console called IRB (you can think of it as a "sandbox mode" for Ruby) where we can test things out without having to write them in a file. Let's play around in this console. To get into it, type this:

```
$ irb
```

You'll see a prompt that looks like this:

```
2.2.4 :001 > 
```

To get out of it, type exit, then hit the enter key:

```
2.2.4 :001 > exit
```

Go back into IRB and try out the following things. What do you notice? What do you think these "to_f", "to_i", and "to_s" methods do? 

{% highlight ruby %}
x = 5
x.to_f
y = 5.6
y.to_i
z = 10
z.to_s
{% endhighlight %}

<h4>Comparing Values</h4>

Just like in middle school math class, we can use comparison operators to compare numbers. The return values are either true or false. 

{% highlight ruby %}
5 == 5
3 > 3
3 >= 3
2 < 1
3 != 6
{% endhighlight %}

Or with variables:

{% highlight ruby %}
child_1 = 10
child_2 = 15

child_1 > child_2
{% endhighlight %}

Value comparison doesn't just apply to numbers. We can compare the equality of strings as well:

{% highlight ruby %}
message = "hello, world!"
input   = "hello world!"

message == input
message != input
{% endhighlight %}

<div class="card cyan">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try It: Guess the Number</b></span>
    <p>
      Use what you know about while loops and if/else statements to write a program that sets a secret number, then allows a user to guess. If the number is too high, print "Too high! Guess again." If the number is too low, print "Too low! Guess again." If the number guessed is the secret number, then print "Correct!" and exit the game. 
      <br>
      <div class="output">
        Guess a number.
        5
        Too low! Guess again. 
        10 
        Too high! Guess again.
        9
        Correct!
      </div>
      <b>Try getting started before looking at the code snippet below.</b> If you're stuck, check out the starter code below:
    </p>
  </div>
</div>

{% highlight ruby %}
secret_number = rand(1..10)
guess = 0

while guess != secret_number
  # write your code here
end
{% endhighlight %}
