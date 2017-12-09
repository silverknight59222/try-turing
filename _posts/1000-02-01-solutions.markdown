---
title: Solutions
layout: post
date: 1000-02-01
permalink: solutions
program: back-end
tags: back-end
---

## Try it: Printing Strings

```ruby
puts "Rachel Warbelow"
puts "---------------"
puts "Denver, CO"
puts "---------------"
puts "rachel@turing.io"
```

## Try it: Interpolating Strings

```ruby
pet_name = "fluffy"
food = "tuna fish"
toy = "stuffed mouse"

puts "#{pet_name} plays with #{toy} after eating #{food}."
```

## Try it: Using String Methods

```ruby
pet_name = "fluffy".capitalize
food = "tuna fish".reverse
toy = "stuffed mouse".upcase

puts "#{pet_name} plays with #{toy} after eating #{food}."
```

or

```ruby
pet_name = "fluffy"
food = "tuna fish"
toy = "stuffed mouse"

puts "#{pet_name.capitalize} plays with #{toy.upcase} after eating #{food.reverse}."
```

## Try it: Getting User Input

```ruby
puts "Yo, what's your name?"
name = gets.chomp

puts "What is your location?"
location = gets.chomp

puts "What is your email?"
email = gets.chomp

puts "Your name is #{name} and you live in #{location}. Your email address is #{email}."
```

## Try it: Control Flow

```ruby
puts "Enter a piece of text:"
input = gets.chomp
input_length = input.length

if input_length.even?
  puts "Even! (#{input_length})"
else
  puts "Odd! (#{input_length})"
end
```

## Try it: Looping

```ruby
input = ""

while input != "yes"
  puts "Are you done?"
  input = gets.chomp.downcase
end

puts "Goodbye"
```

## Try It: Guess the Number

```ruby
secret_number = rand(1..10)
guess = 0

while guess != secret_number
  puts "Guess a number."
  guess = gets.chomp.to_i
  
  if guess > secret_number
    puts "Too high."
  elsif guess < secret_number
    puts "Too low."
  else
    puts "Correct!"
  end
end
```

## Challenge: FizzBuzz

```ruby
(1..100).each do |num|
  if num % 3 == 0 && num % 5 == 0
    puts "Fizzbuzz"
  elsif num % 5 == 0
    puts "Buzz"
  elsif num % 3 == 0
    puts "Fizz"
  else
    puts num
  end
end
```

## Try It: What are you learning?

```ruby
terms = ["ruby", "arrays", "strings", "iteration"]
terms.each do |term|
  puts "I am learning about #{term}."
end
```

## Challenge: Multiplication Practice

```ruby
numbers = [10, 12, 17, 40, 55, 61]

numbers.each do |num|
  puts "#{num} multiplied by 5 is #{num * 5}."
end
```
