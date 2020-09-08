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

Let's pretend we are making a packing list for an upcoming family camping trip. We could list out what we need to bring like this: 

```ruby
items_to_pack = ["sleeping bag", "sleeping bag", "sleeping bag", "tent", "s'mores ingredients", "s'mores ingredients", "s'mores ingredients", "s'mores ingredients", "snacks", "snacks", "snacks", "snacks", "snacks", "snacks"]
```

<div class="try-it-new">
  <h2>Share Out</h2>
  <p>What's wrong with this? How would you prefer this data be formatted?</p>
</div>

## Hashes

A **hash** is another Ruby data type that lets us store multiple pieces of data. The difference between a hash and an array is that hashes allow us to have associative relationships between peices of data. [Let's look at this example](https://repl.it/@ameseee/hashes#main.rb):

```ruby
items_to_pack = {
  "sleeping bag": 3,
  "tent": 1,
  "s'mores ingredients": 4,
  "snacks": 5
}

print items_to_pack
```

Make sure to observe the syntax Ruby expects:
- To open/close the Hash, we use curly braces `{}`
- Hashes are made up of **key/value pairs**. In the example above, `"sleeping bag"` is a key that is associated with the value of `3`
- Each key should be in quotes followed by a colon
- Each key/value pair should be separated by a comma
- Like Arrays, we can have as many key/value pairs as we like/need to in a Hash

Here's another example, a simplified Hash holding data about a Kahoot. This example show how various data types can be stored as values.

```ruby
video1 = {
  "title": "3D Printing a Motorized High Fashion Hat",
  "length": "10:15",
  "creator": "Twirling Tech Goddess",
  "likes": 131,
  "likedByMe": true
}

print video1
```

<div class="try-it-new">
  <h2>Try It: Hash Syntax</h2>
  <p>Declare a variable that stores a hash. It should be called <code class="try-it-code">user1</code> and give it at least 4 key/value pairs, with information about a user (data can be made up)!</p>
  <p>Print out the variable to verify your data is being stored correctly. It's a little different to read, but as long as you don't have any red errors, you are in good shape.</p>
</div>

## Access Values

Given my YouTube Hash, let's say I want to print out a sentence that includes the `title` and `creator` values.

We can use bracket notation to access the values that are associated with a specific key.

```ruby
video1 = {
  "title": "3D Printing a Motorized High Fashion Hat",
  "length": "10:15",
  "creator": "Twirling Tech Goddess",
  "likes": 131,
  "likedByMe": true
}

puts video1[:title]

puts "This video is titled #{video1[:title]}, created by the one and only #{video1[:creator]}!"
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
videos = [
  {
  "title": "3D Printing a Motorized High Fashion Hat",
  "length": "10:15",
  "creator": "Twirling Tech Goddess",
  "likes": 131,
  "likedByMe": true
  },
  {
  "title": "DIY Inflatable Dress with Pumps",
  "length": "10:04",
  "creator": "Twirling Tech Goddess",
  "likes": 96,
  "likedByMe": true
  }
]
```

While this looks like a LOT of code and at first glance is quite complex, we can break it down:
- `videos` is a variable that stores an Array
- The `videos` Array has 2 elements. Each of them is a Hash
- Each Hash element has 5 key/value pairs and the keys are consistent

<div class="try-it-new">
  <h2>Try It: Nested Collections</h2>
  <p>Declare a variable called <code class="try-it-code">all_users</code> that stores an Array. Your Array should have at least 2 elements, Hashes, with user information. You can use the Hash that you built earlier!</p>
  <p>Print out the variable to verify your data is being stored correctly.</p>
</div>

## Iterating over an Array of Hashes

We can now put all the pieces together! We have built more robust student lists, so iterating over and array and filtering for pieces of information associated with students may be more helpful.

Let's start with `each`. [In the code below](https://repl.it/@ameseee/nested-collections#main.rb), we are using `each` to print out a short sentence for every kahoot:

```ruby
videos.each do |video|
  puts "#{video[:title]} is #{video[:length]} long."
end
```

Getting a little spicier, let's say I want to list out all kahoots that have been _favorited_.

```ruby
#  step 1: filter out favorites and store them in an new array
likedByMe = videos.select do |video|
  video[:likedByMe] == true
end

#  step 2: iterate over favorites and print sentence for EACH of them
likedByMe.each do |favorite|
  puts "#{favorite[:title]} is a favorite!"
end
```

<div class="try-it-new">
  <h2>Try It: Iterative over Nested Collections</h2>
  <p>Iterate over your Array of student Hashes and print out a sentence for every user.</p>
  <p>Next, use <code class="try-it-code">select</code> to filter one of the keys on your user Hashes. You will probably then want to iterate over the new, filtered, Array to print out something for each of <em>those</em> user Hashes.</p>
</div>

<div class="try-it-new">
  <h2>Spicy Challenge 🌶</h2>
  <p>Include an <code class="try-it-code">daily_coffee_intake</code> key on every user. Create an Array of users whose daily coffee intake is 3 or greater. Print out an encourgaing message to each of them!</p>
  <a href="https://repl.it/@ameseee/avggrade#main.rb" target="blank">Here's one possible solution!</a>
</div>

<br>
<a href="../">Back to Curriculum Index</a>