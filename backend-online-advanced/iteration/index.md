---
layout: lesson
---

# Iteration

<a href="../">Back to Curriculum Index</a>

## Goals

- Use Ruby syntax to iterate over arrays
- Filter through an array, given specific criteria

## Iteration 

**Iteration** is defined as _the repetition of a process_. We see iteration in the physical world all the time. Let's think about the process of washing dishes:
- You have a **collection** of dishes in the sink
- For **each** dish...
  - We soak it, scrub it, rinse it, dry it.
- Then, repeat with next dish. Continue until all dishes are dried

In programming, we follow a similar cadence. Let's think about all those promotional emails we wake up to every morning:
- The app has a long **list** of email addresses in it's database
- For **each** email address...
  - The app sends an email off to that address at 5:30am
- Then, repeat with next email address. Continue until all email addresses have been used

## Syntax for Iteration

To write code that iterates over an array, we will follow the cadence we saw in the examples above:
- Start with a **collection** (Array)
- Identify **each** element
- **Do** something with/to it
- Repeat until all elements have been worked with

[Let's walk through](https://repl.it/@ameseee/each-intro#main.rb) what each piece of the code below is doing:

```ruby
numbers = [2, 5, 9, 5]

numbers.each do |number|
  puts number * 2
end
```

Here's an example with strings:

```ruby
cities = ["Denver", "LA", "NYC", "Philadelphia"]

cities.each do |city|
  puts "Welcome to beautiful #{city}!"
end

print "cities array is unchanged: #{cities}"
```

Using `each` in the way we are above, we will not mutate, or change, the original array!

<div class="try-it-new">
  <h2>Try It: Iteration</h2>
  <p>Using the <code class="try-it-code">each</code> method, iterate over your array of site/app names and print out a message using each of them.</p>
</div>

## A More Advanced Method

Sometimes, we don't want to perform the exact same action on every element in an array. Let's think about the favoriting feature on Kahoot:
- A user can "favorite" a kahoot
- A user can view all kahoots
- A user can click a button to view favorited kahoots _only_

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
  <p>Using the <code class="try-it-code">select</code> method, iterate over your array of site/app names select only the names that are longer than 6 characters.</p>
  <div class="help-container">
    <button class="help-click">🤚Help Me!</button>
    <div class="help-toggle">
      <pre>frequent_sites = ["Twitter", "GitHub", "Reddit", "Gmail", "my bank"]

long_site_names = frequent_sites.select do |site|
  site.length > 6
end

puts long_site_names</pre>
    </div>
  </div>
  <div class="spicy-container">
    <p class="spicy-click">Click here for an Early Finisher Challenge!</p>
    <div class="spicy-toggle">
      <p>Using the same methods and syntax as the initial challenge, write code that will create an array of all the names from your original array that start with the letter "A".</p>
    </div>
  </div>
</div>

### How Useful Is This?

While we've gotten into some really interesting and intermediate programming concepts, it still may be hard to see the utility in this. A single piece of info alone isn't enough. If we think back to our YouTube example from the beginning of the day, we know that each video has much more info attached to it - creator, title, length, etc. In the next section, we will discuss more sophisticated ways to store data.

<br>
<a href="../">Back to Curriculum Index</a>