---
title: Integers and Floats
layout: post
date: 1000-01-04
permalink: integers-and-floats
program: back-end
tags: back-end
---

In Ruby, there are two main types of numbers:

* Integer: positive or negative whole number
* Float: positive or negative number with decimal places

In repl.it, we can test out code using the interactive console (the dark part of the screen). 

In the console, try out the following lines of code. What do you notice about the outputs? What do you think these "to_f", "to_i", and "to_s" methods do?

```ruby
x = 5
x.to_f
y = 5.6
y.to_i
z = 10
z.to_s
```

## Comparing Values

Just like in middle school math class, we can use comparison operators to compare numbers. The return values are either true or false.

```ruby
5 == 5
3 > 3
3 >= 3
2 < 1
3 != 6
```

<div class="try-it">
<h2>Try It: Guess the Number</h2>

<p>Use what you know about while loops and if/else statements to write a program that sets a secret number, then allows a user to guess. If the number is too high, print "Too high!" and prompt the user to guess again. If the number is too low, print "Too low!" and prompt the user to guess again. If the number guessed is the secret number, then print "Correct!" and exit the game.</p>

<p>Important: gets stands for "get string". This means that even if the user enters a number, like 9, the computer reads it as "9" (which is not the same as 9). </p>

<pre>Guess a number.
5
Too low! Guess again.
10
Too high! Guess again.
9
Correct!</pre>
Try getting started before looking at the code snippet below. If you're stuck, check out the starter code below:
</div>

```ruby
secret_number = rand(1..10)
guess = 0

while guess != secret_number
  # write your code here
end
```

Done? Try the challenge below! You'll encounter iteration, which we haven't talked about yet. Don't be afraid to do some Googling to find things you can use to solve the challenge. 

<div class="try-it">
<h2>Challenge: FizzBuzz</h2>

<p>Make a program that goes through numbers 1 through 100 and says "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both. If the number is not divisible by either 3 or 5, then just print the number.</p>

<pre>1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...etc</pre>
Try getting started before looking at the code snippet below. If you're stuck, run the starter code below and see if you can modify it to make the FizzBuzz program:
</div>

```ruby
(1..100).each do |num|
  puts num
end
```
