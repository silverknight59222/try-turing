---
layout: lesson
---

# Iteration

<a href="../">Back to Curriculum Index</a>

## Goals

- Use Ruby syntax to iterate over arrays

## Iteration 

Iteration IRL - grading papers. 
- Collection: papers
- For each: paper
- Do: read through it, mark score on top, record in gradebook
- Then: repeat with next paper

In Programming:
- Collection: email addresses
- For each: email address
- Do: send an email off to that address at 5:30am
- Then: repeat with next email address

## Syntax for Iteration

[Let's walk through](https://repl.it/@ameseee/each-intro#main.rb) what each piece of the code below is doing:

```ruby
numbers = [2, 5, 9, 5]

numbers.each do |number|
  puts number * 2
end
```

Here's an example with strings:

```ruby
courses_offered = ["Math", "Science", "ELA", "Theater"]

courses_offered.each do |course|
  puts "Welcome to #{course}!"
end
```

<div class="try-it-new">
  <h2>Try It: Iteration</h2>
  <p>Using the <code class="try-it-code">each</code> method, iterate over your array of student names and print out a personalized message for each student.</p>
</div>

## A More Advanced Method

Sometimes, we don't want to perform the exact same action on every element in an array. Let's think about the favoriting feature on Kahoot:
- A user can favorite a kahoot
- A user can view all kahoots
- A user can click a button to _just_ view favorited kahoots

How did the program sift through all the elements in the `kahoots` array and know to only show some? Again, since Ruby is _such_ a friendly language, it gives us a method called `select` that does the heavy lifting for us.

[Let's take a look](https://repl.it/@ameseee/select-intro) at the syntax:

```ruby
numbers = [2, 5, 9, 5]

small_numbers = numbers.select do |number|
  number < 7
end

puts small_numbers
```

<div class="try-it-new">
  <h2>Try It: Select</h2>
  <p>Using the <code class="try-it-code">select</code> method, iterate over your array of student names select only the names that are longer than 4 characters.</p>
</div>

### How Useful Is This?

While we've gotten into some really interesting and intermediate programming concepts, it still may be hard to see the utility in this. Names alone aren't enough. As educators, you may want to quickly determine the list of names of students who won't have their permission slip signed, or who scored below a 70 on last Friday's quiz, etc. You probably need the name of a student who meet _some other_ criteria. That is what we dive into in the next section!

<br>
<a href="../">Back to Curriculum Index</a>