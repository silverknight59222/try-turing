---
layout: lesson
---

# Iteration

<a href="../">Back to Curriculum Index</a>

## Goals

- Explain the concept and purpose of iteration in programming
- Iterate over an array using the `.each` method

## Iteration in Real-World Scenarios

Iteration (or looping for a specified number of times) is **the process of repeating a task for each object in a collection**. For each of the scenarios below, we’ll walk through using scenarios we are familiar with to demonstrate the concept.

The following example would be programmatically challenging because it would require several steps, but is something a teacher may do every day:

**A teacher is grading papers and takes the following steps:**
  1. read through the paper
  1. mark the score on top
  1. record score in gradebook
  1. repeat steps 1-3 on next paper until stack is empty

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What is another real world scenario where we repeat a task for each object in a collection?</p>
</div>

## Iteration in Programming

We could list tasks all day for the physical world - but what does this actually look like when writing software? Here are some examples:

- Sending a marketing email to _each_ email address on the list
- Checking _each_ inventory item to see if it includes the users search request
- Displaying a row in the table for _each_ friend a user is connected with

>As you may notice, each list must have a specific type of data in order for this to work. For the email example, if we had an array that held emails and phone numbers, that may create errors in the code that would stop it from running. That's why it is a best practice to write arrays in a way that they hold data of the same data type and the same kinds of information!

Iteration can save us a lot of time and code. Consider our names arrays:
```ruby
names = ["Kenny", "Marisol", "Ruben", "Hanna"]

puts names[0]
puts names[1]
puts names[2]
puts names[3]
```

If we wanted to take action with each name, we'd have to write that code out 4 times. If we added a name, or 30 names, we'd have to re-write that code for each name added. As you can imagine, this can become very redundant and create oportunities for human error!
<br>

## `.each` syntax

There are many ways we can write code that iterates - some are better suited for certain situations, and sometimes the decision about which method to use will come down to the developer's opinions and preferences. 

Today, we will use the `.each` method that is built into Ruby to iterate over arrays!

Let's explore this example in a repl.it:

```ruby
names = ["Kenny", "Marisol", "Ruben", "Hanna"]

names.each do |name|
  puts name
end
```

<div class="try-it-new">
  <h2>Try It: Iteration</h2>
  <p>Go back to your project that has an array for your favorite or most-used app. If you've lost it or want to start with a fresh one, <a href="" target="blank">you can use this repl.it!</a></p>
  <p>Use iteration to create similarly formatted output for each element in that array. For the <code>completed_workouts</code> example we've been working with, the output might look something like this (where the string "Great job" was <strong>only</strong> typed once in the code):</p>
  <pre>Great job - you completed the 10 min arms workout!
Great job - you completed the 30 min ride workout!
Great job - you completed the 15 min stretch workout!
Great job - you completed the 20 min HIIT workout!
</pre>
</div>

<a href="../wrap-up">Next: Wrap Up</a>