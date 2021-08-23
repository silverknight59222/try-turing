---
layout: lesson
---

# Iteration

<a href="../">Back to Curriculum Index</a>

## Goals

- Explain the concept and purpose of iteration in programming
- Iterate over an array using the `.each` method

## Iteration in Real-World Scenarios

Iteration (or looping for a specified number of times) is **the process of repeating a task for each object in a collection**. For each of the scenarios below, we’ll use scenarios we are familiar with to demonstrate the concept.

The following example would be programmatically challenging because it would require several steps, but it is something a teacher may do every day.

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
- Checking _each_ inventory item to see if it includes the user's search request
- Displaying a row in the table for _each_ friend a user is connected with

>As you may notice, each list must have a specific type of data in order for this to work. For the email example, if we had an array that held emails and phone numbers, that may create errors in the code that would stop it from running. That's why it is a best practice to group items together in an array only if they are the same data type and same kind of information!

Iteration can save us a lot of time and code. Consider an array of names:
```ruby
names = ["Sean", "Nicole", "Aedan", "Jason"]

puts names[0]
puts names[1]
puts names[2]
puts names[3]
```

If we wanted to repeat an action for every name, we'd have to write that code out 4 times. If we added a name, or 30 names, we'd have to re-write that code for each name added. As you can imagine, this can become very redundant and create oportunities for human error!
<br>

## `.each` syntax

There are many ways we can write code that iterates - some are better suited for certain situations, and sometimes the decision about which method to use will come down to the developer's opinions and preferences. 

Today, we will use the `.each` method that is built into Ruby to iterate over arrays!

Let's explore this example in a repl.it:

```ruby
names = ["Sean", "Nicole", "Aedan", "Jason"]

names.each do |name|
  puts name
end
```

<div class="try-it-new">
  <h2>Try It: Iteration</h2>
  <p>Go back to your challenge project. If you've lost it or want to start with a fresh one, <a href="https://replit.com/@turingschool/favorite-foods-SOLUTION#main.rb" target="blank">you can use this repl.it!</a></p>
  <p>Instead of print or puts for the entire array as is, see if you can use <code>.each</code> to print a sentence for each item in the array or add an asterisk to serve as a bullet point. Here's one example of inputs and the final output:</p>
  <pre>What is your favorite breakfast food?
hash browns
What is your favorite lunch food?
turkey sandwiches
What is your favorite dinner food?
angel hair pasta
What is your favorite dessert?
cheesecake
------------------------------
Great! Your favorite foods are:
* hash browns
* turkey sandwiches
* angel hair pasta
* cheesecake
...
</pre>
</div>

<a href="../wrap-up">Next: Wrap Up</a>