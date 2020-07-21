---
layout: lesson
---

# Hashes

<a href="../">Back to Curriculum Index</a>

> <span role="img" aria-label="file folder">🗂</span> If your repl file is feeling cluttered, you may want to start a clean file for this next part of class!

## Goals

- Use Ruby syntax to declare variables that store Hashes
- Explain use cases for Hashes
- Access elements by key
- Create and work with more robust student lists

## Organizing Data

Say we need to monitor data on student lunches. We could keep track of how many students bring a sack lunch and how many purchase lunch. To start, let's use this array:

```ruby
student_lunches = ["sack", "sack", "sack", "sack", "sack", "sack", "sack", "sack", "purchase", "purchase", "purchase", "purchase", "purchase", "purchase", "purchase", "purchase", "purchase", "purchase"]
```

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What's wrong with this? How would you prefer this data be formatted?</p>
</div>

## Hashes

A **hash** is another Ruby data type that lets us store multiple pieces of data. The difference between a hash and an array is that hashes allow us to have associative relationships between peices of data. [Let's look at this example](https://repl.it/@ameseee/hashes#main.rb):

```ruby
student_lunches = {
  "sack": 8,
  "purchase": 10
}

print student_lunches
```

Make sure to observe the syntax Ruby expects:
- To open/close the Hash, we use curly braces `{}`
- Hashes are made up of **key/value pairs**. In the example above, `"sack"` is a key that is associated with the value of `8`
- Each key should be in quotes followed by a colon
- Each key/value pair should be separated by a comma
- Like Arrays, we can have as many key/value pairs as we like/need to in a Hash

Here's another example, a simplified Hash holding data about a Kahoot. This example show how various data types can be stored as values.

```ruby
kahoot1 = {
  "title": "Fractions Review",
  "num_questions": 10,
  "author": "ameseee",
  "favorited": false
}

print kahoot1
```

<div class="try-it-new">
  <h2>Try It: Hash Syntax</h2>
  <p>Declare a variable that stores a hash. It should be called <code class="try-it-code">student1</code> and give it at least 4 key/value pairs, with information about a student (data can be made up)!</p>
  <p>Print out the variable to verify your data is being stored correctly. It's a little different to read, but as long as you don't have any red errors, you are in good shape.</p>
</div>

## Access Values

Given my Kahoot Hash, let's say I want to print out a sentence that includes the `title` and `num_questions` values.

We can use bracket notation to access the values that are associated with a specific key.

```ruby
kahoot1 = {
  "title": "Fractions Review",
  "num_questions": 10,
  "author": "ameseee",
  "favorited": false
}

puts kahoot1[:title]

puts "This quiz is titled #{kahoot1[:title]}! Have fun!"
```

<div class="try-it-new">
  <h2>Try It: Accessing Values</h2>
  <p>Using the <code class="try-it-code">student1</code> Hash that you already wrote, print to the console at least 2 of the values stored in it.</p>
  <p>Now, use string interpolation to print out an entire sentence, using at least two values from the Hash!</p>
</div>

## Nested Collections

Both Arrays and Hashes are classified as collections - they are data types that allow us to store potentially many pieces of data.

A nested collection is defined as a "set of sets". As a Kahoot user, I have a list of Kahoots (Array). Each Kahoot within that list has multiple pieces of data associated with it, so is best represented with a Hash. So, my Array of Hashes is considered a nested collection. 

Here's the syntax:

```ruby
kahoots = [
  {
  "title": "Fractions Review",
  "num_questions": 10,
  "author": "ameseee",
  "favorited": false
  },
  {
  "title": "Fractions Warm Up",
  "num_questions": 8,
  "author": "ameseee",
  "favorited": true
  },
  {
  "title": "Fractions Final CFU",
  "num_questions": 15,
  "author": "ameseee",
  "favorited": true
  },
]
```

While this looks like a LOT of code and at first glance is quite complex, we can break it down:
- `kahoots` is a variable that stores an Array
- The `kahoots` Array has 3 elements. Each of them in a Hash
- Each Hash element has 4 key/value pairs and the keys are consistent

<div class="try-it-new">
  <h2>Try It: Nested Collections</h2>
  <p>Declare a variable called <code class="try-it-code">all_students</code> that stores an Array. Your Array should have at least 2 elements, Hashes, with student information. You can use the Hash that you built earlier!</p>
  <p>Print out the variable to verify your data is being stored correctly.</p>
</div>

## Iterating over an Array of Hashes

We can now put all the pieces together! We have built more robust student lists, so iterating over and array and filtering for pieces of information associated with students may be more helpful.

Let's start with `each`. [In the code below](https://repl.it/@ameseee/nested-collections#main.rb), we are using `each` to print out a short sentence for every kahoot:

```ruby
kahoots.each do |kahoot|
  puts "#{kahoot[:title]} has #{kahoot[:num_questions]} questions."
end
```

Getting a little spicier, let's say I want to list out all kahoots that have been _favorited_.

```ruby
#  step 1: filter out favorites and store them in an new array
favorited = kahoots.select do |kahoot|
  kahoot[:favorited] == true
end

#  step 2: iterate over favorites and print sentence for EACH of them
favorites.each do |favorite|
  puts "#{favorite[:title]} is a favorite!"
end
```

<div class="try-it-new">
  <h2>Try It: Iterative over Nested Collections</h2>
  <p>Iterate over your Array of student Hashes and print out a sentence for every student.</p>
  <p>Next, use <code class="try-it-code">select</code> to filter one of the keys on your student Hashes. You will probably then want to iterate over the new, filtered, Array to print out something for each of <em>those</em> student Hashes.</p>
</div>

<div class="try-it-new">
  <h2>Spicy Challenge 🌶</h2>
  <p>Include an <code class="try-it-code">avg_grade</code> key on every student. Create an Array of students whose average grade is below 70. Print out an encourgaing message to each of them!</p>
  <a href="https://repl.it/@ameseee/avggrade#main.rb" target="blank">Here's one possible solution!</a>
</div>

<div class="try-it-new">
  <h2>Super Spicy Challenge 🌶🌶</h2>
  <p>Build on your popsicle stick jar thinking from earlier in the day. This time, use code to randomly generate pairs. If you really want to get fancy, find a way to print out a sentence for each pair, so they know they will be working together!</p>
  <a href="https://repl.it/@ameseee/randompairs#main.rb" target="blank">Here's one possible solution!</a>
</div>

<div class="try-it-new">
  <h2>EXTRA Spicy Challenge 🌶🌶🌶</h2>
  <p><em>Disclaimer: This challenge will definitely require concepts outside of what we've learned today.</em></p>
  <p>Include a <code class="try-it-code">level</code> key on every student, values being between 1-5 (we will assume these levels refer to fluency with XYZ skill). Your goal in this challenge is to create pairs, but make sure that no student is paired with another student that is more than 1 level away from their level. For example: a student who is on level 2 can pair with someone on levels 1 and 3, but not 4 or 5.</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>